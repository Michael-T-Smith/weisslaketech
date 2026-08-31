import type { ServiceRequest } from "@/types/service-request";

export const DEV_AUTOFILL_ENABLED =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_ENABLE_DEV_AUTOFILL === "true";

export function createDevServiceRequest(): ServiceRequest {
  return {
    customerType: "business",
    serviceCategory: "automation-integration",
    deliveryPreference: "remote",
    name: "Taylor Morgan [DEV TEST]",
    email: "service-request-test@example.com",
    phone: "+1 (256) 555-0147",
    preferredContactMethod: "email",
    businessName: "North Alabama Test Company",
    city: "Collinsville",
    zip: "99583",
    description: `[DEV TEST] Validate the service-request backend and notification flow. Generated ${new Date().toISOString()}.`,
    affectedDeviceCount: 4,
    softwareSystemNames: "Inventory Sandbox and Accounting Sandbox",
    preferredSchedule: "Weekday afternoons (test data)",
  };
}
