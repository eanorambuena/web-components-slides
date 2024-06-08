```javascript
import { html } from 'lit'
import { component, useState } from 'haunted'

function Counter() {
  const [count, setCount] = useState(0)

  return html`
    <h1>Haunted - Counter</h1>
    <h2>You clicked <strong>${count}</strong> times</h2>
    <div>
      <button @click=${() => setCount(count + 1)}>
        +
      </button>
      <button @click=${() => setCount(count - 1)}>
        -
      </button>
    </div>
  `
}

customElements.define('haunted-counter', component(Counter))
```
