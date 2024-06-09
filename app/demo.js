import { html, load, Emmy } from 'emmy-dom/dist/server'
import { marked } from 'marked'
import { readFileSync } from 'fs'
import './components/markdown'

export function demo() {
  console.log(`I'm being executed in the server or the browser`)

  if (globalThis.navigator.userAgent === 'Node') {
    console.log(`I'm being executed in the server`);
    (async () => {
      const file = readFileSync('./public/markdown/demo.md', 'utf-8')
      Emmy.html = await marked(file)
    })()
    return html`
      I'm being server side pre-rendered
      <Markdown>${ Emmy.html }</Markdown>
    `
  }

  console.log(`I'm being executed in the browser`)

  return () => html`
    I'm being client side rendered
    <Markdown>${ Emmy.html }</Markdown>
  `
}

export const Demo = load(demo, 'Demo')
