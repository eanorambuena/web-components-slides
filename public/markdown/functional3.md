### Haunted.js

```javascript
import { html } from 'lit'
import { component } from 'haunted'

function HelloWorld() {
  return html`<h1>Hello World!</h1>`
}

customElements.define('my-counter', component(Counter))
```
