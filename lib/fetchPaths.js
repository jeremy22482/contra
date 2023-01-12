import path from 'path'
import { readdirSync, readFileSync } from 'fs'

function scrubFileName(fileName) {
  return fileName
    .replace('.json', '')
    .replace('.md', '')
}

function filterLocaleFiles(files, locales, defaultLocale) {
  // Directories might contain locale file (like page.es.json). We want to
  // filter out these files before we map over theem to create paths
  return files.filter((file) => {
    for (const locale of locales) {
      if (!file.includes(`.${locale}.`) && locale !== defaultLocale) {
        return file
      }
    }
  })
}

export function fetchPathsFromDirectory(directory, parameter, locales, defaultLocale) {
  const files = filterLocaleFiles(readdirSync(directory), locales, defaultLocale)

  return files.flatMap((file) => locales.map(
    (locale) => ({
      params: { [parameter]: scrubFileName(file) },
      locale,
    }),
  ))
}

export async function fetchPathsFromRoutes({ filter = [] }, locales) {
  const routesFile = path.join(process.cwd(), '/src/content/routes.json')

  let routes = readFileSync(routesFile)
  routes = JSON.parse(routes)

  return Object.keys(routes)
    .filter((route) => !filter.includes(route))
    .flatMap((route) => locales.map(
      (locale) => ({
        params: { page: route },
        locale,
      }),
    ))
}
