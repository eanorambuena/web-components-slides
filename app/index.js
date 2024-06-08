import { html, load, Emmy } from 'emmy-dom/dist/server'
import './components/slider'
import './components/counter'

const contentFallback = `
  <section class='w-full h-full p-4 text-xl bg-yellow-500 dark:bg-yellow-700'>
    No se ha encontrado contenido.
    Esto puede deberse a que la página no ha cargado correctamente.
    Comprueba tener JavaScript habilitado.
  </section>
`

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
          ${Emmy.markdown.lit1 ?? contentFallback}
        </Markdown>
        <Markdown classname='lg:!w-3/5'>
          ${Emmy.markdown.lit2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown classname='lg:!w-1/2'>
          ${Emmy.markdown.emmy1 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='md:!flex-row'>
        <Markdown classname='lg:!w-2/6'>
          ${Emmy.markdown.emmy2 ?? contentFallback}
        </Markdown>
        <Markdown classname='lg:!w-4/6'>
          ${Emmy.markdown.emmy3 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='h-fit'>
        <Counter />
      </Slide>
      <Slide>
        <Markdown classname='lg:!w-3/4'>
          ${Emmy.markdown.emmy4 ?? contentFallback}
        </Markdown>
      </Slide>
    </Slider>
  `
}

export const App = load(app, 'App')
