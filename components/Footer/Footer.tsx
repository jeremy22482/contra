import styled, { useTheme } from 'styled-components'
import { useMatchMedia } from 'hooks/useMatchMedia'
import { themeGet } from '@styled-system/theme-get';
import { Text } from 'components/Text'
import { Flex, Box, Row, Col, Container } from 'layouts/@lay'
import Subscribe from 'components/Subscribe'
import { useInView } from 'react-intersection-observer';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Script from 'next/script';

const ButtonCTA = styled(Box)`
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
  text-align: center;
  transition: all .3s ease-in-out;

  :hover {
    background-color: ${themeGet('colors.brand.purple')};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
    width: unset;
  }
`
const FooterLogo = styled.img`
  height: 100px;

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    height: 60px;
  }
`

const FooterLink = styled.p`
  font-size: 12px;
  margin-right: 5px;
  transition: all .03s ease-in-out;
  cursor: pointer;
  color: ${themeGet('colors.brand.black')};

  :hover {
    color: ${themeGet('colors.brand.purple')};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    margin: 10px;
  }
`

const FooterCont = styled.div`
  /* background-color: white;
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100vw;
  z-index: -1;
  height: fit-content; */
`

export function Footer() {
  const { mediaQueries } = useTheme()
  const router = useRouter()
  const [locale, setLocale] = useState(router.locale)
  const isMobile = useMatchMedia(mediaQueries.md)
  const [ref, inView] = useInView({
    triggerOnce: false,
  });


  <Script
    dangerouslySetInnerHTML={{
      __html: `
    function zync_call() {
      var z = document.createElement("script");
      var zmpID="casa-lumbre";
      var cache_buster="{cache_buster}";

      var z_src = "https://live.rezync.com/sync?c=16b6410431b6374e780104abb0443ca8&p=8559e6290f737b2c4ec7a7ef0b58b8d5&k=casa-lumbre-pixel-4339&zmpID="+zmpID+"&cache_buster="+cache_buster;
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

  return (
    <FooterCont>
      <Container height={[340, 600]}>
        <Row height={'inherit'}>
          <Col offset={[0, 4]} span={[12, 4]}>
            <Flex
              flexDirection='column'
              width={'100%'}
              height={'100%'}
              justifyContent='center'
              alignItems={'center'}
              ref={ref}
              style={{
                transition: 'all 1.8s ease-in-out',
                opacity: inView ? '1' : '.3',
                transform: inView ? '' : 'translateY(80px)',
              }}
            >

              <FooterLogo draggable={false} src='assets/contraluz-logo.svg' />

              <Text
                color='brand.teal'
                fontFamily='mono'
                fontSize={[20]}
                fontWeight='bold'
                textAlign='center'
                mt={15}
              >
                {locale === 'en' ? 'THE FIRST' : 'EL PRIMER'}
              </Text>

              <Text
                color='brand.black'
                fontFamily='dreaming'
                fontSize={[40]}
                textAlign='center'
                marginTop={-10}
              >
                Mezcal Cristalino
              </Text>

              <br />
              <br />

              <Text
                color='brand.black'
                fontFamily='mono'
                fontSize={[14, 20]}
                fontWeight='bold'
                textAlign='center'
              >

                {
                  locale === 'en' ? (
                    'A TOAST TO MOMENTS WE SHARE WITH FRIENDS WE MAKE AND FAMILY WE CREATE.') : (
                    'BRINDEMOS POR LOS MOMENTOS QUE COMPARTIMOS CON LOS AMIGOS DEL ALMA Y FAMILIA QUERIDA.'
                  )
                }

              </Text>

            </Flex>

          </Col>
        </Row>
      </Container>


      <Container>
        {
          !isMobile &&
          <a target='_blank' href='https://www.instagram.com/mezcalcontraluz/?hl=en'>
            <ButtonCTA>
              {locale === 'en' ? 'FOLLOW ' : 'SIGUE '}
              @MEZCALCONTRALUZ
            </ButtonCTA>
          </a>
        }

        <Row>
          <Col span={[12, 12, 5]}>
            <Flex>
              <Flex
                alignItems='center'
                justifyContent={['center']}
                flexDirection={'column'}
                width={['100%', 'unset']}
              >
                <Text
                  color='brand.teal'
                  fontFamily='garage'
                  fontSize={[50, 70]}
                  fontWeight='bold'
                  textAlign='center'
                  mt={15}
                >
                  {locale === 'en' ? 'LIVE A LIFE ' : 'VIVE UNA VIDA '}
                </Text>
                <Text
                  color='brand.teal'
                  fontFamily='dreaming'
                  fontSize={[80, 100]}
                  textAlign='center'
                  marginTop={-30}
                  ml={[0, 10]}
                >
                  {locale === 'en' ? 'in Contraluz ' : 'a Contraluz '}
                </Text>
              </Flex>
            </Flex>
          </Col>

          <Col span={[12, 12, 7]}>
            <Flex
              flexDirection={'column'}
              pb={[20]}
            >
              <Text
                color='brand.black'
                fontFamily='mono'
                fontSize={[14, 24]}
                fontWeight='bold'
                mt={15}
                mb={[20, 34]}
              >
                {locale === 'en' ? "EXPERIENCE MEZCAL'S NEXT ACT" : 'EXPERIMENTA EL PRÓXIMO ACTO DEL MEZCAL'}
              </Text>


              <Subscribe />

              <Box />

              <Flex
                mt={[30, 60]}
                justifyContent={['space-evenly', 'space-between']}
                flexWrap={'wrap'}
              >
                {
                  isMobile &&
                  <Text
                    color='brand.teal'
                    fontSize={12}
                  >
                    {locale === 'en' ? 'DRINK RESPONSIBLY ' : 'EVITA EL EXCESO '}
                  </Text>
                }

                <a target='_blank' href='https://www.instagram.com/mezcalcontraluz/?hl=en'>
                  <FooterLink>
                    INSTAGRAM
                  </FooterLink>
                </a>

                <a target='_blank' href='https://www.facebook.com/mezcalcontraluz1'>
                  <FooterLink>
                    FACEBOOK
                  </FooterLink>
                </a>

                <Link href='/terms-and-conditions'>
                  <FooterLink>
                    {locale === 'en' ? 'PRIVACY' : 'PRIVACIDAD'}
                  </FooterLink>
                </Link>

                <Link href='/terms-and-conditions'>
                  <FooterLink>
                    {locale === 'en' ? 'TERMS' : 'TÉRMINOS'}
                  </FooterLink>
                </Link>

                {/* <a target='_blank' href='https://www.reservebar.com/products/contraluz-cristalino-mezcal'>
                  <FooterLink>
                    {locale === 'en' ? 'BUY NOW ' : 'COMPRA AHORA'}
                  </FooterLink>
                </a> */}
              </Flex>

              {
                !isMobile &&
                <Text
                  mt={[10]}
                  color='brand.teal'
                  textAlign={['center', 'unset']}
                  mb={[50, 0]}
                >
                  {locale === 'en' ? 'PLEASE DRINK RESPONSIBLY ' : 'EVITA EL EXCESO '}
                </Text>
              }

            </Flex>
          </Col>
        </Row>
      </Container>
    </FooterCont>
  )
}
