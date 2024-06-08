import { load } from 'emmy-dom/dist/server'

export function meta({ el , props }) {
  el.className = 'size-[0]'

  function dynamicallyResolveUnicode(text) {
    return text.replace(/\\u[0-9A-F]{4}/g, (match) => {
      return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16))
    }	)
  }

  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (props()?.title) {
          document.title = dynamicallyResolveUnicode(props().title())
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

  return ''
}

load(meta, 'Meta')
