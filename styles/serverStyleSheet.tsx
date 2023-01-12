import { Children } from 'react'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/**
 * This will inject the server-side rendered styles into the <head>. It's
 * necessary for styled-components to work properly with Next.js.
 *
 * @param {DocumentContext} ctx
 */
export async function serverStyleSheet(context: DocumentContext): Promise<DocumentInitialProps> {
  // Create an instance of ServerStyleSheet
  const sheet = new ServerStyleSheet()

  // Store original page rendering logic
  const originalRenderPage = context.renderPage

  try {
    context.renderPage = function renderPage() {
      // Retrieve styles from components in the page
      return originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      })
    }

    // Run the parent getInitialProps, which now includes the custom renderPage
    const initialProps = await Document.getInitialProps(context)

    // Return initial props with injected style tag
    return {
      ...initialProps,
      styles: [
        // Original styles
        ...Children.toArray(initialProps.styles),

        // Extract the styles as <style> tags
        ...sheet.getStyleElement(),
      ],
    }
  } finally {
    sheet.seal()
  }
}
