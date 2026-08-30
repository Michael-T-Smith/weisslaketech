export type CustomerType = "residential" | "business";

export type ServiceCategory =
  | "computer"
  | "hardware"
  | "data"
  | "network"
  | "smart-device"
  | "business-software"
  | "automation-integration"
  | "unsure";

export type DeliveryPreference = "remote" | "onsite" | "unsure";

export type PreferredContactMethod = "email" | "phone" | "text";

export interface ServiceRequest {
  customerType: CustomerType;
  serviceCategory: ServiceCategory;
  deliveryPreference: DeliveryPreference;
  name: string;
  email: string;
  phone?: string;
  preferredContactMethod: PreferredContactMethod;
  businessName?: string;
  city: string;
  zip: string;
  description: string;
  deviceType?: string;
  affectedDeviceCount?: number;
  softwareSystemNames?: string;
  preferredSchedule?: string;
}

export type ServiceRequestDraft = Partial<ServiceRequest>;

export type ServiceRequestField = keyof ServiceRequest;

export type ServiceRequestErrors = Partial<Record<ServiceRequestField, string>>;

export type ServiceRequestStepNumber = 1 | 2 | 3 | 4 | 5 | 6;

export type ServiceRequestChangeHandler = <K extends ServiceRequestField>(
  field: K,
  value: ServiceRequest[K] | undefined,
) => void;
