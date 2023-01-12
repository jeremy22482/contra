import Head from 'next/head'
import { Suspense } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'

const Hero = dynamic(import("components/Cocktails/Hero"), { suspense: true });
const Recepies = dynamic(import("components/Cocktails/Recepies"), { suspense: true });

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
        <Recepies content={t} />
      </Suspense>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})


