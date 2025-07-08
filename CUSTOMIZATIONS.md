# Systemism Site Customizations

This document records important customizations made to this Quartz installation for the Systemism knowledge base.

## Date Display Removal

**Date**: January 2025  
**Issue**: Date timestamps were cluttering the UI/UX without adding practical value  
**Solution**: Removed `Component.ContentMeta()` from layout configuration

### Problem
- Default Quartz displayed dates like "Jul 07, 2025, 1 min read" on every page
- These were filesystem/git timestamps, not meaningful content creation dates
- For an academic knowledge base focused on timeless insights, dates created visual noise
- Dates distracted from the core intellectual content (systems theory, academic citations)

### Solution Applied
1. **Removed ContentMeta component** from `quartz.layout.ts`:
   ```typescript
   // BEFORE (with dates):
   beforeBody: [
     Component.Breadcrumbs(),
     Component.ArticleTitle(),
     Component.ContentMeta(),  // ← Displayed dates + reading time
     Component.TagList(),
   ]

   // AFTER (clean):
   beforeBody: [
     Component.Breadcrumbs(),
     Component.ArticleTitle(),
     Component.TagList(),
   ]
   ```

2. **Removed from both layouts**:
   - `defaultContentPageLayout` (individual pages)
   - `defaultListPageLayout` (list pages)

3. **Cleaned up frontmatter**: Removed unnecessary `created:` and `hideDate:` properties from content files

### Why This Was The Right Decision

**Academic Content is Timeless**
- Atomic notes contain insights from Zwick (2023), Bunge (1979), and other academic sources
- The ideas and citations matter, not when files were digitized
- Page numbers (136, 26, 33) and DOI citations provide the meaningful temporal context

**Improved User Experience**
- Reduced cognitive load - users focus on content, not administrative metadata  
- Cleaner visual hierarchy - titles and academic tags take prominence
- Better mobile experience - less information density
- Professional presentation aligned with academic knowledge base purpose

**Misleading Information Removed**
- Git/filesystem timestamps were not intellectually meaningful
- "Jul 07, 2025" suggested file creation, not insight formation
- Better to have no temporal metadata than misleading metadata

### Alternative Considered
Tried using `hideDate: true` frontmatter property, but this is not a built-in Quartz feature. The ContentMeta component displays dates regardless of frontmatter, so component removal was the only effective solution.

### Result
- Zero date clutter across all pages
- Clean, timeless presentation focused on academic content
- Maintained reading time estimates were also removed (unnecessary for reference material)
- Pages now lead with: **Breadcrumbs → Title → Tags** (optimal information hierarchy)

---

*This customization transformed the site from a blog-like format to a proper academic knowledge base presentation.* 