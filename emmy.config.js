import { build, javascript, Emmy } from "emmy-dom/dist/server"
import createConfig from "./emmy/emmybuild"
import { demo, Demo } from "./app/demo"
import { markdown } from "./app/components/markdown"

await createConfig({
  paths: {
    '/': './index.html'
  },
  markdown: './public/markdown',
  dependencies: javascript`
    import Glide, { Controls, Keyboard } from '@glidejs/glide/dist/glide.modular.esm'
    import hljs from 'https://cdn.skypack.dev/highlight.js'
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block)
      })
    })
    Emmy.Glide = Glide
  `
})

build({
  app: Demo,
  generators: { demo, markdown },
  template: './template.html',
  dependencies: javascript`
    import { load, html, Emmy, loadGlobalEmmy as lge } from 'emmy-dom'
    lge(${JSON.stringify(Emmy)})
  `,
  path: './demo.html'
})
