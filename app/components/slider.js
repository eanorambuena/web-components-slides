import { load, html, Emmy } from 'emmy-dom/dist/server'
import './slide'
import './markdown'

if (!Emmy.Glide) {
  Emmy.Glide = class {
    mount = () => {}
    go = () => {}
  }
  Emmy.markdown = ''
  var Controls = {}
  var Keyboard = {}
  Emmy.isBrowser = false
}

export function slider({ el, children }) {
  el.className = 'flex flex-col justify-center items-center w-full h-full'
  
  console.log('browser and server')

  let slideIndex = 0
  try {
    const url = new URL(window.location.href)
    const slide = url.searchParams.get('slide')
    if (slide) {
      const index = parseInt(slide)
      if (index >= 0) {
        slideIndex = index
      }
    }
  } catch (e) {}

  el.useEffect(async () => {
    Emmy.isBrowser = true

    Emmy.glide = new Emmy.Glide('.glide', { startAt: slideIndex })
      .mount({ Controls, Keyboard })
  }, [])

  if (!Emmy.isBrowser) {
    console.log('server')
    return () => html`
      <section class='w-full h-full p-4'>
        ${children()}
      </section>
    `
  }

  console.log('browser')

  return () => html`
    <div class='glide w-full h-full'>
      <div class='glide__track w-full h-full' data-glide-el='track'>
        <section class='glide__slides w-full h-full'>
          ${children()}
        </section>
      </div>
      <div class='glide__arrows opacity-0 w-full flex flex-row justify-between' data-glide-el='controls'>
        <button class='glide__arrow glide__arrow--left w-1/3 h-full' data-glide-dir='<'>prev</button>
        <button class='glide__arrow glide__arrow--right w-1/3 h-full' data-glide-dir='>'>next</button>
      </div>
    </div>
  `
}

load(slider, 'Slider')
