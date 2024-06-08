import { load, html } from 'emmy-dom/dist/server'

export function counter({ el }) {
  el.className = 'flex flex-col gap-6 justify-center items-center w-fit h-full text-xl'
  const [count, setCount] = el.useState(0)
  const increment = () => setCount(count() + 1)
  const decrement = () => setCount(count() - 1)

  el.useEffect(() => {
    function callback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.querySelector('.increment').addEventListener('click', increment)
          el.querySelector('.decrement').addEventListener('click', decrement)
        }
      })
    }
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    if (window.IntersectionObserver === undefined)
      return ''
    let observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  }, [])

  return () => html`
    <h1 class='text-4xl'>Emmy - Counter</h1>
    <h2>You clicked <strong>${count()}</strong> times</h2>
    <div class='flex flex-row justify-center items-center w-fit h-fit gap-6'>
      <button class='increment bg-slate-400 dark:bg-slate-700 rounded-full size-14 transition-transform hover:scale-110 hover:bg-slate-300 dark:hover:bg-slate-800'>
        +
      </button>
      <button class='decrement bg-slate-400 dark:bg-slate-700 rounded-full size-14 transition-transform hover:scale-110 hover:bg-slate-300 dark:hover:bg-slate-800'>
        -
      </button>
    </div>
  `
}

load(counter, 'Counter')
