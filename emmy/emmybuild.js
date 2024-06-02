import { build, javascript, Emmy } from 'emmy-dom/dist/server'
import { loadMarkdown } from './emmydocs'

function getExportsFromFolder(path) {
  const fs = require('fs')
  const files = fs.readdirSync(path)
  const exports = {}
  for (const file of files) {
    if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
      const folderExports = getExportsFromFolder(`${path}/${file}`)
      for (const key in folderExports) {
        exports[key] = folderExports[key]
      }
      continue
    }
    const fileExports = require(`${path}/${file}`)
    for (const key in fileExports) {
      if (key === '__esModule') continue
      exports[key] = fileExports[key]
    }
  }
  return exports
}

function isFunction(value) {
  if (value.toString().match(/^class/)) {
    return false
  }
  return typeof value === 'function'
}

function getGeneratorsFromExports(exports) {
  const generators = {}
  for (const key in exports) {
    if (isFunction(exports[key])) {
      generators[key] = exports[key]
    }
  }
  return generators
}

export default async function createConfig({
  dependencies = '',
  app,
  paths,
  source = './app',
  template = './template.html',
  markdown = './public'
}) {
  const currentWorkingDirectory = process.cwd()

  template = `${currentWorkingDirectory}/${template.replace(/^\.\//, '')}`
  markdown = `${currentWorkingDirectory}/${markdown.replace(/^\.\//, '')}`
  source = `${currentWorkingDirectory}/${source.replace(/^\.\//, '')}`

  await loadMarkdown(Emmy, markdown)

  const fileDependencies = javascript`
    import { load, html, jsx, Router, Route, Emmy, loadGlobalEmmy as lge } from 'emmy-dom'
    lge(${JSON.stringify(Emmy)})
    ${dependencies}
  `

  const exports = getExportsFromFolder(source)
  const generators = getGeneratorsFromExports(exports)
  if (!app) {
    app = exports.App
  }

  for (const path in paths) {
    build({
      app, template, generators,
      dependencies: fileDependencies,
      path: paths[path]
    })
  }
}
