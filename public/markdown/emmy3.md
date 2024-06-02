```javascript
import { html, load, Emmy } from 'emmy-dom'

export function app({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center w-full h-full text-white'

  return html`
    <Slider>
      <Slide>
        <h1 class='text-6xl'>Functional Web Components</h1>
        <h2 class='text-4xl'>El futuro de la web</h2>
      </Slide>
      <Slide>
        <Markdown classname='lg:!w-1/2'>
          ${Emmy.markdown.emmy1}
        </Markdown>
      </Slide>
    </Slider>
  `
}

export const App = load(app, 'App')
```
