import path from 'path'
import matter from 'gray-matter'
import { fetchLocalizedFile } from './i18n'

export async function fetchMeta(locale, defaultLocale) {
  const metaFile = path.join(process.cwd(), '/src/content/meta.json')
  const meta = await fetchLocalizedFile(metaFile, locale, defaultLocale)

  return JSON.parse(meta)
}

export async function fetchPage(pageName, locale, defaultLocale) {
  const meta = await fetchMeta(locale, defaultLocale)

  const filePath = path.join(process.cwd(), `/src/content/pages/${pageName}.json`)

  let page
  try {
    page = await fetchLocalizedFile(filePath, locale, defaultLocale)
    page = JSON.parse(page)
  } catch (error) {
    throw error.code === 'ENOENT'
      ? new Error(`Route for '${pageName}' was found, but '${filePath}' was not found.`)
      : error
  } finally {
    return {
      page,
      meta,
    }
  }
}

export async function fetchLegalPage(pageName, locale, defaultLocale) {
  const meta = await fetchMeta(locale, defaultLocale)

  const filePath = path.join(process.cwd(), `src/content/pages/legal/${pageName}.md`)
  const fileContents = await fetchLocalizedFile(filePath, locale, defaultLocale)

  const { data: page, content } = matter(fileContents)

  return {
    meta,
    page,
    content,
  }
}
