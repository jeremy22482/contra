import fs from 'fs'

export async function fetchLocalizedFile(defaultFile, locale, defaultLocale) {
  const lang = locale && locale !== defaultLocale
    ? `.${locale}`
    : ''

  let localizedFile

  if (!!lang) {
    const index = defaultFile.lastIndexOf('.')
    localizedFile = defaultFile.slice(0, index) + lang + defaultFile.slice(index)
  }

  let page

  try {
    page = fs.existsSync(localizedFile)
      ? fs.readFileSync(localizedFile, 'utf8')
      : fs.readFileSync(defaultFile, 'utf8')
  } catch (error) {
    throw error.code === 'ENOENT'
      ? new Error(`'${defaultFile}' was not found.`)
      : error
  } finally {
    return page
  }
}
