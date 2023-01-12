import { useEffect, useRef } from 'react'
import { AppProps } from 'next/app'
import { AppProvider } from '../components/AppProvider'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { useRouter } from 'next/router'
import Head from 'components/Head'
import { RealViewportProvider } from "next-real-viewport";
import { UIProvider } from 'context/UI'
import { ParallaxProvider } from 'react-scroll-parallax';
import { appWithTranslation } from 'next-i18next';
import '../styles/fonts.css'
import { useUI } from 'hooks/useUI'

/**
 * Global app logic should be defined here.
 *
 * @prop {func} Component - The active page, whenever you navigate between
 * routes, `Component` will change to the new page. Therefore, any props you
 * send to Component will be received by the page.
 *
 * @prop {object} pageProps - An object with the initial props that were
 * preloaded for your page by one of Next's data fetching methods, otherwise
 * it's an empty object.
 *
 * @prop {NextRouter} router - An instance of Router from 'next/router'
 */


function App({ Component, pageProps }: AppProps): JSX.Element {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const Layout = (Component as any).Layout || DefaultLayout
  const router = useRouter()
  const { toggleNav, ...state } = useUI()

  useEffect(() => {

    const handleRouteChange = () => { }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  useEffect(() => {
    console.log(`%c                                                                     
                    .ll'                  
            .:oc.    oWX;                  
    ,lc.   :NMWx.   oWK,                  
    cXWO'  :XKOXkc. oW0'                  
      ,0W0, :Xk,lXWO;dWO.                  
      .xNK:cXO. cOKKKWk.                  
        .oXXKNO.  .:KMM0:.                 
          :KMWk.  .cXWX000Od,              
          '::.  .cOMK:   dNXc             
                  .:ONKd:..,c,             
                .;,'.,lkKXOc.              
                oNWK:   .oNWd.             
                .oOKKkoclkNXl              
                  .,codddl'    
                  
      `, `font-family: monospace`);
    console.log("%c \xa0https://websessions.co", "display:block;font-family:inherit;font-size:11px;font-weight:bold;line-height:1;color:orange;")
  }, [])

  return (
    <>
      <Head />
      <ParallaxProvider>
        <RealViewportProvider>
          <UIProvider>
            <AppProvider meta={pageProps.meta}>
              <Layout {...pageProps}>
                <Component {...pageProps} />
              </Layout>
            </AppProvider>
          </UIProvider>
        </RealViewportProvider>
      </ParallaxProvider>
    </>
  )
}

export default appWithTranslation(App);
