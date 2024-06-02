import { html, load, Emmy } from 'emmy-dom/dist/server'
import './components/slider'
import './components/slide'

export function app({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center w-full h-full text-white'

  return html`
    <Slider>
      <Slide>
        <h1 class='text-4xl'>Functional Web Components</h1>
        <h2 class='text-2xl'>El futuro de la web</h2>
      </Slide>
      <Slide>
        <h2 class='text-4xl'>Hello from Emmy.js!</h1>
        <img src='code.png' class='w-1/2' />
      </Slide>
      <Slide>
        ${Emmy.markdown.index}
      </Slide>
      <Slide>
        ${Emmy.markdown.func}
      </Slide>
      <Slide classname='scale-[40%]'>
        ${Emmy.markdown.lit}
      </Slide>
      <Slide className='scale-75'>
        ${Emmy.markdown.lit2}
      </Slide>
      <Slide className='scale-75'>
        ${Emmy.markdown.lit3}
      </Slide>
    </Slider>
  `
}

export const App = load(app, 'App')
