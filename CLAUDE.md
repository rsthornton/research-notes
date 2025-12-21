# CLAUDE.md - Halcyonic Garden

## Quick Reference

**Site**: garden.halcyonic.systems (Quartz 4 on GitHub Pages)
**Parent**: Part of Halcyonic Systems ecosystem

## Build Commands

```bash
npm install              # Install dependencies
npx quartz build         # Build site
npx quartz build --serve # Local dev server
git push                 # Deploy (GitHub Actions)
```

## Content Structure

```
content/
├── glossary/       # Formal definitions (5 terms, expandable)
├── reflections/    # 135 atomic notes (hidden from explorer)
└── index.md        # Homepage with callouts
```

## Key Files

| File | Purpose |
|------|---------|
| `quartz.config.ts` | Site config, colors, typography |
| `quartz.layout.ts` | Explorer filter (hides reflections/) |
| `quartz/styles/custom.scss` | Custom CSS (accents, dark mode) |
| `quartz/static/CNAME` | Custom domain config |

## Design Decisions (Do Not Change Without Discussion)

1. **Reflections hidden from explorer** — Access via tags/graph/search only
2. **Glossary as entry point** — Curated, rigorous, links to reflections
3. **Tags over folders** — Ideas cross-pollinate
4. **Mobus + Bunge citations** — Every glossary term needs both

## Adding Content

### New Glossary Term

1. Create `content/glossary/[term].md`
2. Follow structure: Casual intro → Mobus quote → Bunge quote → Synthesis → Explore Further → Related
3. Use systems-science agent to research formal definitions
4. Link to 4-5 relevant reflections

### New Reflection

1. Create `content/reflections/[insight-as-filename].md`
2. Add frontmatter with tags (domain + source)
3. Title IS the insight (atomic note style)

## Styling

**Color palette** (matches halcyonic.systems):
- Ocean: #0284c7 (primary), #0369a1 (links), #075985 (headings)
- Teal: #14b8a6 (accent)
- Use Quartz callouts for visual structure: `[!tip]`, `[!example]`, `[!quote]`, `[!abstract]`

**Typography**:
- Fraunces (headings)
- Inter (body)
- IBM Plex Mono (code)

## Common Tasks

### Update homepage
Edit `content/index.md` — uses Quartz callout syntax, not raw HTML (Quartz sanitizes HTML classes)

### Change explorer visibility
Edit `quartz.layout.ts` — filterFn controls what appears

### Add new domain tag
Just use it in frontmatter — Quartz auto-generates tag pages

### Research definitions for new glossary terms
```
Use systems-science agent to find Mobus and Bunge definitions for [term]
```

## Gotchas

- **HTML classes don't work** — Quartz sanitizes them. Use callouts instead.
- **CNAME location** — Must be in `quartz/static/`, not root
- **Explorer filter** — Defined in TWO places in quartz.layout.ts (content + list pages)
- **Build from correct directory** — Must be in knowledge-garden/, not parent

## Integration with Main Site

- halcyonic.systems links to garden via nav + glossary "Go deeper" callout
- Garden links back to main site in footer
- Shared visual identity (colors, fonts)
