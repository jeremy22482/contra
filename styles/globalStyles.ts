import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const GlobalStyles = createGlobalStyle`

  #progress {
    position: fixed;
    top: 20px;
    left: 20px;
    transform: rotate(-90deg);
  }

  circle {
    stroke-dashoffset: 0;
    stroke-width: 15%;
    fill: none;
  }


  .sticky {
    width: 100vw;
    height: calc(var(--vh) * 100);
  }

  .sticky > div {
    position: sticky;
    top: 300vh;
    transform: translateY(-50%)
    /* top: calc(var(--vh) * 50); */
  }

  html {
    height: -webkit-fill-available !important;
  }

  *::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
  }
  /* Old shadow dom for play button */

  *::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  /* .animated {
    transition: all .5s ease-in-out;
    transform: translateY(80px);
    opacity: .3;
  } */

  .tasteBottle {
      /* height: 620px; */

      > div {
      background-repeat: no-repeat !important;
      background-position: 0px -600px !important;
      z-index: -1;

      @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
        background-position: center !important;
        background-position: -200px -100px !important;
        background-repeat: no-repeat !important;
      }
    }
    
    @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {}  
  }


  .aboutBottle {
    /* height: 620px; */
    /* position: sticky !important;
    top: 0 !important;
    height: calc(var(--vh) * 100) !important;
    overflow-y: scroll !important; */

    > div {
      background-repeat: no-repeat !important;
      background-position: -220px -100px !important;
      /* z-index: -1; */

      @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
        /* background-position: center !important;
        background-size: cover !important;
        background-repeat: no-repeat !important; */
        background-position: -200px -50px !important;
      }

      @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
        /* background-position: -300px -200px !important; */
      }
    }
    
  }

  .aboutBottleDos {
    /* height: 620px; */
    /* position: sticky !important; */
    /* top: 0 !important; */
    /* height: calc(var(--vh) * 100) !important; */
    /* overflow-y: scroll !important; */
    /* height: 200vh; */
    height: fit-content;

    @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
      /* height: 150vh; */
    }

    > div {
      background-repeat: no-repeat !important;
      /* background-position: -320px -300px !important; */
      z-index: -1;

      @media only screen and (max-width: ${themeGet('breakpoints.md')}) {
        background-position: center !important;
        background-size: cover !important;
        /* background-position: -320px -300px !important; */
        background-repeat: no-repeat !important;
      }

      @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
        background-position: -220px -150px !important;
      }
    }
    
  }

  .horizontalBottle {
    height: 620px;

    > div {
      /* background-position: -250px !important; */
      background-repeat: no-repeat !important;

      @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
        background-position: center !important;
        background-size: 600px !important;
        background-repeat: no-repeat !important;
      }
    }

    @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
      min-height: 282px;
    }
  }

  .topBanner {
    height: 300px;
    background-repeat: no-repeat !important;


    > div {
      background-position: -300px !important;
    }
  }

  .middleBanner {
    height: 600px;
    background-repeat: no-repeat !important;

    > div {
      @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
      /* background-position: -300px !important; */
    }
    }
  }
  
  .bottleTop {
    height: 350px;
      /* background-repeat: no-repeat !important; */
      
      > div {
          z-index: -1;
          @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
          /* background-position: -300px !important; */
          }
      }    
  }

  .backlightSub{
    height: 782px;
      /* background-repeat: no-repeat !important; */
      
      > div {
          z-index: -1;
          @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
          /* background-position: -300px !important; */
          }
      }  
  }

  .backlightHero{
      height: 700px;
      /* background-repeat: no-repeat !important; */
      
      > div {
          z-index: -1;
          @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
          /* background-position: -300px !important; */
          }
      }
  }
  
  /* .animated.faded {
    opacity: 1;
    transform: translateY(0px);
    transition: all .5s ease-in-out;
  } */


  * ::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${themeGet('fonts.mono')};
    color: ${themeGet('colors.brand.black')};
    /* font-feature-settings: 'salt' on; */
    /* -webkit-font-smoothing: antialiased; */
    /* text-rendering: optimizeLegibility; */
    /* height: calc(var(--vh) * 100); */
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    line-height: 1.1;
    overflow-x: hidden !important;
    
    @media only screen and (max-width: ${themeGet('breakpoints.sm')}) {
      font-size: 11px;
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    ::selection {
      background-color: transparent;
      color: inherit
    }
  }

  #introTick {
    position: absolute;
    top: 100px;
    right: 100px;
  }

  ul {
    position: fixed;
    bottom: 40px;
    right: 20px;
    width: 230px;
  }

  li {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin-bottom: 10px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  input:focus::placeholder {
    color: transparent;
  }

  *::-webkit-scrollbar {
    display: none;
  }
  
  ::selection {
    background-color: ${themeGet('colors.brand.gold')};
    color: ${themeGet('colors.brand.white')};
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: normal;
    margin: 0;
  }

  button {
    outline: none;
    background: transparent;
    border: none;
    border-radius: 0px;
  }


  .embla__dots {
    display: flex;
    list-style: none;
    justify-content: center;
    color: ${themeGet('colors.brand.black')};
    padding: 20px 0;
    width: 100%;
  }

  .embla__dot {
    color: ${themeGet('colors.brand.black')};
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    outline: 0;
    border: 0;
    margin: 10px;
    height: 1.5px;
    /* width: 30px;
    height: 30px;
    margin-right: 7.5px;
    margin-left: 7.5px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: .5;
    font-family: ${themeGet('fonts.mono')};
    font-size: 20px;
    font-weight: medium;
  }

  .embla__dot.is-selected {
    opacity: 1;
  }

   .form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    /* margin-top: 10px; */
    /* height: 25px; */

    & p {
      color: black;
    }

    & input {
      border-radius: 0px;
      background: transparent;
      /* padding: 7px 14px; */
      font-size: 16px;
      border: none;
      width: 100%;
      height: 100%;
      margin: 0px;
      font-size: 11px;
      font-family: ${themeGet('fonts.garage')};
      letter-spacing: 0.1em;

      &::placeholder {
        color: grey;
        letter-spacing: 0.1em;
        font-size: 11px;
      }
    }

    & input:focus {
      border-radius: 0px;
      background: transparent;
      /* padding: 7px 14px; */
      border: none;
      width: 100%;
      height: 100%;
      color: grey;
        letter-spacing: 0.1em;
        font-size: 11px;

      &::placeholder {
        color: black;
      }
    }

    & input:link:visited:hover:active:valid {
        border-radius: 0px;
        background: transparent;
        /* padding: 7px 14px; */
        font-size: 16px;
        border: none;
        width: 100%;

        &::placeholder {
          color: black;
        }
    }

    & .submitbutton {
      border-bottom: none !important;
      border-right: none !important;
      border-top: none !important;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 0px;
      border: 0;
      background: transparent;
      color: black;
      font-size: 11px;
      font-family: ${themeGet('fonts.garage')};
      letter-spacing: 0.1em;
      height: 100%;
    }
}
`

