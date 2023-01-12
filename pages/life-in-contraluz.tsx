import Head from 'next/head'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Hero = dynamic(import("components/Backlight/Hero"), { suspense: true });

export default function CocktailsPage() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Contraluz | Cocktails</title>
        <meta name="description" content=">Contraluz | Cocktails" />
      </Head>
      
      <Suspense fallback={`Loading Contraluz...`}>
        <Hero content={t} />
      </Suspense>
    </>
  )
}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
