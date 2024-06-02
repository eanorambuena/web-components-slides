import { load, html, Emmy } from 'emmy-dom/dist/server'

export function slide({ el, children, props }) {
  el.className = 'flex flex-col justify-center items-center w-full h-full prose prose-slate dark:prose-invert max-w-none'

  let className = ''
  if (props()?.classname) {
    className += ` ${props().classname()}`
  }

  return html`
    <article class='glide__slide w-full h-full flex flex-col justify-center items-center ${className}'>
      ${children()}
    </article>
  `
}

load(slide, 'Slide')
