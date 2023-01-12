import styled, { useTheme } from 'styled-components'
import { useMatchMedia } from 'hooks/useMatchMedia'
import { Text } from 'components/Text'
import { useInView } from 'react-intersection-observer';
import { ParallaxBanner } from 'react-scroll-parallax'
import { Flex, Row, Col, Container } from 'layouts/@lay'
import { useTranslation } from 'next-i18next'
import { themeGet } from '@styled-system/theme-get';
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

const Bottle = styled.img`
  width: 220px;

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    width: 120px;
    margin-top: 50px;
  }
`

const ButtonCTA = styled.button`
  cursor: pointer;
  background-color: ${themeGet('colors.brand.teal')};
  color: ${themeGet('colors.brand.white')};
  font-size: 16px;
  padding: 10px 20px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  transition: all .3s ease-in-out;
  font-family: ${themeGet('fonts.mono')};
  width: fit-content;

  :hover {
    background-color: ${themeGet('colors.brand.purple')};
  }
`


export default function SubHero({ content }): JSX.Element {
  const { t } = useTranslation('common');
  const { mediaQueries } = useTheme()
  const isMobile = useMatchMedia(mediaQueries.md)
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

  const [ref5, inView5] = useInView({
    triggerOnce: false,
  });

  const [ref6, inView6] = useInView({
    triggerOnce: false,
  });

  return (
    <ParallaxBanner
      // style={{ aspectRatio: '2 / 1' }}
      className='aboutBottle'
      layers={[
        {
          image: '/images/about-bottle.jpg',
          speed: -30,
        },
      ]}
    >
      <Container
        // py={[50, 50, 180]}
        id='about'
      >
        <Row>
          <Col position={'relative'} offset={[0, 2]} span={[12, 8]}>
            <Flex
              flexDirection={'column'}
              alignItems='center'
              my={[100]}
            >
              <Text
                color='brand.teal'
                textAlign='center'
                fontFamily='garageBlack'
                fontSize={[50, 80]}
                dangerouslySetInnerHTML={{ __html: t('home.sub.title') }}
                ref={ref}
                style={{
                  transition: 'all 1s ease-in-out',
                  opacity: inView ? '1' : '0',
                  transform: inView ? '' : 'translateY(80px)'
                }}
              />

              <Text
                color='brand.teal'
                textAlign='center'
                fontFamily='garageBlack'
                fontSize={[50, 80]}
                dangerouslySetInnerHTML={{ __html: t('home.sub.titleSub') }}
                ref={ref2}
                style={{
                  transition: 'all 1s ease-in-out',
                  opacity: inView2 ? '1' : '0',
                  transform: inView2 ? '' : 'translateY(80px)'
                }}
              />

              <Text
                color='brand.black'
                textAlign='center'
                fontFamily='dreaming'
                fontSize={[60, 80, 120]}
                mt={[-20, -40]}
                mb={[20, 50]}
                ref={ref3}
                style={{
                  transition: 'all 1s ease-in-out',
                  opacity: inView3 ? '1' : '0',
                  transform: inView3 ? '' : 'translateY(80px)'
                }}
                dangerouslySetInnerHTML={{ __html: t('home.sub.titleSubSub') }}
              />

              {/* bottle */}
              <Flex
                width={'100%'}
                alignItems='center'
                justifyContent='center'
                mb={50}
              >
                <Bottle
                  ref={ref4}
                  style={{
                    transition: 'all 1s ease-in-out',
                    opacity: inView4 ? '1' : '0',
                    transform: inView4 ? '' : 'translateY(80px)'
                  }}
                  src={
                    locale === 'es' ? (
                      '/images/full-bottle-eng.png'
                    ) : (
                      '/images/full-bottle-esp.png'
                    )
                  }
                />
              </Flex>

              <Text
                color='brand.black'
                fontFamily='mono'
                fontSize={[18, 20]}
                textAlign='center'
                as='p'
                fontWeight='bold'
                dangerouslySetInnerHTML={{ __html: t('home.sub.sub') }}
                ref={ref5}
                style={{
                  transition: 'all 1s ease-in-out',
                  opacity: inView5 ? '1' : '0',
                  transform: inView5 ? '' : 'translateY(80px)'
                }}
              />

              <Link href={locale === 'en' ? '/our-mezcal' : '/nuestro-mezcal'}>
                <ButtonCTA
                  ref={ref6}
                  style={{
                    transition: 'all 1s ease-in-out',
                    opacity: inView6 ? '1' : '0',
                    transform: inView6 ? '' : 'translateY(80px)'
                  }}>
                  {t('home.sub.CTA')}
                </ButtonCTA>
              </Link>
            </Flex>

          </Col>

          {/* desktop bottle */}
          {/* {
            isMobile &&
            <Flex
              width={[200]}
              position='absolute'
              right={0}
              top={'2%'}
              ref={ref}
              style={{
                transition: 'all 2s ease-in-out',
                opacity: inView ? '1' : '0',
                transform: inView ? '' : 'translateY(80px)'
              }}
            >
              <Bottle
                src={
                  locale === 'es' ? (
                    '/images/full-bottle-eng.png'
                  ) : (
                    '/images/full-bottle-esp.png'
                  )
                }
                ref={ref}
                style={{
                  transition: 'all 2s ease-in-out',
                  opacity: inView ? '1' : '0',
                  transform: inView ? '' : 'translateY(80px)',
                }}
              />
            </Flex>
          } */}

        </Row>
      </Container>
    </ParallaxBanner>
  )
}

