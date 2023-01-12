import { useEffect, useRef, useState } from 'react'
import { themeGet } from '@styled-system/theme-get';
import { Flex } from 'layouts/@lay'
import { Text } from 'components/Text'
import { useTranslation } from 'next-i18next'
import styled, { useTheme } from 'styled-components'
import { useMatchMedia } from 'hooks/useMatchMedia'
import { useRealViewport } from "next-real-viewport";
import { AnimatePresence, motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer';
import Link from 'next/link'

const Modal = styled(motion.section)`
  position: fixed;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  background-color: #000000;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    padding-top: 10vh;
    padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */ 
  }
`

const Close = styled.img`
  position: fixed;
  top: 20px;
  right: 20px;
  height: 30px;
  cursor: pointer;
  z-index: 99999;

  :hover {
    opacity: .8
  }
`

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
  margin-top: 20px;
  transition: all .3s ease-in-out;
  font-family: ${themeGet('fonts.mono')};

  :hover {
    background-color: ${themeGet('colors.brand.purple')};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    width: 100%;
  }
`

const Video = styled(motion.video)`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100vw;
  position: relative;
  border-radius: 30px;
  padding: 8px;

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    padding: 3px 5px;
  }
`

const First = styled(Flex)``

const Warning = styled(Text)`
  position: absolute;
  transform: rotate(90deg);
  top: 50%;
  right: -30px;
  color: white;
  mix-blend-mode: difference;
  z-index: 10;
`

const Mute = styled(Flex)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;
  padding: 20px;
  transition: all .3s ease-in-out;

  #mute {
    margin-right: 10px;

    :hover {
      transform: scale(1.1)
    } 
    @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
      margin-right: 0px;
    }
  }

  #expand {
    :hover {
      transform: scale(1.1)
    }
    @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
    top: 35%;
    right: -10px;
    flex-direction: column;
  }
`

const variants = {
  enter: {
    opacity: [0, 1],
    transition: {
      delay: 0.5
    }
  }
}


const videos = {
  "esp": {
    "videoDesktop": "https://player.vimeo.com/progressive_redirect/playback/741653275/rendition/1080p/file.mp4?loc=external&signature=92bd19327c1b560eafb9c86a2ccf9b60465aca39f11847175f0a3ac31d291402",
    "videoMobile": "https://player.vimeo.com/progressive_redirect/playback/740936219/rendition/720p/file.mp4?loc=external&signature=df79f4512283661557faa7a3476c7ae2d975a5a96f27a032996dc04b17687738",
  },
  "eng": {
    "videoDesktop": "https://player.vimeo.com/progressive_redirect/playback/741652942/rendition/1080p/file.mp4?loc=external&signature=6184e465f62dad6011484f2f7e658ed3a214c5ff27e2de707529709677885025",
    "videoMobile": "https://player.vimeo.com/progressive_redirect/playback/740936318/rendition/720p/file.mp4?loc=external&signature=8dbb6f2a25e75d6b67156373b70ec0901af234dcdee7e7f66a9bb0eca5626369",
  }
}

export default function Hero({ content }): JSX.Element {
  const { vh } = useRealViewport();
  const { t } = useTranslation('common');
  const videoRef = useRef<HTMLVideoElement>()
  const videoRefDos = useRef<HTMLVideoElement>()
  const { mediaQueries } = useTheme()
  const [mute, setMute] = useState(false)
  const router = useRouter()
  const [locale, setLocale] = useState(router.locale)
  const isMobile = !useMatchMedia(mediaQueries.md)
  const [modal, setModal] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (modal) {
      if (videoRefDos && videoRefDos.current && locale === 'en') {
        videoRefDos.current.src = isMobile ? videos.eng.videoMobile : videos.eng.videoDesktop
      } else {
        videoRefDos.current.src = isMobile ? videos.esp.videoMobile : videos.esp.videoDesktop
      }
    } else {
      if (videoRef && videoRef.current && locale === 'en') {
        videoRef.current.src = isMobile ? videos.eng.videoMobile : videos.eng.videoDesktop
      } else {
        videoRef.current.src = isMobile ? videos.esp.videoMobile : videos.esp.videoDesktop
      }
    }
  }, [locale, isMobile, modal])

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play()
    }
    if (modal) {
      unMute()
      if (videoRefDos && videoRefDos.current) {
        videoRefDos.current.play()
      }
    }
  }, [modal])

  function unMute() {
    if (videoRef && videoRef.current) {
      setMute(!mute)
      videoRef.current.muted = !videoRef.current.muted;
    }
  }

  return (
    <>
      <Flex
        height={[100 * vh]}
        justifyContent={['flex-start']}
        alignItems={'flex-end'}
        overflow='hidden'
        bg='black'
      >

        {
          locale === 'es' &&
          <Warning>
            EVITA EL EXCESO
          </Warning>
        }

        <AnimatePresence>
          <Video
            variants={variants}
            animate={'enter'}
            exit={'enter'}
            transition={{ type: "spring", stiffness: 100, delay: .5 }}
            muted
            ref={videoRef}
            autoPlay={true}
            preload="auto"
            loop
            playsInline
            id={isMobile ? 'videoMobile' : 'videoDesktop'}
          />
        </AnimatePresence>


        <First
          flexDirection={'column'}
          width={['100%', 'unset']}
          position='absolute'
          padding={[20]}
          ref={ref}
          style={{
            transition: 'all .5s ease-in-out',
            opacity: inView ? '1' : '.3',
            transform: inView ? '' : 'translateY(80px)',
          }}
        >
          <Text
            color='brand.teal'
            fontFamily='garageBlack'
            fontSize={[50, 110]}
            as='p'
          >
            {t('home.hero.title')}
          </Text>

          <Text
            color='brand.white'
            fontFamily='dreaming'
            fontSize={[40, 70]}
            mt={[-20, -40]}
          >
            {t('home.hero.titleSub')}
          </Text>

          <Text
            color='brand.white'
            fontFamily='garageBlack'
            fontSize={[24, 40]}
            textTransform='uppercase'
            mt={10}
          >
            {t('home.hero.blurb')}
          </Text>

          {/* <AnchorLink
            href={`#about`}
            offset={isMobile ? 50 : 0}
          > */}
          <Link href={locale === 'en' ? '/our-mezcal' : '/nuestro-mezcal'}>
            <ButtonCTA>
              {t('home.hero.CTA')}
            </ButtonCTA>
          </Link>
          {/* </AnchorLink> */}
        </First>


        <Mute>
          <span id='mute' onClick={() => unMute()}>
            {
              !mute ? (
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 7.5C18.5 7.5 20 9 20 11.5C20 14 18.5 15.5 18.5 15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 14V10C4 9.44772 4.44772 9 5 9H7.69722C7.89465 9 8.08766 8.94156 8.25192 8.83205L12.4453 6.03647C13.1099 5.59343 14 6.06982 14 6.86852V17.1315C14 17.9302 13.1099 18.4066 12.4453 17.9635L8.25192 15.1679C8.08766 15.0584 7.89465 15 7.69722 15H5C4.44772 15 4 14.5523 4 14Z" stroke="white" strokeWidth="1.5" />
                </svg>
              ) : (
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 14L19.0005 12M21 10L19.0005 12M19.0005 12L17 10M19.0005 12L21 14" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 14V10C3 9.44772 3.44772 9 4 9H6.69722C6.89465 9 7.08766 8.94156 7.25192 8.83205L11.4453 6.03647C12.1099 5.59343 13 6.06982 13 6.86852V17.1315C13 17.9302 12.1099 18.4066 11.4453 17.9635L7.25192 15.1679C7.08766 15.0584 6.89465 15 6.69722 15H4C3.44772 15 3 14.5523 3 14Z" stroke="white" strokeWidth="1.5" />
                </svg>
              )
            }
          </span>

          <span id='expand' onClick={() => setModal(!modal)}>
            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 9L4 4M4 4V8M4 4H8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 9L20 4M20 4V8M20 4H16" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 15L4 20M4 20V16M4 20H8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 15L20 20M20 20V16M20 20H16" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </Mute>
      </Flex>

      <AnimatePresence>
        {
          modal && (
            <Modal>

              <Close
                onClick={() => setModal(false)}
                src='/assets/close-white.svg'
                draggable='false'
              />

              <Video
                variants={variants}
                animate={'enter'}
                exit={'enter'}
                transition={{ type: "spring", stiffness: 100, delay: .5 }}
                // muted
                ref={videoRefDos}
                autoPlay={true}
                preload="auto"
                loop
                playsInline
                id={isMobile ? 'videoMobile' : 'videoDesktop'}
              />
            </Modal>
          )
        }
      </AnimatePresence>
    </>
  )
}
