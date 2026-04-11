# Stagnacarta

Mapping how British institutions fail. A unified theory of why nothing works.

## What This Is

Stagnacarta documents how British institutions fail — not a decline narrative, but a specific, testable claim about post-2008 institutional failure. Every failure everyone complains about separately turns out to be the same structural problem: each bit of government optimises for its own metric and nobody owns the aggregate consequence.

The site maps connections between failures, names recurring patterns (mechanisms), and stress-tests proposed solutions with the same rigour it applies to failures.

## Tech Stack

- **Astro** — static site framework
- **MDX** — Markdown with embedded components for content
- **Tailwind CSS** — utility-first styling
- **Pagefind** — client-side search (zero server load)
- **YAML relationship layer** — structured metadata for the connections web

## Site Structure

| Path | Purpose |
|------|---------|
| `/case-studies/` | Documented failures and successes |
| `/mechanisms/` | Recurring patterns across failures |
| `/organs/` | The institutions involved |
| `/connections/` | Interactive relationship map |
| `/solutions/` | Stress-testing proposed reforms |
| `/future-challenges/` | Problems coming down the track |
| `/explainers/` | Accessible background pieces |
| `/about/` | Mission, methodology, AI transparency |

## Content Status

Every piece of content has a `status` field in its frontmatter:

- **`published`** — Live on the production site
- **`draft`** — Visible on the dev site with a yellow banner, filtered from production
- **`stub`** — Placeholder with minimal content, not rendered

## Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Deployment

The site is deployed as static files. The deploy script copies the `dist/` folder to the webroot.

```bash
npm run deploy    # Build and deploy
```

## Contributing

This is a public repository. You can:

- **Read everything** — content, code, YAML relationships, drafts in progress
- **Open issues** — for factual corrections, source suggestions, or analytical challenges
- **Submit pull requests** — for content contributions or code improvements

All content is reviewed before merge. The editorial voice remains human.

## AI Transparency

This project uses Claude (Anthropic) for research synthesis, structural organisation, fact-checking, and first-draft reference material. All AI-assisted content is marked. Editorial voice, analysis, and conclusions are human-written. See [Methodology](/about/methodology/) for full details.

## License

Content is © Henry Selzer. Code is MIT.
