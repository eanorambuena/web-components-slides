export function dynamicallyResolveUnicode(text) {
  return text.replace(/\\u[0-9A-F]{4}/g, (match) => {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16))
  }	)
}
