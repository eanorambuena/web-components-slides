```javascript
  render() {
    this.innerHTML = `
      <h1>Lit - Counter</h1>
      <h2>You clicked <strong>${this.count}</strong> times</h2>
      <div>
        <button>
          +
        </button>
        <button>
          -
        </button>
      </div>
    `
  }
}

customElements.define('vanilla-counter', Counter)
```
