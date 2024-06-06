import { html, load, Emmy } from 'emmy-dom/dist/server'
import './components/slider'
import './components/counter'

export function app({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center w-full h-full'

  return () => html`
    <Slider>
      <Slide>
        <h1 class='text-6xl'>Functional Web Components</h1>
        <h2 class='text-4xl'>El futuro de la web</h2>
      </Slide>
      <Slide classname='md:!flex-row'>
        <Markdown classname='lg:!w-2/5'>
          ${Emmy.markdown.lit1}
        </Markdown>
        <Markdown classname='lg:!w-3/5'>
          ${Emmy.markdown.lit2}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown classname='lg:!w-1/2'>
          ${Emmy.markdown.emmy1}
        </Markdown>
      </Slide>
      <Slide classname='md:!flex-row'>
        <Markdown classname='lg:!w-2/6'>
          ${Emmy.markdown.emmy2}
        </Markdown>
        <Markdown classname='lg:!w-4/6'>
          ${Emmy.markdown.emmy3}
        </Markdown>
      </Slide>
      <Slide classname='h-fit'>
        <Counter />
      </Slide>
      <Slide>
        <Markdown classname='lg:!w-3/4'>
          ${Emmy.markdown.emmy4}
        </Markdown>
      </Slide>
    </Slider>
  `
}

export const App = load(app, 'App')
