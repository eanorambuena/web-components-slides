import { load, html } from 'emmy-dom/dist/server'

export function slide({ el, children, props }) {
  el.className = 'flex flex-col justify-center items-center w-full min-h-screen h-full lg:min-h-none'

  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (props()?.index) {
          const url = new URL(window.location.href)
          url.searchParams.set('slide', props().index())
          if (window.location.href === url.href)
            return
          window.history.pushState({}, '', url)
          if (props()?.reload && props().reload() === 'true')
            window.location.reload()
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
    <article class='glide__slide w-full !h-full flex flex-col justify-center items-center gap-6 p-10 ${className}'>
      ${children()}
    </article>
  `
}

load(slide, 'Slide')
