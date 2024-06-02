```javascript
import { load, html } from 'emmy-dom'

export function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() => {
    el.querySelector('.increment').addEventListener('click', () => setCount(count() + 1))
    el.querySelector('.decrement').addEventListener('click', () => setCount(count() - 1))
  }, [])

  return () => html`
    <h1>Emmy - Counter</h1>
    <h2>You clicked <strong>${count()}</strong> times</h2>
    <div>
      <button class='increment'>
        +
      </button>
      <button class='decrement'>
        -
      </button>
    </div>
  `
}

load(counter, 'Counter')
```
