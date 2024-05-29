import { load, html } from 'emmy-dom'
import Glide, { Controls, Keyboard } from '@glidejs/glide/dist/glide.modular.esm'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

export function slider({ el, children }) {
  el.className = 'flex flex-col justify-center items-center w-full h-full'
  
  el.useEffect(() => {
    setTimeout(() => {
      new Glide('.glide').mount({ Controls, Keyboard })
    }, 200)
  }, ['didMount'])

  return html`
    <div class='glide w-full h-full'>
      <div class='glide__track w-full h-full' data-glide-el='track'>
        <section class='glide__slides w-full h-full'>
          ${children()}
        </ul>
      </div>
      <div class='glide__arrows opacity-0' data-glide-el='controls'>
        <button class='glide__arrow glide__arrow--left' data-glide-dir='<'>prev</button>
        <button class='glide__arrow glide__arrow--right' data-glide-dir='>'>next</button>
      </div>
      </div>
    </div>
  `
}

load(slider, 'Slider')
