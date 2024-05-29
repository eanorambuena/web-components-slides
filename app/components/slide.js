import { load, html } from 'emmy-dom'

export function slide({ el, children, props }) {
  el.className = 'flex flex-col justify-center items-center w-full h-full'

  return html`
    <article class='glide__slide w-full h-full flex flex-col justify-center items-center gap-4 ${props().classname() ?? ''}'>
      ${children()}
    </article>
  `
}

load(slide, 'Slide')
