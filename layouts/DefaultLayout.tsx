import { PageTransition } from '../components/PageTransition'
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { useEffect, useRef } from 'react'
import { useLocalStorage } from "react-use"
import { useUI } from 'hooks/useUI'

/**
 * The DefaultLayout wrapper for most pages
 */
export function DefaultLayout({ children, content }): JSX.Element {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const { openMenu, navOpen, toggleNav, menuOpen, toggleMenu } = useUI()
  const [yes, setYes] = useLocalStorage("111", false)

  // useEffect(() => {
  //   const modal = ref.current
  //   if (yes === false) {
  //     disableBodyScroll(modal, { reserveScrollBarGap: false })
  //   } else {
  //     clearAllBodyScrollLocks()
  //   }
  // }, [yes])

  useEffect(() => {

  }, [yes])

  // console.log('yes', yes)

  return (
    <div ref={ref}>
      <Navbar />
      <PageTransition>
        {children}
        <Footer />
      </PageTransition>
    </div>
  )
}
