import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Systemism - Quartz Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Halcyonic Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "garden.halcyonic.systems",
    ignorePatterns: [
      // System & Config Files
      "private", 
      "templates", 
      ".obsidian", 
      ".obsidian.backup",
      ".vscode",
      ".git",
      ".DS_Store",
      ".cursor-rules",
      ".gitignore",
      
      // Personal Content
      "personal/**",
      "operations/**", 
      "archive/**",
      "Clippings/**",
      "visual-thinking/**",
      "resources/**",
      
      // Daily Notes Pattern
      "20[0-9][0-9]-[0-9][0-9]-[0-9][0-9].md",
      
      // Specific Files
      "CLAUDE.md",
      "README.md",
      "My Kanban.md",
      "Untitled.base",
      "*.kanban",
      
      // Initially ignore projects (you can selectively publish later)
      "projects/**"
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f0f9ff",      // ocean-50: soft blue background
          lightgray: "#e0f2fe",  // ocean-100: borders, code blocks
          gray: "#64748b",       // slate-500: secondary text
          darkgray: "#334155",   // slate-700: body text
          dark: "#0c4a6e",       // ocean-900: headings
          secondary: "#0284c7",  // ocean-600: links
          tertiary: "#14b8a6",   // teal-500: hover, graph nodes
          highlight: "rgba(14, 165, 233, 0.15)",  // ocean-500 tint
          textHighlight: "#fef08a88",  // warm-200: highlights
        },
        darkMode: {
          light: "#082f49",      // ocean-950: deep blue background
          lightgray: "#0c4a6e",  // ocean-900: borders
          gray: "#94a3b8",       // slate-400: secondary text
          darkgray: "#e2e8f0",   // slate-200: body text
          dark: "#f0f9ff",       // ocean-50: headings
          secondary: "#38bdf8",  // ocean-400: links
          tertiary: "#14b8a6",   // teal-500: hover, graph nodes
          highlight: "rgba(56, 189, 248, 0.15)",  // ocean-400 tint
          textHighlight: "#fde04788",  // warm-300: highlights
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
