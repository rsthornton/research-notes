# Halcyonic Garden

A digital garden of interconnected ideas on systems thinking, complexity, and the patterns that connect.

**Live site**: [garden.halcyonic.systems](https://garden.halcyonic.systems)

## Overview

This is a [Quartz 4](https://quartz.jzhao.xyz/) static site serving as a knowledge garden — a collection of atomic notes, formal definitions, and insights from systems science literature.

Part of the [Halcyonic Systems](https://halcyonic.systems) ecosystem.

## Structure

```
content/
├── index.md           # Homepage
├── glossary/          # Formal definitions (Mobus + Bunge citations)
│   ├── system.md
│   ├── boundary.md
│   ├── environment.md
│   ├── feedback-loop.md
│   └── emergence.md
└── reflections/       # 135+ atomic notes (hidden from explorer, accessible via tags/graph)
```

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Subdomain (garden.halcyonic.systems) | Preserves Quartz features (graph, backlinks) without custom Astro plugins |
| Tags over folders | Ideas cross-pollinate; shouldn't be siloed by domain |
| Reflections hidden from explorer | Access via tags/graph/search; glossary as curated entry point |
| Rigorous glossary format | Casual intro → Mobus citation → Bunge citation → Synthesis |

## Primary Sources

- **Bateson** — *Steps to an Ecology of Mind* (2000)
- **Bunge** — *A World of Systems* (1979)
- **Zwick** — *Elements and Relations* (2023)
- **Mobus & Kalton** — *Principles of Systems Science* (2015)

## Development

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
npm install
npx quartz build --serve
```

### Deployment

Pushes to `main` trigger GitHub Actions → GitHub Pages deployment.

Custom domain configured via `quartz/static/CNAME`.

## Customization

- **Theme colors**: `quartz.config.ts` (ocean/teal palette matching halcyonic.systems)
- **Typography**: Fraunces (headings) + Inter (body)
- **Custom CSS**: `quartz/styles/custom.scss`
- **Explorer filter**: `quartz.layout.ts` (hides reflections/ and tags/ folders)

## Content Guidelines

### Glossary Terms

Each glossary entry follows this structure:

```markdown
# [Term]

[Casual intro paragraph]

## Formal Definitions

**Mobus & Kalton (2015)**:
> [Cited quote with section/page]

**Bunge (1979)**:
> [Cited quote with chapter/page]

## Synthesis
[What both agree on, key differences]

## Explore Further
- [[reflections/related-note|Display text]] — brief description

## Related Concepts
- [[glossary/other-term|Term]] — relationship
```

### Reflections (Atomic Notes)

```markdown
---
tags:
  - systems              # domain tag
  - steps-to-an-ecology-of-mind  # source tag
source: "Full citation"
page: "123"
chapter: "Chapter Name"
---

[Note content - title IS the insight]
```

## License

Content © Halcyonic Systems. Quartz framework under MIT license.
