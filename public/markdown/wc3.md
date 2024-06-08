## Vanilla Web Components

```javascript
class Counter extends HTMLElement {
  constructor() {
    super()
    this.count = 0
    this.render()
  }

  connectedCallback() {
    this.querySelector('button:first-of-type').addEventListener('click', () => {
      this.count++
      this.render()
    })
    this.querySelector('button:last-of-type').addEventListener('click', () => {
      this.count--
      this.render()
    })
  }
```
