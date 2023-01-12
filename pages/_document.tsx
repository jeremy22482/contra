import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import { serverStyleSheet } from '../styles/serverStyleSheet'
import i18nextConfig from '../../next-i18next.config'
import { GtmScript, GtmNoScript } from 'lib/gtm'
import Script from 'next/script';


/**
 * Custom Document for Next.js. This is rendered server-side, and contains
 * generic scripts and tags that are necessary for every page, such as style
 * tags and analytics scripts. Global page logic should be defined in _app.js.
 */
export default class extends Document {
  render(): JSX.Element {
    const currentLocale = this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
          <link rel="icon" type="image/svg" href="/assets/favicon.png" />
          {/* Google Tag Manager - global */}


          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', '${process.env.GA}');
                    `,
            }}
          />
          <GtmScript />
        </Head>
        <body>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                  function zync_call() {
                    var z = document.createElement("script");
                    var zmpID="casa-lumbre";
                    var cache_buster="{cache_buster}";

                    var z_src = "https://live.rezync.com/sync?c=16b6410431b6374e780104abb0443ca8&p=8559e6290f737b2c4ec7a7ef0b58b8d5&k=casa-lumbre-pixel-8836&zmpID="+zmpID+"&cache_buster="+cache_buster;
                    z.setAttribute("src", z_src);
                    document.body.appendChild(z);
                }

                if (['complete', 'interactive'].indexOf(document.readyState) >= 0) {
                    zync_call();
                } else {
                    window.addEventListener("DOMContentLoaded", function(){
                        zync_call();
                    });
                }
              `,
            }}
          />
          <GtmNoScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  /**
   * These props are only resolved server-side. Document's getInitialProps
   * function is not called during client-side transitions, nor when a page is
   * statically optimized.
   */
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {

    // Fetch server-side rendered styles and inject into the <head>
    const styleSheet = await serverStyleSheet(context)

    return {
      ...styleSheet,
    }
  }
}
