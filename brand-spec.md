# Brand spec — Portfolio Ludovic Valente

Extracted from `/Users/ludovic/dev/www/portfolio` (`src/styles/global.css`, `Base.astro`, `index.astro`).

## Color tokens (OKLch — derived from the real hex values)

| Role        | Hex (source) | OKLch                    |
|-------------|--------------|--------------------------|
| `--bg`      | `#0c0f14`    | `oklch(16% 0.012 255)`   |
| `--surface` | `#1a2230`    | `oklch(24% 0.022 258)`   |
| `--fg`      | `#e8edf5`    | `oklch(94% 0.008 255)`   |
| `--muted`   | `#8b9bb4`    | `oklch(67% 0.030 256)`   |
| `--border`  | `#2a3548`    | `oklch(32% 0.030 260)`   |
| `--accent`  | `#5b9fd4`    | `oklch(68% 0.100 245)`   |

Supporting: `--bg-elevated #141a24`, `--accent-hover #7ab8e8`.

## Typography

- Display + body: **DM Sans** (`'DM Sans', system-ui, -apple-system, sans-serif`) — weights 400/500/600/700.
- One family for everything (tech/utility posture). Headings carry weight via `-0.02em`/`-0.03em` letter-spacing and 600–700 weight, not a separate display face.

## Layout posture (observed)

1. Dark canvas, sticky frosted header (`rgba(12,15,20,.85)` + `blur(12px)`), 1px hairline borders only — no shadows.
2. Radius `12px` cards, `8px` buttons. Content capped at `--max-width: 1100px`, centered.
3. Single accent budget: eyebrow/tagline + one primary CTA. Accent also marks hover borders on cards.
4. Hero uses a single vertical gradient `bg-elevated → bg`; everything else is flat surfaces separated by borders.
5. Tags are small pill chips on `bg-elevated` with muted text.
