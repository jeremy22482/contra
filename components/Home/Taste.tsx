import { themeGet } from '@styled-system/theme-get';
import { Flex, Box } from 'layouts/@lay'
import { Text } from 'components/Text'
import { Scene } from 'react-scrollmagic';
import { useRealViewport } from "next-real-viewport";
import styled, { useTheme } from 'styled-components'
import { useMatchMedia } from 'hooks/useMatchMedia'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


const Signature = styled.img`
  height: 150px; 
  margin: 20px 0px; 

  @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
    height: 170px;
  }
`

const MainChild = styled(Box)`
  position: relative;
  transition: all .5s ease-in;
  height: calc(var(--vh) * 90);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  overflow: none;
  /* margin-bottom: 500px; */

  @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
    height: 100vh;
  }
`


const ButtonCTA = styled.button`
  cursor: pointer;
  background-color: ${themeGet('colors.brand.teal')};
  color: ${themeGet('colors.brand.white')};
  font-size: 16px;
  width: fit-content;
  padding: 10px 20px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  transition: all .3s ease-in-out;
  font-family: ${themeGet('fonts.mono')};

  :hover {
    background-color: ${themeGet('colors.brand.purple')};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    width: 100%;
  }
`


export default function Note({ content }): JSX.Element {
  const { t } = useTranslation('common');
  const { vw, vh } = useRealViewport();
  const { mediaQueries } = useTheme()
  const isMobile = useMatchMedia(mediaQueries.sm)
  const router = useRouter()
  const [locale, setLocale] = useState(router.locale)

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <MainChild
        background={locale === 'en' ? 'url(/images/tasteImg.png) no-repeat' : 'url(/images/tasteImg.png) no-repeat'}
        backgroundPosition='center'
        backgroundSize='cover'
      >
        <Flex
          flexDirection='column'
          justifyContent={['space-between', 'flex-start']}
          alignItems='flex-start'
          height='100%'
          width={['100%']}
          padding={[20]}
        >

          <span>
            <Text
              color='brand.teal'
              fontFamily='garageBlack'
              fontSize={[40, 80]}
              fontWeight='bold'
              dangerouslySetInnerHTML={{ __html: t('home.taste.title') }}
              ref={ref}
              style={{
                transition: 'all 1s ease-in-out',
                opacity: inView ? '1' : '.3',
                transform: inView ? '' : 'translateY(80px)',
              }}
            />

            <Text
              color='brand.white'
              fontFamily='dreaming'
              fontSize={[60, 70]}
              mt={['-30px']}
              dangerouslySetInnerHTML={{ __html: t('home.taste.titleSub') }}
              ref={ref2}
              style={{
                transition: 'all 1s ease-in-out',
                opacity: inView2 ? '1' : '.3',
                transform: inView2 ? '' : 'translateY(80px)',
              }}
            />
          </span>



          <Link href={locale === 'en' ? '/cocktails' : '/cocteles'}>
            <ButtonCTA
              ref={ref3}
              style={{
                transition: 'all 1s ease-in-out',
                opacity: inView3 ? '1' : '.3',
                transform: inView3 ? '' : 'translateY(80px)',
              }}
            >
              {t('home.taste.CTA')}
            </ButtonCTA>
          </Link>

        </Flex>
      </MainChild>
    </>
  )
}

