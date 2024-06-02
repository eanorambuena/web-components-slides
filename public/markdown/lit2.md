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
```  
