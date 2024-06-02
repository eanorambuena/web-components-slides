import { load, html, Emmy } from 'emmy-dom/dist/server'

export function slide({ el, children, props }) {
  el.className = 'flex flex-col justify-center items-center w-full h-full'

  let className = ''
  if (props()?.classname) {
    className += ` ${props().classname()}`
  }

  return html`
    <article class='glide__slide w-full h-full flex flex-col justify-center items-center gap-6 p-10 ${className}'>
      ${children()}
    </article>
  `
}

load(slide, 'Slide')
