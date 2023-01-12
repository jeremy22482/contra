import { themeGet } from '@styled-system/theme-get';
import { Flex, Box } from 'layouts/@lay'
import { Text } from 'components/Text'
import { useRealViewport } from "next-real-viewport";
import styled, { useTheme } from 'styled-components'
import { useMatchMedia } from 'hooks/useMatchMedia'
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next'
import { useState, useRef } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'


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
  position: absolute;
  bottom: 40px;
  right: 20px;

  :hover {
    background-color: ${themeGet('colors.brand.purple')};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    font-size: 14px;
    bottom: 20px;
    left: 20px;
  }
`

const Signature = styled.img`
  margin: 20px 0px;
  height: 150px; 

  @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
    height: 120px;
  }
`

const Label = styled.img`
  position: absolute;
  height: 200px;
  bottom: 20px;
  left: 20px;

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    bottom: 150px;
    height: 200px;
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

  @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
    height: 100vh;
  }
`


export default function Note({ content }): JSX.Element {
  const { t } = useTranslation('common');
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
        background={locale === 'en' ? 'url(/images/taste.jpg) no-repeat bottom' : 'url(/images/cocktailESP2.jpg) no-repeat bottom'}
        backgroundSize={'cover'}
      >
        <Flex
          flexDirection='column'
          justifyContent={['space-between', 'flex-start']}
          alignItems={['flex-start']}
          height='100%'
          width='100%'
          padding={[20]}
        >

          <span>
            <Text
              color='brand.white'
              fontFamily='mono'
              fontSize={[14, 20]}
              fontWeight='bold'
              dangerouslySetInnerHTML={{ __html: t('home.note.sub') }}
              ref={ref}
              style={{
                transition: 'all 1s ease-in-out',
                opacity: inView ? '1' : '.3',
                transform: inView ? '' : 'translateY(80px)',
              }}
            />

            <Signature
              src='assets/firma.svg'
              alt='Firma Maluma'
              draggable='false'
              ref={ref2}
              style={{
                transition: 'all 1s ease-in-out',
                opacity: inView2 ? '1' : '.3',
                transform: inView2 ? '' : 'translateY(80px)',
              }}
            />

            <Link href={locale === 'en' ? '/life-in-contraluz' : '/una-vida-a-contraluz'}>
              <ButtonCTA
                ref={ref4}
                style={{
                  transition: 'all 1s ease-in-out',
                  opacity: inView4 ? '1' : '.3',
                  transform: inView4 ? '' : 'translateY(80px)',
                }}
              >
                {t('home.note.CTA')}
              </ButtonCTA>
            </Link>
          </span>

          <Label
            src='/assets/label-white.svg'
            alt='Firma Maluma'
            draggable='false'
            ref={ref3}
            style={{
              transition: 'all 1s ease-in-out',
              opacity: inView3 ? '1' : '.3',
              transform: inView3 ? '' : 'translateY(80px)',
            }}
          />

        </Flex>
      </MainChild>
    </>
  )
}

