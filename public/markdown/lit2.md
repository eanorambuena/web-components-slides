```javascript
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('lit-counter')
class MyElement extends LitElement {
  @property({type: Numeber, reflect: true})
  count: number = 0

  render() {
    return html`
      <h1>Lit - Counter</h1>
      <h2>You clicked <strong>${this.count}</strong> times</h2>
      <div>
        <button @click="${() => this.count++}">
          +
        </button>
        <button @click="${() => this.count--}">
          -
        </button>
      </div>
    `
  }
}
```  
