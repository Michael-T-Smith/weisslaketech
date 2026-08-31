# weisslaketech — production frontend (V1)

Purpose
-------
A focused, production-ready frontend for a veteran‑owned technology services business based in Collinsville, Alabama. This repository implements a fast, accessible, mobile‑first marketing site and guided service‑request UX built with the Next.js App Router and Tailwind CSS. It is intended to be deployed via Vercel CI/CD.

Design & product constraints
---------------------------
- Single‑session V1: frontend only. No backend, no AI, no external map SDKs.
- Server Components by default; minimal client JS only where interaction requires it.
- Centralized content and data under `src/lib/`.
- Visual identity uses restrained brand accents (electric blue, violet, cyan) and neutral surfaces; design targets clarity and editorial spacing.
- Routes implemented: `/`, `/services`, `/area`, `/faq`, `/contact`.

Stack / Runtime
---------------
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Minimal runtime JS; prefer SVG and CSS for visual devices

Developer notes — locations
---------------------------
- Global styles: [src/app/globals.css](src/app/globals.css)
- Centralized content/data: [src/lib/](src/lib/)
- Homepage components: [src/components/home](src/components/home)
- Contact flow components: [src/components/contact](src/components/contact)
- Capability artwork SVGs / media: public/media/
- Logo (expected): public/logo.svg
- Favicon: public/favicon.ico

Data contracts
--------------
Primary frontend contract for service intake (typed):

```ts
export interface ServiceRequest {
	customerType: 'residential' | 'business';
	serviceCategory:
		| 'computer' | 'hardware' | 'data' | 'network' | 'smart-device' | 'business-software' | 'automation-integration' | 'unsure';
	deliveryPreference: 'remote' | 'onsite' | 'unsure';
	name: string;
	email: string;
	phone?: string;
	preferredContactMethod: 'email' | 'phone' | 'text';
	businessName?: string;
	city: string;
	zip: string;
	description: string;
	deviceType?: string;
	affectedDeviceCount?: number;
	preferredSchedule?: string;
}

export function submitServiceRequest(payload: ServiceRequest) {
	// frontend boundary: mock / dev placeholder.
	// Replace with integration hook (API route or external form endpoint) later.
	return Promise.resolve({ ok: true, id: 'dev-placeholder' });
}
```

Operational & CI
----------------
- Local dev:

```bash
npm install
npm run dev
```

- Quality gate (run before deploy):

```bash
npm run lint      # biome
npx tsc --noEmit  # type check
npm run build     # production build
```

Accessibility & performance
---------------------------
- Semantic HTML, visible focus states, reduced‑motion support, keyboard navigation.
- Keep hero media abstracted (GIF → WebM/MP4) and provide poster/fallback to minimize runtime cost.

Placeholders & required values
------------------------------
- BUSINESS_NAME — insert official business name in src/lib/business.ts
- PHONE_NUMBER — insert contact phone where indicated
- EMAIL_ADDRESS — insert contact email where indicated
- public/media/hero.* — add production hero media (GIF/WebM/MP4) and poster images

Operational reminders
---------------------
- Do not add pricing pages or detailed price tables; expose only minimal starting hints where appropriate.
- Keep all private data and credentials out of the repo and environment; use Vercel environment variables for secrets.
- The frontend must not implement scheduling, payments, or personal data storage without an explicit backend contract.

Contributing
------------
- Follow component patterns in `src/components/` and centralized data in `src/lib/`.
- Prefer server components; mark client components with 'use client' only when necessary.

Contact & deployment
--------------------
- This project is Vercel‑ready. Push to GitHub and link the repository in Vercel to enable CI/CD. Use the production environment to populate any runtime environment variables required by future integrations.

License
-------
Proprietary — internal project for business use.
