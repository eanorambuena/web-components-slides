import { load } from 'emmy-dom/dist/server'
import { dynamicallyResolveUnicode } from '../services'

export function meta({ el , props }) {
  el.className = 'size-[0]'

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
