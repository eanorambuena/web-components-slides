import { html, load, Emmy } from 'emmy-dom/dist/server'
import { dynamicallyResolveUnicode } from './services'
import './components/slider'
import './components/counter'
import './components/carousel'
import './components/meta'

const contentFallback = `
  <section class='w-full h-full p-4 text-xl bg-yellow-500 dark:bg-yellow-700'>
    No se ha encontrado contenido.
    Esto puede deberse a que la página no ha cargado correctamente.
    Comprueba tener JavaScript habilitado.
  </section>
`

const firstSlide = (index = 0) => html`
  <Slide index='${index}' classname='!w-fit gap-8'>
    <Meta title='Functional Web Components' />
    <h1 class='text-6xl'>Functional Web Components</h1>
    <h2 class='text-4xl'>El futuro de la web</h2>
    <p class='text-md text-slate-500 w-full md:text-left'>Por Emmanuel Norambuena</p>
  </Slide>
`

export function app({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center w-full h-full'

  return () => dynamicallyResolveUnicode(html`
    <Slider>
      <Slide index='0' classname='!w-fit gap-8'>
        <Meta title='Functional Web Components' />
        <h1 class='text-6xl'>Functional Web Components</h1>
        <h2 class='text-4xl'>El futuro de la web</h2>
        <p class='text-md text-slate-500 w-full md:text-left'>Por Emmanuel Norambuena</p>
      </Slide>
      <Slide index='1' classname='gap-8'>
        <h2 class='text-4xl'>Puedes escanear el código QR para ver la presentación</h2>
        <img src='/assets/qrcode.png' alt='Código QR' class='h-1/2 w-auto' />
      </Slide>
      <Slide index='2'>
        <Meta title='¿Qué son los Web Components?' />
        <Markdown classname='md:!w-2/3'>
          ${Emmy.markdown.wc1 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide index='3'reload='true'>
        <a href='https://www.linkedin.com/in/eanorambuena/'
          target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'
          class='flex flex-col justify-center items-center gap-8 h-full w-full'
        >
          <Meta title='Un poco sobre mí' />
          <h2 class='text-4xl'>Un poco sobre mí...</h2>
          <Carousel />
        </a>
      </Slide>
      <Slide index='4'>
        <Meta title='Vanilla Web Components' />
        <Markdown classname='lg:!w-2/3'>
          ${Emmy.markdown.wc2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='lg:!flex-row' index='5'>
        <Markdown>
          ${Emmy.markdown.wc3 ?? contentFallback}
        </Markdown>
        <Markdown>
          ${Emmy.markdown.wc4 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='lg:!flex-row' index='6'>
        <Meta title='Lit' />
        <Markdown classname='lg:!w-2/5'>
          ${Emmy.markdown.lit1 ?? contentFallback}
        </Markdown>
        <Markdown classname='lg:!w-3/5'>
          ${Emmy.markdown.lit2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='gap-1 lg:!w-[90%] xl:!w-3/4' index='7'>
        <Meta title='Functional Web Components' />
        <Markdown classname='lg:!h-1/3'>
          ${Emmy.markdown.functional1 ?? contentFallback}
        </Markdown>
        <div class='flex flex-col md:flex-row justify-center items-start gap-4 w-full'>
          <Markdown classname='md:!w-3/5 items-start'>
            ${Emmy.markdown.functional2 ?? contentFallback}
          </Markdown>
          <Markdown classname='md:!w-2/5 items-start'>
            ${Emmy.markdown.functional3 ?? contentFallback}
          </Markdown>
        </div>
      </Slide>
      <Slide classname='lg:!flex-row' index='8'>
        <Meta title='Haunted.js' />
        <Markdown classname='lg:!w-1/2'>
          ${Emmy.markdown.haunted1 ?? contentFallback}
        </Markdown>
        <Markdown classname='lg:!w-1/2'>
          ${Emmy.markdown.haunted2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='lg:!flex-row' index='9'>
        <Meta title='Emmy.js' />
        <Markdown classname='lg:!w-2/6'>
          ${Emmy.markdown.emmy1 ?? contentFallback}
        </Markdown>
        <Markdown classname='lg:!w-4/6'>
          ${Emmy.markdown.emmy2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='h-screen md:h-fit' index='10' reload='true'>
        <Meta title='Emmy - Counter' />
        <Counter />
      </Slide>
      <Slide index='11'>
        <Meta title='Desafíos' />
        <Markdown classname='lg:w-fit lg:max-w-1/2'>
          ${Emmy.markdown.challenges ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide index='12'>
        <Meta title='Tipos de Reactividad' />
        <h2 class='text-4xl'>2 Tipos de Reactividad</h2>
        <section class='flex flex-col md:!flex-row justify-center gap-10'>
          <Markdown classname='lg:!w-1/2 h-full justify-start'>
            ${Emmy.markdown.reactive1 ?? contentFallback}
          </Markdown>
          <Markdown classname='lg:!w-1/2 h-full justify-start'>
            ${Emmy.markdown.reactive2 ?? contentFallback}
          </Markdown>
        </section>
      </Slide>
      <Slide classname='w-full md:!w-3/4 lg:!w-full lg:!flex-row' index='13'>
        <Meta title='Emmy Prerendering' />
        <section class='lg:w-1/2 flex flex-col justify-center gap-1'>
          <Markdown classname='[&_h2]:mt-0'>
            ${Emmy.markdown.pre1 ?? contentFallback}
          </Markdown>
          <a class='flex flex-col gap-4 h-fit w-full lg:w-[95%] hover:scale-105 transition' href='/demo' target='_blank'>
            <img src="/assets/server.png" alt="Pre-rendering in Server" class='w-full' />
            <img src="/assets/browser.png" alt="Pre-rendering in Client" class='w-full' />
          </a>
        </section>
        <Markdown classname='w-full lg:!w-1/2'>
          ${Emmy.markdown.pre2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide index='14'>
        <Meta title='Menciones' />
        <h2 class='text-4xl'>Menciones Honrosas</h2>
        <section class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 pt-4'>
          <a href='https://www.bitovi.com/open-source/react-to-web-component' target='_blank' rel='noopener noreferrer'>
            <img alt='react-to-web-component' src='https://opengraph.githubassets.com/5e95cde1e9037e59d74cd0f061ca1fee36ff02d8f77c7ea242f7f4c541bbfe29/bitovi/react-to-web-component'>
          </a>
          <a href='https://atomicojs.dev/' target='_blank' rel='noopener noreferrer'>
            <img alt='Atomicojs' src='https://opengraph.githubassets.com/5e95cde1e9037e59d74cd0f061ca1fee36ff02d8f77c7ea242f7f4c541bbfe29/atomicojs/atomico'>
          </a>
          <a href='https://github.com/lastmjs/functional-element' target='_blank' rel='noopener noreferrer'>
            <img alt='functional-element' src='https://opengraph.githubassets.com/5e95cde1e9037e59d74cd0f061ca1fee36ff02d8f77c7ea242f7f4c541bbfe29/lastmjs/functional-element'>
          </a>
          <a href='https://github.com/aggre/ullr' target='_blank' rel='noopener noreferrer'>
            <img alt='ullr' src='https://opengraph.githubassets.com/5e95cde1e9037e59d74cd0f061ca1fee36ff02d8f77c7ea242f7f4c541bbfe29/aggre/ullr'>
          </a>
          <a href='https://hybrids.js.org/' target='_blank' rel='noopener noreferrer'>
            <img alt='Hybrids' src='https://opengraph.githubassets.com/5e95cde1e9037e59d74cd0f061ca1fee36ff02d8f77c7ea242f7f4c541bbfe29/hybridsjs/hybrids'>
          </a>
          <a href='https://github.com/solidjs/solid/tree/main/packages/solid-element' target='_blank' rel='noopener noreferrer'>
            <img alt='solid-element' src='https://opengraph.githubassets.com/5e95cde1e9037e59d74cd0f061ca1fee36ff02d8f77c7ea242f7f4c541bbfe29/solidjs/solid'>
          </a>
        </section>
      </Slide>
      <Slide index='15' classname='!w-fit gap-8'>
        <Meta title='Functional Web Components' />
        <h1 class='text-6xl'>Functional Web Components</h1>
        <h2 class='text-4xl'>El futuro de la web</h2>
        <p class='text-md text-slate-500 w-full md:text-left'>Por Emmanuel Norambuena</p>
      </Slide>
    </Slider>
  `)
}

export const App = load(app, 'App')
