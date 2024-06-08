```javascript
import { html, load, Emmy } from 'emmy-dom'

const app = ({ el }) => html`
  <Slider>
    <Slide>
      <h1 class='text-6xl'>Functional Web Components</h1>
      <h2 class='text-4xl'>El futuro de la web</h2>
    </Slide>
    <Slide>
      <Markdown classname='lg:!w-1/2'>
        ${Emmy.markdown.slide1}
      </Markdown>
    </Slide>
  </Slider>
`

load(app, 'App')
```
