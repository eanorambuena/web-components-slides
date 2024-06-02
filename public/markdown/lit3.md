```html
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
