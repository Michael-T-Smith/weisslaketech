import type {
  ServiceRequest,
  ServiceRequestDraft,
  ServiceRequestErrors,
  ServiceRequestStepNumber,
} from "@/types/service-request";

export interface ServiceRequestSubmissionResult {
  status: "rejected" | "accepted",
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_PATTERN = /^\d{5}(?:-\d{4})?$/;

function isBlank(value: string | undefined): boolean {
  return !value?.trim();
}

function optionalText(value: string | undefined): string | undefined {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

export function validateServiceRequestStep(
  request: ServiceRequestDraft,
  step: ServiceRequestStepNumber,
): ServiceRequestErrors {
  const errors: ServiceRequestErrors = {};

  if (step === 1 && !request.serviceCategory) {
    errors.serviceCategory = "Choose the option that best matches the problem.";
  }

  if (step === 2 && !request.deliveryPreference) {
    errors.deliveryPreference = "Choose a preferred way to handle the work.";
  }

  if (step === 3) {
    if (!request.customerType) {
      errors.customerType = "Choose residential or business.";
    }
    if (isBlank(request.city)) {
      errors.city = "Enter the city where the work is located.";
    }
    if (isBlank(request.zip)) {
      errors.zip = "Enter the ZIP code where the work is located.";
    } else if (!ZIP_PATTERN.test(request.zip?.trim() ?? "")) {
      errors.zip = "Enter a valid 5-digit ZIP code.";
    }
  }

  if (step === 4) {
    if (isBlank(request.description)) {
      errors.description =
        "Describe what is happening and what you need help with.";
    } else if ((request.description?.trim().length ?? 0) < 10) {
      errors.description =
        "Add a little more detail so the request can be reviewed.";
    }

    if (
      request.affectedDeviceCount !== undefined &&
      (!Number.isInteger(request.affectedDeviceCount) ||
        request.affectedDeviceCount < 1)
    ) {
      errors.affectedDeviceCount = "Enter a whole number greater than zero.";
    }
  }

  if (step === 5) {
    if (isBlank(request.name)) {
      errors.name = "Enter your name.";
    }
    if (isBlank(request.email)) {
      errors.email = "Enter your email address.";
    } else if (!EMAIL_PATTERN.test(request.email?.trim() ?? "")) {
      errors.email = "Enter a valid email address.";
    }
    if (!request.preferredContactMethod) {
      errors.preferredContactMethod = "Choose a preferred contact method.";
    }

    const phoneDigits = request.phone?.replace(/\D/g, "") ?? "";
    if (request.phone && phoneDigits.length < 7) {
      errors.phone = "Enter a valid phone number.";
    } else if (
      (request.preferredContactMethod === "phone" ||
        request.preferredContactMethod === "text") &&
      phoneDigits.length < 7
    ) {
      errors.phone = "A phone number is required for phone or text contact.";
    }
  }

  return errors;
}

export function prepareServiceRequest(
  draft: ServiceRequestDraft,
): ServiceRequest {
  const allErrors: ServiceRequestErrors = {};
  for (const step of [1, 2, 3, 4, 5] as const) {
    Object.assign(allErrors, validateServiceRequestStep(draft, step));
  }

  if (Object.keys(allErrors).length > 0) {
    throw new Error("The service request is incomplete.");
  }

  const {
    customerType,
    serviceCategory,
    deliveryPreference,
    preferredContactMethod,
    name,
    email,
    city,
    zip,
    description,
  } = draft;

  if (
    !customerType ||
    !serviceCategory ||
    !deliveryPreference ||
    !preferredContactMethod ||
    !name ||
    !email ||
    !city ||
    !zip ||
    !description
  ) {
    throw new Error("The service request is incomplete.");
  }

  return {
    customerType,
    serviceCategory,
    deliveryPreference,
    preferredContactMethod,
    name: name.trim(),
    email: email.trim(),
    city: city.trim(),
    zip: zip.trim(),
    description: description.trim(),
    businessName: optionalText(draft.businessName),
    phone: optionalText(draft.phone),
    deviceType: optionalText(draft.deviceType),
    affectedDeviceCount: draft.affectedDeviceCount,
    softwareSystemNames: optionalText(draft.softwareSystemNames),
    preferredSchedule: optionalText(draft.preferredSchedule),
  };
}

/** Future backend integrations should replace only this function. */
export async function submitServiceRequest(payload: ServiceRequest): Promise<ServiceRequestSubmissionResult> { 

  let result = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!result.ok) {
    return { status: "rejected", message: `Not your fault, server error occured: Status: ${result.status}`};
  } 
  
  let response = await result.json()
  
  return response;
}
