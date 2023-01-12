import Head from 'next/head'
import { Row, Col, Container, Box } from 'layouts/@lay'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Text } from 'components/Text'


export default function TermsAndConditionsPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Contraluz | TERMS & CONDITIONS</title>
        <meta name="description" content=">Contraluz | TERMS & CONDITIONS" />
      </Head>

      <Box>
        <Container>
          <Row>
            <Col
              paddingTop={[100]}
              offset={[0, 3]}
              span={[12, 6]}
            >
              <Text dangerouslySetInnerHTML={{ __html: t('terms') }} />
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  )
}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
