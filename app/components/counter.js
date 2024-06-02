import { load, html, jsx } from 'emmy-dom/dist/server'

export function counter({ el }) {
  el.className = 'flex flex-col gap-6 justify-center items-center w-fit h-fit text-xl'
  const [count, setCount] = el.useState(0)

  el.useEffect(() => {
    el.querySelector('.increment').addEventListener('click', () => setCount(count() + 1))
    el.querySelector('.decrement').addEventListener('click', () => setCount(count() - 1))
  }, [])

  return () => html`
    <h1 class='text-4xl'>Emmy - Counter</h1>
    <h2>You clicked <strong>${count()}</strong> times</h2>
    <div class='flex flex-row justify-center items-center w-fit h-fit gap-6'>
      <button class='increment bg-slate-700 rounded-full size-14 transition-transform hover:scale-110 hover:bg-slate-800'>
        +
      </button>
      <button class='decrement bg-slate-700 rounded-full size-14 transition-transform hover:scale-110 hover:bg-slate-800'>
        -
      </button>
    </div>
  `
}

load(counter, 'Counter')
