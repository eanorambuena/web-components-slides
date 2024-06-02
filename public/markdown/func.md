## Functional Components
You can use functional components to create components without classes. Functional components are just functions that return a HTML code or a function that returns HTML code. The following example shows how to create a functional component:
```javascript
import { load, html } from 'emmy-dom'

function helloWorld() {
  return html`<h1>Hello World!</h1>`
}

load(helloWorld, 'HelloWorld')
```