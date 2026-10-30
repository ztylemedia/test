# Leadgen Agency — standalone Next.js website

An English-language redesign concept for Leadgen Agency, built as a separate project. It does not modify the existing Wix website or DNS.

## Included
- Next.js 14, React 18 and TypeScript
- Responsive desktop and mobile layout
- Home, services, process, customer story, about and contact sections
- HubSpot discovery-call CTA (verify the exact meeting URL before launch)
- Existing published headline, process, Nordic coverage, project/meeting figures and customer quote reflected in the redesign

## Run locally
Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm run start
```

## Before publishing
1. Confirm the HubSpot meeting URL. The current site links to HubSpot; the CTA here uses the current published booking destination: https://meetings-eu1.hubspot.com/hello-leadgen.
2. Add the official logo asset if a vector/high-resolution file is available. The current wordmark is a text treatment.
3. Add approved customer logos, case-study imagery and any further testimonials.
4. Add a working form endpoint/CRM integration if a form is required. The current contact section uses the published email address and booking CTA.
5. Add privacy/cookie information and analytics as required.
6. Test on staging, then update DNS only after approval. The existing Wix site remains untouched until that point.

## Project structure
- `app/page.tsx` — page content and sections
- `app/globals.css` — responsive styling
- `app/layout.tsx` — document metadata and root layout
- `public/design-reference.png` — visual concept reference
