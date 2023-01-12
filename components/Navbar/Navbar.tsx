import { Flex, Box } from 'layouts/@lay'
import styled, { useTheme } from 'styled-components'
import Link from 'next/link'
import { useMatchMedia } from 'hooks/useMatchMedia'
import { themeGet } from '@styled-system/theme-get';
import { useUI } from 'hooks/useUI';
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import { Text } from 'components/Text'
import { useRouter } from 'next/router'

const NavWrap = styled.div<{
  readonly scrolled: boolean,
  readonly page: string
}>`
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    padding: 20px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ scrolled, page }) => `${scrolled || page !== '/' ? "#FFFFFF" : "transparent"}`};
    /* transition: all .4s ease-in-out; */

    @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
      padding: 15px;
    }
`

const LocaleLink = styled(Text) <{
  active: boolean
}>`
  transition: all .03s ease-in-out;
  font-weight: 500;
  cursor: pointer;
  
  :hover {
    color: ${themeGet('colors.brand.teal')};
  }
`

const Button = styled(Text)`
  transition: all .03s ease-in-out;
  margin-left: 20px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    color: ${themeGet('colors.brand.purple')};
  }
`

// const LocaleLink = styled.p<{
//   active: boolean
// }>`
//   color: ${({ active }) => active ? themeGet('colors.brand.teal') : themeGet('colors.brand.black')};
//   transition: all .03s ease-in-out;
//   font-weight: 500;
//   cursor: pointer;

//   :hover {
//     color: ${themeGet('colors.brand.teal')};
//   }
// `

const MenuLogo = styled.img`
  height: 50px;
  margin-bottom: 50px;
  cursor: pointer;
`

const MobileButton = styled(Text)`
  font-family: ${themeGet('fonts.garageBlack')};
  cursor: pointer !important;
  margin-bottom: 35px;
  text-align: center;
  font-size: 40px;
  transition: all .3s ease-in-out;

  :hover {
    color: ${themeGet('colors.brand.gold')};
  }
`

const Logo = styled.img`
  position: fixed;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity .5 ease-in-out;
  height: 30px;
  cursor: pointer;
  mix-blend-mode: difference;

  :hover {
    opacity: .7;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
    height: 25px;
    top: 14px;
  }
`

const Close = styled.img`
  position: fixed;
  top: 20px;
  right: 20px;
  height: 30px;
  cursor: pointer;
  
  :hover {
    opacity: .8
  }
`

const MenuIcon = styled.img`
  cursor: pointer;
  mix-blend-mode: difference;

  :hover {
    opacity: .8
  }
`

const FlyMenu = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const MobileNavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  background-color: #ffffffdb;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
`

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  hidden: {
    y: '100%',
    opacity: 0,
    transition: { duration: 0.5, delay: 0 },
  },
}


export function Navbar() {
  const router = useRouter()
  const [locale, setLocale] = useState(router.locale)
  const { mediaQueries } = useTheme()
  const [hasScrolled, setHasScrolled] = useState(false)
  const isMobile = !useMatchMedia(mediaQueries.newmd)
  const { openMenu, navOpen, toggleNav, menuOpen, toggleMenu } = useUI()
  const isPresent = menuOpen

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 250
      const { scrollTop } = document.documentElement
      const scrolled = scrollTop > offset

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled)
      }
    }, 200)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])






  return (
    <>
      <NavWrap
        scrolled={hasScrolled}
        page={router.asPath}
      >

        <Flex width='fit-content'>
          <Link href="/" locale="en">
            <LocaleLink color={hasScrolled || router.pathname !== '/' ? 'black' : 'white'}>
              {!isMobile ? 'ENGLISH' : 'ENG'}
            </LocaleLink>
          </Link>

          <Text
            mx={[10]}
            color={hasScrolled || router.pathname !== '/' ? 'black' : 'white'}
          >
            /
          </Text>

          <Link href="/" locale="es">
            <LocaleLink
              color={hasScrolled || router.pathname !== '/' ? 'black' : 'white'}
            >
              {!isMobile ? 'ESPAÑOL' : 'ESP'}
            </LocaleLink>
          </Link>
        </Flex>

        <Link href='/'>
          <Logo
            alt='contraluz logo'
            draggable='false'
            src='assets/contraluz-logo-black.svg'
          />
        </Link>

        {
          isMobile ? (
            <MenuIcon
              onClick={() => openMenu()}
              src='assets/menu-icon.svg'
              draggable='false'
            />
          ) : (
            <Flex width='max-content'>
              <Link href={locale === 'en' ? '/our-mezcal' : '/nuestro-mezcal'}>
                <Button color={hasScrolled || router.pathname !== '/' ? 'black' : 'white'}>
                  {locale === 'en' ? 'OUR MEZCAL' : 'NUESTRO MEZCAL'}
                </Button>
              </Link>

              <Link href={locale === 'en' ? '/cocktails' : '/cocteles'}>
                <Button color={hasScrolled || router.pathname !== '/' ? 'black' : 'white'}>
                  {locale === 'en' ? 'COCKTAILS' : 'CÓCTELES'}
                </Button>
              </Link>

              <Link href={locale === 'en' ? '/life-in-contraluz' : '/una-vida-a-contraluz'}>
                <Button color={hasScrolled || router.pathname !== '/' ? 'black' : 'white'}>
                  {locale === 'en' ? 'LIFE IN CONTRALUZ' : 'UNA VIDA A CONTRALUZ'}
                </Button>
              </Link>

              <Link href={locale === 'en' ? '/buy' : '/comprar'}>
                <Button color={hasScrolled || router.pathname !== '/' ? 'black' : 'white'}>
                  {locale === 'en' ? 'BUY NOW' : 'COMPRAR AHORA'}
                </Button>
              </Link>
            </Flex>
          )
        }
      </NavWrap>


      <AnimatePresence>
        {isPresent && (
          <>
            <MobileNavContainer
              variants={variants}
              key="mobileNav"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <FlyMenu
                backgroundImage={`url('images/menu-bottle.png')`}
                backgroundPosition={['bottom', 'bottom']}
                backgroundRepeat='no-repeat'
                backgroundSize='cover'
              >
                <Close
                  onClick={() => toggleMenu()}
                  src='assets/close.svg'
                  draggable='false'
                />

                <MenuLogo src='/assets/contraluz-logo.svg' />

                <Flex flexDirection='column'>
                  <Link href={locale === 'en' ? '/our-mezcal' : '/nuestro-mezcal'}>
                    <MobileButton>
                      {locale === 'en' ? 'OUR MEZCAL' : 'NUESTO MEZCAL'}
                    </MobileButton>
                  </Link>

                  <Link href={locale === 'en' ? '/cocktails' : '/cocteles'}>
                    <MobileButton>
                      {locale === 'en' ? 'COCKTAILS' : 'COCTELES'}
                    </MobileButton>
                  </Link>

                  <Link href={locale === 'en' ? '/life-in-contraluz' : '/una-vida-a-contraluz'}>
                    <MobileButton>
                      {locale === 'en' ? 'LIFE IN CONTRALUZ' : 'UNA VIDA EN CONTRALUZ'}
                    </MobileButton>
                  </Link>

                  <Link href={locale === 'en' ? '/buy' : '/comprar'}>
                    <MobileButton color={'brand.teal'}>
                      {locale === 'en' ? 'BUY NOW' : 'COMPRAR'}
                    </MobileButton>
                  </Link>
                </Flex>

              </FlyMenu>
            </MobileNavContainer>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
