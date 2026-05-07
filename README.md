<h1 align="center">Web Components Slides</h1>

<p align="center">Presentation about Functional Web Components built with Emmy.js and modern web technologies.</p>

<p align="center">
  <a href="https://web-components-slides.pages.dev"><strong>Live Demo</strong></a>
  •
  <a href="https://www.youtube.com/watch?v=WSNAkqKNt94"><strong>Watch Talk</strong></a>
</p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=WSNAkqKNt94">
    <img src="https://img.youtube.com/vi/WSNAkqKNt94/maxresdefault.jpg" alt="Functional Web Components" width="600">
  </a>
</p>
<p align="center">▶ <a href="https://www.youtube.com/watch?v=WSNAkqKNt94">Click here or the thumbnail to watch the talk on YouTube</a></p>

---

## Index

> The web is rendered from these markdown files, which function as a wiki:

1. [¿Qué son los Web Components?](public/markdown/wc1.md)
2. [Tecnologías que componen los Web Components](public/markdown/wc2.md)
3. [Ventajas de los Web Components](public/markdown/wc3.md)
4. [Desventajas de los Web Components](public/markdown/wc4.md)
5. [Lit](public/markdown/lit1.md)
6. [LitElement & reactive properties](public/markdown/lit2.md)
7. [Functional Web Components overview](public/markdown/functional1.md)
8. [Functional approach benefits](public/markdown/functional2.md)
9. [Libraries & frameworks](public/markdown/functional3.md)
10. [Haunted.js](public/markdown/haunted1.md)
11. [Haunted.js features](public/markdown/haunted2.md)
12. [Emmy.js intro](public/markdown/emmy1.md)
13. [Emmy.js features](public/markdown/emmy2.md)
14. [Current challenges](public/markdown/challenges.md)
15. [Fine-grained reactivity](public/markdown/reactive1.md)
16. [Virtual DOM reactivity](public/markdown/reactive2.md)
17. [Pre-rendering concepts](public/markdown/pre1.md)
18. [SSR vs Client-side rendering](public/markdown/pre2.md)
19. [Demo content](public/markdown/demo.md)

## Features

- **Functional Web Components** - Presentation built using Emmy.js (functional approach to Web Components)
- **SSR Ready** - Server-side rendering support via Emmy-dom
- **Slide Navigation** - Custom slide/slider components with IntersectionObserver-based navigation
- **Live Demo** - Interactive counter component demonstrating reactive state management
- **Markdown Rendering** - Built-in markdown to HTML rendering
- **QR Code Access** - Mobile-friendly presentation access

## Technologies

- **Emmy.js** (emmy-dom) - Functional Web Components library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Glide.js** - Touch-friendly slider library
- **Marked** - Markdown parser

## Architecture

```
app/
├── components/
│   ├── carousel.js    # Image carousel component
│   ├── counter.js     # Interactive counter with state
│   ├── markdown.js     # Markdown renderer
│   ├── meta.js         # SEO meta tag manager
│   ├── slide.js       # Individual slide component
│   └── slider.js      # Slide container/navigator
├── services.js        # Utility functions
├── demo.js            # SSR demo component
└── index.js           # Main app component
```

## Components

| Component | Description |
|-----------|--------------|
| `<emmy-slide>` | Individual slide with navigation tracking |
| `<emmy-slider>` | Slide container with Glide.js integration |
| `<emmy-carousel>` | Image carousel for presenter profile |
| `<emmy-counter>` | Interactive counter demo |
| `<emmy-markdown>` | Markdown content renderer |
| `<emmy-meta>` | Dynamic document title management |

## Getting Started

> **Prerequisite**: If you don't have Bun installed, run: `npm i -g bun`

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Scripts

- `bun run dev` - Start dev server with live reload
- `bun run build` - Build SSR + client bundle
- `bun run preview` - Preview production build
- `bun run watch` - Watch for SSR changes

## Presentation Topics

1. What are Web Components?
2. Vanilla Web Components
3. Lit framework
4. Functional Web Components
5. Haunted.js
6. Emmy.js
7. Challenges (SSR, Reactivity, State)
8. Pre-rendering demonstration

## Author

**Emmanuel Norambuena**

- [LinkedIn](https://www.linkedin.com/in/eanorambuena/)
- GitHub: [@emmyjs](https://github.com/emmyjs)

## License

MIT