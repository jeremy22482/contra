import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Suspense, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'

const BuyNow = dynamic(import("components/BuyNow/BuyNow"), { suspense: true });

export default function ComprarPage() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Contraluz | Buy Now</title>
        <meta name="description" content=">Contraluz | Buy Now" />
      </Head>

      <Suspense fallback={`Loading Contraluz...`}>
        <BuyNow content={t} />
      </Suspense>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

