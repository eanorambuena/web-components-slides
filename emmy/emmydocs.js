import { html } from 'emmy-dom/dist/server'
import { marked } from 'marked'
import { readFileSync, readdirSync } from 'node:fs'

export const renderMarkdown = async (text) => {
  const htmlText = await marked(text)
  return html`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6">${htmlText}</section>`
    .replace(/`/g, '\`')
    .replace(/\${/g, '\${')
    .replace(/&#39;/g, "'")
}

export const saveMarkdown = async (obj, filenames) => {
  obj.markdown = {}
  for (const filename of filenames) {
    const file = readFileSync(`./public/markdown/${filename}.md`, 'utf-8')
    obj.markdown[filename] = await renderMarkdown(file)
  }
}

export const scanMarkdown = (path) => {
  const files = readdirSync(path)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''))
}

export const loadMarkdown = async (obj, path) => {
  const files = scanMarkdown(path)
  await saveMarkdown(obj, files)
}
