<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Use the Next.js App Router with strict TypeScript and Tailwind CSS 4; prefer Server Components and isolate browser interaction in small Client Components.
- Design mobile-first down to 360px, with semantic HTML, visible focus states, reduced-motion support, and no horizontal overflow.
- Keep business, service, area, media, and pricing hints centralized under `src/lib/`; reuse that data rather than duplicating content.
- The frontend stops at the typed `submitServiceRequest` boundary. Do not add backend, scheduling, AI, credential collection, or private pricing logic here.
- Approved static assets live in `public/`; hero media belongs in `public/media/` and its active source is configured in `src/lib/media.ts`.
- Quality gate: `npm run lint`, `npx tsc --noEmit`, then `npm run build`.
