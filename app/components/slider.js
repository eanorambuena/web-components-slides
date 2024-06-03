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
}

export function slider({ el, children }) {
  el.className = 'flex flex-col justify-center items-center w-full h-full'
  
  el.useEffect(() => {
    setTimeout(() => {
      Emmy.glide = new Emmy.Glide('.glide').mount({ Controls, Keyboard })
    }, 200)
  }, [])

  return html`
    <div class='glide w-full h-full'>
      <div class='glide__track w-full h-full' data-glide-el='track'>
        <section class='glide__slides w-full h-full'>
          ${children()}
        </ul>
      </div>
      <div class='glide__arrows opacity-0 w-full flex flex-row justify-between' data-glide-el='controls'>
        <button class='glide__arrow glide__arrow--left w-1/3 h-full' data-glide-dir='<'>prev</button>
        <button class='glide__arrow glide__arrow--right w-1/3 h-full' data-glide-dir='>'>next</button>
      </div>
    </div>
  `
}

load(slider, 'Slider')
