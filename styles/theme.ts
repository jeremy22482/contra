/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */
import { pxToEm, mapToRem, responsiveAlias } from './utils'


const breakpoints = {
  sm: pxToEm(640),
  md: pxToEm(990),
  newmd: pxToEm(1200),
  lg: pxToEm(1280),
}

/**
 * This is the default theme supplied to ThemeProvider.
 *
 * - To access a property within a component, use the `useTheme` hook from
 *   `styled-components`.
 * - To access a property within a styled component, use the `themeGet` utility
 *   from `@style-system/theme-get`.
 */
const defaultTheme = {
  /** Breakpoints scale is used to create mobile-first responsive media queries. */
  breakpoints: responsiveAlias(breakpoints),

  /**
   * A mediaQueries scale derived from the breakpoints scale, for convenience and
   * for use within styled-components or `matchMedia`.
   */
  mediaQueries: {
    sm: '(min-width:' + breakpoints.sm + ')',
    md: '(min-width:' + breakpoints.md + ')',
    newmd: '(min-width:' + breakpoints.newmd + ')',
    lg: '(min-width:' + breakpoints.lg + ')',
  },

  /** Grid settings for @stnew/layout */
  grid: {
    columns: 12,
    columnGap: mapToRem([20]),
    maxWidth: 1800,
    margins: mapToRem([20]),
  },

  /** Sizes is mapped to the same column width percentages as grid */
  sizes: Array.from(
    { length: 12 + 1 },
    (_, index) => `${(index / 12) * 100}%`,
  ),

  /** Colors dictionary, for styled-system's `color` and `bg` props. */
  colors: {
    brand: {
      white: '#F3F3F3',
      black: '#383838',
      teal: '#53AFAC',
      gold: '#A5A64B',
      darkOrange: '#C26231',
      pink: '#ee6a9a',
      lightGreen: '#8AB684',
      darkGreen: '#177C4D',
      blue: '#0001F0',
      purple: '#b21a8d',
    },
  },

  /** Scale prop is used by styled-system for margins and padding */
  space: responsiveAlias({
    none: 0,
    columnGap: 50,
    section: {
      xxs: 20,
      xs: 40,
      sm: 80,
      md: 120,
      lg: 140,
      xl: 160,
      xxl: 200,
    },
  }),

  /** Z-indices dictionary for component heirarchy */
  zIndices: {
    header: 10,
    modalOverlay: 20,
    modalContainer: 30,
  },

  /** Radii dictionary for CSS border-radius prop */
  radii: {
    default: '22px',
    small: '16px',
    xsmall: '8px',
    rounded: '9999px',
  },

  /**
   * Font families. `@font-face` definitions are in `public/fonts/fonts.css`, and
   * priority loaded in `pages/_document` to avoid FOUC.
   */
  fonts: {
    garage: '\'Garaje\', sans-serif',
    garageBlack: '\'Garaje Black\', sans-serif',
    mono: '\'GT America Mono\', sans-serif',
    dreaming: '\'Dreaming in the Moonlight\', sans'
  },

  /** Scale used for styled-system's fontSize prop */
  fontSizes: [], // Left empty to normalize prop values

  /** Common font weights dictionary */
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
}


export type Theme = typeof standardTheme
export const standardTheme = { ...defaultTheme }
