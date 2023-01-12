import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import { Suspense, useRef, useEffect } from 'react'

const Hero = dynamic(import("components/OurMezcal/Hero"), { suspense: true });
const Process = dynamic(import("components/OurMezcal/Process"), { suspense: true });

export default function OurMezcalPage() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Contraluz | Our Mezcal</title>
        <meta name="description" content="Contraluz | Our Mezcal" />
      </Head>

      <Suspense fallback={`Loading Contraluz...`}>
        <Hero content={t} />
        <Process content={t} />
      </Suspense>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
