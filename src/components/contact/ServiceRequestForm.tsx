"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  prepareServiceRequest,
  submitServiceRequest,
  validateServiceRequestStep,
} from "@/lib/service-request";
import type {
  ServiceRequest,
  ServiceRequestDraft,
  ServiceRequestErrors,
  ServiceRequestStepNumber,
} from "@/types/service-request";
import { ContactStep } from "./ContactStep";
import { DeliveryStep } from "./DeliveryStep";
import { DetailsStep } from "./DetailsStep";
import { LocationStep } from "./LocationStep";
import { ProblemStep } from "./ProblemStep";
import { ProgressIndicator } from "./ProgressIndicator";
import { ReviewStep } from "./ReviewStep";

const INITIAL_REQUEST: ServiceRequestDraft = {
  customerType: "residential",
  preferredContactMethod: "email",
};

const VALIDATION_STEPS = [1, 2, 3, 4, 5] as const;

type SubmissionStatus = "idle" | "submitting" | "error" | "success";

export function ServiceRequestForm() {
  const [request, setRequest] = useState<ServiceRequestDraft>(INITIAL_REQUEST);
  const [currentStep, setCurrentStep] = useState<ServiceRequestStepNumber>(1);
  const [errors, setErrors] = useState<ServiceRequestErrors>({});
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [returnToReview, setReturnToReview] = useState(false);
  const [panelVisible, setPanelVisible] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (submissionStatus === "success") {
      successRef.current?.focus();
    }
  }, [submissionStatus]);

  function updateField<K extends keyof ServiceRequest>(
    field: K,
    value: ServiceRequest[K] | undefined,
  ): void {
    setRequest((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (submissionStatus === "error") {
      setSubmissionStatus("idle");
    }
  }

  function navigateToStep(
    step: ServiceRequestStepNumber,
    nextErrors: ServiceRequestErrors = {},
  ): void {
    setPanelVisible(false);
    setCurrentStep(step);
    setErrors(nextErrors);

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = window.requestAnimationFrame(() => {
        setPanelVisible(true);
        if (Object.keys(nextErrors).length > 0) {
          formRef.current
            ?.querySelector<HTMLElement>('[aria-invalid="true"]')
            ?.focus();
        } else {
          panelRef.current?.focus();
        }
      });
    });
  }

  function focusFirstInvalidField(): void {
    window.requestAnimationFrame(() => {
      formRef.current
        ?.querySelector<HTMLElement>('[aria-invalid="true"]')
        ?.focus();
    });
  }

  function handleNext(): void {
    if (currentStep === 6) {
      return;
    }

    const stepErrors = validateServiceRequestStep(request, currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      focusFirstInvalidField();
      return;
    }

    if (returnToReview) {
      setReturnToReview(false);
      navigateToStep(6);
      return;
    }

    navigateToStep((currentStep + 1) as ServiceRequestStepNumber);
  }

  function handleBack(): void {
    if (returnToReview) {
      setReturnToReview(false);
      navigateToStep(6);
      return;
    }

    if (currentStep > 1) {
      navigateToStep((currentStep - 1) as ServiceRequestStepNumber);
    }
  }

  function handleEdit(step: ServiceRequestStepNumber): void {
    setReturnToReview(true);
    navigateToStep(step);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (currentStep < 6) {
      handleNext();
      return;
    }

    if (submissionStatus === "submitting") {
      return;
    }

    const invalidStep = VALIDATION_STEPS.find(
      (step) =>
        Object.keys(validateServiceRequestStep(request, step)).length > 0,
    );

    if (invalidStep) {
      setReturnToReview(true);
      navigateToStep(
        invalidStep,
        validateServiceRequestStep(request, invalidStep),
      );
      return;
    }

    setSubmissionStatus("submitting");

    try {
      const payload = prepareServiceRequest(request);
      await submitServiceRequest(payload);
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    }
  }

  if (submissionStatus === "success") {
    return (
      <div
        aria-live="polite"
        className="min-h-[32rem] px-5 py-14 sm:px-10 sm:py-16"
        ref={successRef}
        tabIndex={-1}
      >
        <div
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#03F7F7]/50 bg-[#03F7F7]/[0.06] text-[#03F7F7]"
        >
          <svg
            fill="none"
            height="22"
            viewBox="0 0 24 24"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Request submitted</title>
            <path
              d="m5 12 4.2 4.2L19 6.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#03F7F7]">
          Service request
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#F7F8FA] sm:text-5xl">
          Request received.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#C8CBD2] sm:text-lg">
          I’ll review the details and confirm the appropriate next step and
          availability.
        </p>
        <p className="mt-8 border-l border-[#7D03F7] pl-4 text-sm leading-6 text-[#A5AAB5]">
          Submitting a request does not automatically confirm an appointment.
        </p>
      </div>
    );
  }

  const errorMessages = Object.values(errors).filter(Boolean);

  return (
    <form noValidate onSubmit={handleSubmit} ref={formRef}>
      <div className="border-b border-white/10 px-5 py-6 sm:px-8">
        <ProgressIndicator currentStep={currentStep} />
      </div>

      <div
        className={`min-h-[33rem] px-5 py-8 outline-none transition-[opacity,transform] duration-300 ease-out sm:px-8 sm:py-10 motion-reduce:transform-none motion-reduce:transition-none ${
          panelVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
        ref={panelRef}
        tabIndex={-1}
      >
        {errorMessages.length > 0 ? (
          <div
            className="mb-6 border-l-2 border-[#FF9E9E] bg-[#FF9E9E]/[0.05] px-4 py-3 text-sm text-[#FFD0D0]"
            role="alert"
          >
            Please correct the highlighted{" "}
            {errorMessages.length === 1 ? "field" : "fields"}.
          </div>
        ) : null}

        {currentStep === 1 ? (
          <ProblemStep
            errors={errors}
            onChange={updateField}
            request={request}
          />
        ) : null}
        {currentStep === 2 ? (
          <DeliveryStep
            errors={errors}
            onChange={updateField}
            request={request}
          />
        ) : null}
        {currentStep === 3 ? (
          <LocationStep
            errors={errors}
            onChange={updateField}
            request={request}
          />
        ) : null}
        {currentStep === 4 ? (
          <DetailsStep
            errors={errors}
            onChange={updateField}
            request={request}
          />
        ) : null}
        {currentStep === 5 ? (
          <ContactStep
            errors={errors}
            onChange={updateField}
            request={request}
          />
        ) : null}
        {currentStep === 6 ? (
          <ReviewStep onEdit={handleEdit} request={request} />
        ) : null}
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-white/10 px-5 py-5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:px-8">
        {currentStep > 1 ? (
          <button
            className="min-h-11 rounded-lg border border-white/15 px-5 text-sm font-medium text-[#C8CBD2] transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03F7F7] motion-reduce:transition-none"
            onClick={handleBack}
            type="button"
          >
            {returnToReview ? "Back to review" : "Back"}
          </button>
        ) : (
          <span aria-hidden="true" />
        )}

        <div className="flex flex-col items-stretch gap-3 min-[420px]:items-end">
          {submissionStatus === "error" ? (
            <p className="text-sm text-[#FF9E9E]" role="alert">
              The request could not be submitted. Please review and try again.
            </p>
          ) : null}
          <button
            className="min-h-12 rounded-lg bg-[#F7F8FA] px-6 text-sm font-semibold text-[#05070D] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#03F7F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03F7F7] disabled:cursor-wait disabled:opacity-60 motion-reduce:transform-none motion-reduce:transition-none"
            disabled={submissionStatus === "submitting"}
            type="submit"
          >
            {submissionStatus === "submitting"
              ? "Submitting…"
              : currentStep === 6
                ? "Submit Request"
                : returnToReview
                  ? "Save and Review"
                  : "Continue"}
          </button>
        </div>
      </div>
    </form>
  );
}
