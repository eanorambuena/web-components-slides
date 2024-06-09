import { load } from 'emmy-dom/dist/server'

export function markdown({ el, children, props }) {
  let className = ''
  if (props()?.classname) {
    className += ` ${props().classname()}`
  }

  el.className = `flex flex-col justify-center items-center w-full h-full p-0 m-0 prose prose-slate dark:prose-invert max-w-none text-left ${className}`

  return () => children()
}

load(markdown, 'Markdown')
