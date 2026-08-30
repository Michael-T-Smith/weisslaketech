export type ServiceCategory = "remote" | "onsite" | "software";

export type DeliveryMode = "Remote" | "Onsite" | "Project based";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  deliveryMode: DeliveryMode;
  startingPrice?: string;
  featured?: boolean;
}

export interface ServiceCategoryDetails {
  id: ServiceCategory;
  number: "01" | "02" | "03";
  name: string;
  label: string;
  introduction: string;
}

export const serviceCategories: readonly ServiceCategoryDetails[] = [
  {
    id: "remote",
    number: "01",
    name: "Remote Technology",
    label: "Remote",
    introduction:
      "Practical support for software, operating systems, storage, and everyday technology problems that can be handled securely from a distance.",
  },
  {
    id: "onsite",
    number: "02",
    name: "Onsite Technology",
    label: "Onsite",
    introduction:
      "Hands-on help for computers, connected devices, storage, and the technology that keeps a home or small office working.",
  },
  {
    id: "software",
    number: "03",
    name: "Software & Business Systems",
    label: "Project",
    introduction:
      "Focused engineering for recurring work, disconnected systems, difficult data, and business processes that have outgrown their current tools.",
  },
] as const;

export const services: readonly Service[] = [
  {
    slug: "remote-computer-diagnostics",
    name: "Remote computer diagnostics",
    category: "remote",
    shortDescription:
      "Investigate performance, stability, and configuration issues without an onsite visit.",
    deliveryMode: "Remote",
    startingPrice: "Starting around $50",
    featured: true,
  },
  {
    slug: "software-installation-configuration",
    name: "Software installation & configuration",
    category: "remote",
    shortDescription:
      "Install supported software and configure the essential settings for your device or workflow.",
    deliveryMode: "Remote",
    startingPrice: "Starting around $60",
  },
  {
    slug: "malware-assessment-cleanup",
    name: "Malware assessment & cleanup",
    category: "remote",
    shortDescription:
      "Assess suspicious behavior, remove detected common threats where possible, and recommend practical next steps.",
    deliveryMode: "Remote",
  },
  {
    slug: "software-troubleshooting",
    name: "Software troubleshooting",
    category: "remote",
    shortDescription:
      "Trace application errors, compatibility conflicts, and settings that prevent software from working correctly.",
    deliveryMode: "Remote",
  },
  {
    slug: "operating-system-troubleshooting",
    name: "Operating-system troubleshooting",
    category: "remote",
    shortDescription:
      "Investigate startup, update, account, and system-performance problems on supported computers.",
    deliveryMode: "Remote",
  },
  {
    slug: "backup-configuration",
    name: "Backup configuration",
    category: "remote",
    shortDescription:
      "Configure a practical local or cloud backup routine and verify its initial setup.",
    deliveryMode: "Remote",
  },
  {
    slug: "cloud-storage-configuration",
    name: "Cloud-storage configuration",
    category: "remote",
    shortDescription:
      "Set up supported cloud storage, file synchronization, and organized access across devices.",
    deliveryMode: "Remote",
  },
  {
    slug: "technology-consultation",
    name: "Technology consultation",
    category: "remote",
    shortDescription:
      "Evaluate a technology problem or planned purchase and identify a sensible path forward.",
    deliveryMode: "Remote",
    featured: true,
  },
  {
    slug: "ram-upgrades",
    name: "RAM upgrades",
    category: "onsite",
    shortDescription:
      "Confirm compatibility, install memory, and test the computer after the upgrade.",
    deliveryMode: "Onsite",
    startingPrice: "Starting around $60 labor + parts",
    featured: true,
  },
  {
    slug: "ssd-storage-upgrades",
    name: "SSD/storage upgrades",
    category: "onsite",
    shortDescription:
      "Install compatible storage and prepare the system for additional space or improved performance.",
    deliveryMode: "Onsite",
  },
  {
    slug: "hardware-replacement",
    name: "Hardware replacement",
    category: "onsite",
    shortDescription:
      "Replace compatible customer-approved components and confirm basic operation afterward.",
    deliveryMode: "Onsite",
  },
  {
    slug: "logical-data-recovery",
    name: "Logical data recovery",
    category: "onsite",
    shortDescription:
      "Attempt best-effort recovery of logically accessible data; physical failures may require a specialist.",
    deliveryMode: "Onsite",
  },
  {
    slug: "computer-setup",
    name: "Computer setup",
    category: "onsite",
    shortDescription:
      "Prepare a new or existing computer with updates, accounts, software, and essential settings.",
    deliveryMode: "Onsite",
  },
  {
    slug: "computer-migration",
    name: "Computer migration",
    category: "onsite",
    shortDescription:
      "Move supported user files and essential settings between compatible computers.",
    deliveryMode: "Onsite",
  },
  {
    slug: "business-workstation-deployment",
    name: "Business workstation deployment",
    category: "onsite",
    shortDescription:
      "Configure scoped workstations for users, business software, shared resources, and network access.",
    deliveryMode: "Onsite",
  },
  {
    slug: "nas-shared-storage-setup",
    name: "NAS/shared-storage setup",
    category: "onsite",
    shortDescription:
      "Configure compatible network storage for organized file access, sharing, and backup workflows.",
    deliveryMode: "Onsite",
    featured: true,
  },
  {
    slug: "router-wifi-setup",
    name: "Router/Wi-Fi setup",
    category: "onsite",
    shortDescription:
      "Set up and tune compatible routing and wireless equipment for the space it needs to serve.",
    deliveryMode: "Onsite",
  },
  {
    slug: "small-office-network-setup",
    name: "Small-office network setup",
    category: "onsite",
    shortDescription:
      "Plan and configure practical wired and wireless connectivity for a small workplace.",
    deliveryMode: "Onsite",
    featured: true,
  },
  {
    slug: "office-technology-setup",
    name: "Office technology setup",
    category: "onsite",
    shortDescription:
      "Connect and configure everyday office technology around the way your team works.",
    deliveryMode: "Onsite",
  },
  {
    slug: "network-printer-setup",
    name: "Network printer setup",
    category: "onsite",
    shortDescription:
      "Install compatible printer drivers, network connectivity, and sharing for intended users.",
    deliveryMode: "Onsite",
  },
  {
    slug: "home-wifi-camera-setup",
    name: "Home Wi-Fi camera setup",
    category: "onsite",
    shortDescription:
      "Set up compatible consumer Wi-Fi cameras where the device, site, and network are suitable.",
    deliveryMode: "Onsite",
  },
  {
    slug: "ring-smart-doorbell-setup",
    name: "Ring/smart-doorbell setup",
    category: "onsite",
    shortDescription:
      "Configure a compatible smart doorbell where existing mounting, power, and network conditions are suitable.",
    deliveryMode: "Onsite",
  },
  {
    slug: "roku-streaming-device-setup",
    name: "Roku/streaming-device setup",
    category: "onsite",
    shortDescription:
      "Connect a compatible streaming device and help configure its core apps and account access.",
    deliveryMode: "Onsite",
  },
  {
    slug: "third-party-smart-device-setup",
    name: "Third-party smart-device setup",
    category: "onsite",
    shortDescription:
      "Set up compatible third-party smart devices subject to their account, network, and installation requirements.",
    deliveryMode: "Onsite",
  },
  {
    slug: "api-integrations",
    name: "API integrations",
    category: "software",
    shortDescription:
      "Connect supported software through documented APIs to reduce duplicate work and improve data flow.",
    deliveryMode: "Project based",
    featured: true,
  },
  {
    slug: "database-work",
    name: "Database work",
    category: "software",
    shortDescription:
      "Design, query, refine, or maintain a database around a clearly defined business need.",
    deliveryMode: "Project based",
  },
  {
    slug: "sql-database-troubleshooting",
    name: "SQL/database troubleshooting",
    category: "software",
    shortDescription:
      "Diagnose scoped SQL errors, query problems, and data issues that interrupt business work.",
    deliveryMode: "Project based",
  },
  {
    slug: "database-migration",
    name: "Database migration",
    category: "software",
    shortDescription:
      "Plan and carry out a scoped move of data or schema between supported database systems.",
    deliveryMode: "Project based",
  },
  {
    slug: "workflow-automation",
    name: "Workflow automation",
    category: "software",
    shortDescription:
      "Turn repeatable manual steps into a more reliable, purpose-built workflow.",
    deliveryMode: "Project based",
    featured: true,
  },
  {
    slug: "reporting-automation",
    name: "Reporting automation",
    category: "software",
    shortDescription:
      "Create repeatable reporting processes from the business data already available.",
    deliveryMode: "Project based",
  },
  {
    slug: "business-process-automation",
    name: "Business-process automation",
    category: "software",
    shortDescription:
      "Map a recurring process and automate appropriate rules, handoffs, and routine actions.",
    deliveryMode: "Project based",
  },
  {
    slug: "spreadsheet-workflow-replacement",
    name: "Spreadsheet workflow replacement",
    category: "software",
    shortDescription:
      "Replace a fragile spreadsheet-dependent process with a structured, right-sized system.",
    deliveryMode: "Project based",
  },
  {
    slug: "internal-business-tools",
    name: "Internal business tools",
    category: "software",
    shortDescription:
      "Build a focused internal tool for the tasks, information, and people involved in a workflow.",
    deliveryMode: "Project based",
    featured: true,
  },
  {
    slug: "small-custom-applications",
    name: "Small custom applications",
    category: "software",
    shortDescription:
      "Develop scoped software for a specific business problem that off-the-shelf tools do not solve well.",
    deliveryMode: "Project based",
  },
  {
    slug: "systems-integration",
    name: "Systems integration",
    category: "software",
    shortDescription:
      "Improve the handoff of data and actions between compatible business systems.",
    deliveryMode: "Project based",
  },
  {
    slug: "technical-software-consulting",
    name: "Technical/software consulting",
    category: "software",
    shortDescription:
      "Assess a software or systems problem and define practical options before implementation.",
    deliveryMode: "Project based",
  },
] as const;

export function getServicesByCategory(
  category: ServiceCategory,
): readonly Service[] {
  return services.filter((service: Service) => service.category === category);
}

export function getFeaturedServices(): readonly Service[] {
  return services.filter((service: Service) => service.featured === true);
}
