import { javascript } from "emmy-dom/dist/server"
import createConfig from "./emmy/emmybuild"

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
