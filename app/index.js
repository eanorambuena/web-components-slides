import { html, load, Emmy } from 'emmy-dom/dist/server'
import { dynamicallyResolveUnicode } from './services'
import './components/slider'
import './components/counter'
import './components/meta'

const contentFallback = `
  <section class='w-full h-full p-4 text-xl bg-yellow-500 dark:bg-yellow-700'>
    No se ha encontrado contenido.
    Esto puede deberse a que la página no ha cargado correctamente.
    Comprueba tener JavaScript habilitado.
  </section>
`

export function app({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center w-full h-full'

  return () => dynamicallyResolveUnicode(html`
    <Slider>
      <Slide index='0'>
        <Meta title='Functional Web Components' />
        <h1 class='text-6xl'>Functional Web Components</h1>
        <h2 class='text-4xl'>El futuro de la web</h2>
      </Slide>
      <Slide index='1' classname='gap-8'>
        <h2 class='text-4xl'>Puedes escanear el código QR para ver la presentación</h2>
        <img src='/public/assets/qrcode.png' alt='Código QR' class='h-1/2 w-auto' />
      </Slide>
      <Slide index='2'>
        <Meta title='¿Qué son los Web Components?' />
        <Markdown classname='md:!w-2/3'>
          ${Emmy.markdown.wc1 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide index='3'>
        <Markdown classname='lg:!w-2/3'>
          ${Emmy.markdown.wc2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='lg:!flex-row' index='4'>
        <Markdown>
          ${Emmy.markdown.wc3 ?? contentFallback}
        </Markdown>
        <Markdown>
          ${Emmy.markdown.wc4 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='lg:!flex-row' index='5'>
        <Meta title='Lit' />
        <Markdown classname='lg:!w-2/5'>
          ${Emmy.markdown.lit1 ?? contentFallback}
        </Markdown>
        <Markdown classname='lg:!w-3/5'>
          ${Emmy.markdown.lit2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='gap-1 lg:!w-[90%] xl:!w-3/4' index='6'>
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
      <Slide classname='lg:!flex-row' index='7'>
        <Meta title='Haunted.js' />
        <Markdown classname='lg:!w-1/2'>
          ${Emmy.markdown.haunted1 ?? contentFallback}
        </Markdown>
        <Markdown classname='lg:!w-1/2'>
          ${Emmy.markdown.haunted2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='lg:!flex-row' index='8'>
        <Meta title='Emmy.js' />
        <Markdown classname='lg:!w-2/6'>
          ${Emmy.markdown.emmy1 ?? contentFallback}
        </Markdown>
        <Markdown classname='lg:!w-4/6'>
          ${Emmy.markdown.emmy2 ?? contentFallback}
        </Markdown>
      </Slide>
      <Slide classname='h-screen md:h-fit' index='9'>
        <Meta title='Emmy - Counter' />
        <Counter />
      </Slide>
      <Slide index='8'>
        <Meta title='Conclusión' />
        <Markdown classname='lg:!w-3/4'>
          ${Emmy.markdown.emmy3 ?? contentFallback}
        </Markdown>
      </Slide>
    </Slider>
  `)
}

export const App = load(app, 'App')
