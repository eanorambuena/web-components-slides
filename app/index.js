import { html, load } from 'emmy-dom'
import './components/slider'
import './components/slide'

export function app({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center w-full h-full text-white'

  return html`
    <Slider>
      <Slide classname='gap-6'>
        <h1 class='text-4xl'>Functional Web Components</h1>
        <h2 class='text-2xl'>El futuro de la web</h2>
      </Slide>
      <Slide classname='bg-slate-100 text-slate-950'>
        <h2 class='text-4xl'>Hello from Emmy.js!</h1>
        <img src='code.png' class='w-1/2' />
      </Slide>
    </Slider>
  `
}

export const App = load(app, 'App')
