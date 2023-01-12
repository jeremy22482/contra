import styled, { useTheme } from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import { themeGet } from '@styled-system/theme-get';
import { Text } from 'components/Text'
import { useInView } from 'react-intersection-observer';
import { useMatchMedia } from 'hooks/useMatchMedia'
import { motion } from 'framer-motion';
import { Link } from 'components/Link'
import { useRealViewport } from "next-real-viewport";
import { ParallaxBanner } from 'react-scroll-parallax'
import { Flex, Box, Row, Col, Container } from 'layouts/@lay'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

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
  margin-top: 50px;
  transition: all .3s ease-in-out;
  font-family: ${themeGet('fonts.mono')};

  :hover {
    background-color: ${themeGet('colors.brand.purple')};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    width: 100%;
  }
`


export default function BuyNow({ content }): JSX.Element {
  const router = useRouter()
  const [locale, setLocale] = useState(router.locale)
  const { t } = useTranslation('common');


  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <Container py={[150, 180]}>
        <Row>
          <Col span={[12, 12, 6]}>
            <Flex
              backgroundImage={locale === 'en' ? `url('/images/full-bottle-esp.png')` : `url('/images/full-bottle-eng.png')`}
              backgroundRepeat='no-repeat'
              backgroundSize='contain'
              backgroundPosition='center'
              height={[600]}
              ref={ref}
              style={{
                transition: 'all 1s ease-in-out',
                opacity: inView ? '1' : '.3',
                transform: inView ? '' : 'translateY(80px)',
              }}
            />

          </Col>

          <Col span={[12, 12, 6]}>
            <Flex
              flexDirection='column'
              justifyContent='center'
              height={'100%'}
              width={['100%', '80%']}
              ref={ref}
              style={{
                transition: inView ? 'all .5s ease-in-out' : '',
                opacity: inView ? '1' : '.3',
                transform: inView ? '' : 'translateY(80px)',
              }}
            >

              <Text
                color='brand.teal'
                fontFamily='garageBlack'
                fontSize={[70]}
                dangerouslySetInnerHTML={{ __html: t('buy.title') }}
              />

              <Text
                color='brand.black'
                fontFamily='dreaming'
                fontSize={[80, 70]}
                mt={[-50, -30]}
                mb={[40]}
                dangerouslySetInnerHTML={{ __html: t('buy.titleSub') }}
              />

              <Text
                fontFamily='mono'
                fontSize={[16]}
                dangerouslySetInnerHTML={{ __html: t('buy.sub') }}
              />

              <a target='_blank' href={locale === 'en' ? 'https://contraluz.reservebar.com/cart/add/43075733455091' : 'https://www.laeuropea.com.mx/mez-contraluz-reposado-cristalino-700ml-10000021424.html'}>
                <ButtonCTA>
                  {locale === 'en' ? 'BUY NOW' : 'COMPRAR AHORA'}
                </ButtonCTA>

                {/* <script async type="text/javascript">
                  function zync_call() {
                      var z = document.createElement("script");
                      var zmpID="casa-lumbre";
                      var OrderID="{OrderID}";
                      var OrderAmount="{OrderAmount}";
                      var OrderQty="{OrderQty}";
                      var cache_buster="{cache_buster}";

                      var z_src = "https://live.rezync.com/sync?c=16b6410431b6374e780104abb0443ca8&p=8559e6290f737b2c4ec7a7ef0b58b8d5&k=casa-lumbre-pixel-8180&zmpID="+zmpID+"&OrderID="+OrderID+"&OrderAmount="+OrderAmount+"&OrderQty="+OrderQty+"&cache_buster="+cache_buster;
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
              </script> */}

              </a>
            </Flex>
          </Col>
        </Row>
      </Container>
    </>
  )
}

