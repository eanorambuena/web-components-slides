## LitElement

```javascript
import { LitElement, html } from 'lit-element'

class Counter extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    }
  }

  constructor() {
    super()
    this.count = 0
  }
```  
