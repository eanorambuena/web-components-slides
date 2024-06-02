```javascript
  setCount = count => {
    this.count = count
  }

  render() {
    const { count } = this
    return html`
      <h1>Lit Element - Counter</h1>
      <h2>You clicked ${count} times</h2>
      <button @click=${() => this.setCount(count - 1)}>
        +
      </button>
      <button @click=${() => this.setCount(count + 1)}>
        -
      </button>
    `
  }
}

customElements.define('my-counter', Counter)
```
