# Lit

```html
<!DOCTYPE html>
<html lang="en">
  <my-counter></my-counter>

  <script type="module">
    import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

    class Counter extends LitElement {
      static get properties() {
        return {
          count: { type: Number },
        };
      }

      constructor() {
        super();
        this.count = 0;
      }

      setCount = count => {
        this.count = count;
      };

      render() {
        const { count } = this;
        return html`
          <h1>Lit Element - Counter</h1>
          <h2>You clicked ${count} times</h2>
          <button type="button" @click=${() => this.setCount(count - 1)}>Decrement</button>
          <button type="button" @click=${() => this.setCount(count + 1)}>Increment</button>
        `;
      }
    }

    customElements.define('my-counter', Counter);
  </script>
</html>
```  
