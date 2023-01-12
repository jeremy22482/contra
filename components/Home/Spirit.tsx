import styled, { useTheme } from 'styled-components'
import { themeGet } from '@styled-system/theme-get';
import { useInView } from 'react-intersection-observer';
import { Flex, Box, Row, Col, Container } from 'layouts/@lay'
import { Text } from 'components/Text'
import { useState, useEffect } from 'react'
import { Link } from 'components/Link'
import { useRouter } from 'next/router'

const ButtonCTA = styled(Box)`
  background-color: ${themeGet('colors.brand.gold')};
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

  :hover {
    background-color: ${themeGet('colors.brand.teal')};
  }


  @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
    width: unset;
  }
`
export function Spirit(): JSX.Element {
  const router = useRouter()
  const [locale, setLocale] = useState(router.locale)
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Box py={[40, 150]}>
      <Container>
        <Row>
          <Col
            offset={[0, 1]}
            span={[12, 5]}
            ref={ref}
            style={{
              transition: inView ? 'all .5s ease-in-out' : '',
              opacity: inView ? '1' : '.3',
              transform: inView ? '' : 'translateY(80px)',
            }}
          >
            <Flex
              flexDirection='column'
              alignItems={'center'}
              justifyContent='center'
              borderBottom='1px solid black'
              paddingBottom={[40]}
              width={['100%', 'unset']}
            >
              <Text
                color='brand.gold'
                fontFamily='garageBlack'
                fontSize={[40, 70]}
                as='p'
                textAlign='center'
              >
                OUR SPIRIT
              </Text>
              <Text
                color='brand.black'
                fontFamily='mono'
                fontSize={[14, 20]}
                textAlign='center'
                as='p'
                fontWeight='bold'
              >
                AS THE 1ST CRISTALINO MEZCAL, CONTRALUZ IS REDEFINING WHAT ULTRA-PREMIUM MEZCAL LOOKS, FEELS AND TASTES LIKE.
              </Text>

              <Link href={locale === 'en' ? '/our-mezcal' : '/nuestro-mezcal'}>
                <ButtonCTA>
                  LEARN MORE
                </ButtonCTA>
              </Link>
            </Flex>

            <Flex
              flexDirection='column'
              alignItems={'center'}
              justifyContent='center'
              paddingTop={[40]}
              ref={ref}
              style={{
                transition: inView ? 'all .5s ease-in-out' : '',
                opacity: inView ? '1' : '.3',
                transform: inView ? '' : 'translateY(80px)',
              }}
            >
              <Text
                color='brand.black'
                fontFamily='garageBlack'
                fontSize={[24, 40]}
                as='p'
                textAlign='center'
              >
                INTRODUCING CONTRALUZ,
              </Text>

              <Text
                color='brand.teal'
                fontFamily='garageBlack'
                fontSize={[24, 40]}
                as='p'
                textAlign='center'
              >
                THE FIRST
              </Text>

              <Text
                color='brand.black'
                fontFamily='dreaming'
                textAlign='center'
                fontSize={[40, 70]}
                as='p'
              >
                Cristalino Mezcal
              </Text>
            </Flex>
          </Col>


          <Col
            span={[12, 6]}
            ref={ref}
            style={{
              transition: inView ? 'all .5s ease-in-out' : '',
              opacity: inView ? '1' : '.3',
              transform: inView ? '' : 'translateY(80px)',
            }}
          >
            <Flex
              backgroundImage={`url('/images/bottle-fix.png')`}
              backgroundRepeat='no-repeat'
              backgroundSize='contain'
              backgroundPosition='top'
              // width={'100vw'}
              height={[400, 720]}
              justifyContent={['flex-end']}
              alignItems={'flex-start'}
              mt={[50, 0]}
            >
            </Flex>
          </Col>
        </Row>
      </Container>
    </Box>
  )
}

