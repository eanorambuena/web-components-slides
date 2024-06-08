import { load, html } from 'emmy-dom/dist/server'

export function slide({ el, children, props }) {
  el.className = 'flex flex-col justify-center items-center w-full h-full'

  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (props()?.index) {
          const url = new URL(window.location.href)
          url.searchParams.set('slide', props().index())
          window.history.pushState({}, '', url)
        }
      }
    })
  }
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  if (window.IntersectionObserver === undefined)
    return ''
  let observer = new IntersectionObserver(callback, options)
  observer.observe(el)

  let className = ''
  if (props()?.classname) {
    className += ` ${props().classname()}`
  }

  return () => html`
    <article class='glide__slide w-full h-full flex flex-col justify-center items-center gap-6 p-10 ${className}'>
      ${children()}
    </article>
  `
}

load(slide, 'Slide')
