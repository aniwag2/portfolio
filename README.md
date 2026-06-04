# Portfolio

Personal portfolio for Anitej Waghray, built with [Astro](https://astro.build)
and Tailwind CSS. Projects and experience are driven by markdown files so the
site can be updated without touching any components.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build & serve

```bash
npm run build    # outputs static site to dist/
npm start        # serves dist/ on http://localhost:3001
```

## Deploy with Docker

```bash
docker compose up -d   # serves the prebuilt awaghray/portfolio:latest on port 3001
```

To publish a new image after changes:

```bash
docker build -t awaghray/portfolio:latest .
docker push awaghray/portfolio:latest
```

## Updating content

Everything that changes regularly lives in markdown or one small data file —
no component edits needed.

### Add a project

Create a new markdown file in [`src/content/projects/`](src/content/projects).
Featured projects show a badge and sort to the top; otherwise items sort by
`order` (highest first).

```markdown
---
title: My New Project
description: One-sentence summary shown on the card.
link: https://example.com          # optional "View Project" button
github: https://github.com/you/repo # optional "Code" button
tags: [TypeScript, Postgres]        # optional pills
featured: false                     # optional, default false
order: 80                           # optional, higher sorts first
date: 2026-06-01                    # optional
---

Longer markdown description, bullet points, etc. shown under the summary.
```

### Add or edit experience

Create or edit a markdown file in
[`src/content/experience/`](src/content/experience). Entries sort by `order`
(highest = most recent, shown at the top of the timeline).

```markdown
---
company: Company Name
role: Your Title          # optional
period: June 2026 - Present
link: https://company.com # optional, links the company name
order: 110                # higher sorts to the top
---

- Bullet describing what you did.
- Another accomplishment.
```

### Edit skills, about, education, activities

These live in [`src/data/site.ts`](src/data/site.ts).

### Update the resume PDF

Replace [`public/Anitej-Waghray-Resume.pdf`](public) (keep the same filename so
the "Resume" button keeps working), or change the `resume` path in
`src/data/site.ts`.
