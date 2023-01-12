import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
import { useUI } from 'hooks/useUI'


const Hero = dynamic(import("components/Home/Hero"), { suspense: true });
const SubHero = dynamic(import("components/Home/SubHero"), { suspense: true });
const Note = dynamic(import("components/Home/Note"), { suspense: true });
const Age = dynamic(import("components/Age/Age"), { suspense: true });
const Taste = dynamic(import("components/Home/Taste"), { suspense: true });

export default function Index() {
  const { toggleNav, ...state } = useUI()
  const { t } = useTranslation('common')

  return (
    <div>
      <Head>
        <title>Contraluz Mezcal</title>
        <meta name="description" content="Contraluz Mezcal" />
      </Head>

      <Suspense fallback={`Loading Contraluz...`}>
        <Age content={t} />
        <Hero content={t} />
        <SubHero content={t} />
        <Note content={t} />
        <Taste content={t} />
      </Suspense>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

