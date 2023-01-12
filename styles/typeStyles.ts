import { Theme } from './theme'
import { pxToRem } from './utils'

type BaseSizes =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | '10xl'
  | '11xl'
  | '12xl';

interface TypeStyleProperties {
  fontFamily?: keyof Theme['fonts']
  fontSize?: number | string
  lineHeight?: number | string
  letterSpacing?: number | string
  fontWeight?: number | string
  textTransform?: 'uppercase' | 'lowercase'
}

interface TypeStyle extends TypeStyleProperties {
  strong?: TypeStyleProperties
  mono?: TypeStyleProperties
}

export type TypeStyles = {
  [key in BaseSizes]: TypeStyle;
};

const base = {
  '2xs': {
    fontSize: pxToRem(10),
    lineHeight: 1.2,
  },

  xs: {
    fontSize: pxToRem(12),
    lineHeight: 1.3,
  },

  sm: {
    fontSize: pxToRem(15),
    lineHeight: 1.35,
  },

  base: {
    fontSize: pxToRem(16),
    lineHeight: 1.4,
    letterSpacing: '0.01em',
  },

  md: {
    fontSize: pxToRem(18),
    lineHeight: 1.35,
    letterSpacing: '-0.005em',
  },

  lg: {
    fontSize: pxToRem(20),
    lineHeight: 1.35,
    letterSpacing: '-0.002em',
  },

  xl: {
    fontSize: pxToRem(24),
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
  },

  '2xl': {
    fontSize: pxToRem(26),
    lineHeight: 1.1,
    letterSpacing: '-0.003em',
  },

  '3xl': {
    fontSize: pxToRem(28),
    lineHeight: 1.08,
    letterSpacing: '-0.006em',
  },

  '4xl': {
    fontSize: pxToRem(32),
    lineHeight: 1.19,
    letterSpacing: '-0.004em',
    fontWeight: 'medium',
  },

  '5xl': {
    fontSize: pxToRem(36),
    lineHeight: 1.02,
    letterSpacing: '-0.007em',
  },
  '6xl': {},
  '7xl': {},
  '8xl': {},
  '9xl': {},
  '10xl': {},
  '11xl': {},
  '12xl': {},
}

const strong = {
  '2xs': {
    ...base['2xs'],
    fontWeight: 'medium',
  },

  xs: {
    ...base.xs,
    fontWeight: 'medium',
  },

  sm: {
    ...base.sm,
    letterSpacing: '0.008em',
    fontWeight: 'medium',
  },

  base: {
    ...base.base,
    letterSpacing: '-0.005em',
    fontWeight: 'medium',
  },

  md: {
    ...base.md,
    letterSpacing: 0,
    fontWeight: 'medium',
  },

  lg: {
    ...base.lg,
    letterSpacing: '0.01em',
    fontWeight: 'medium',
  },

  xl: {
    ...base.xl,
    letterSpacing: 0,
    fontWeight: 'medium',
  },

  '2xl': {
    ...base['2xl'],
    fontWeight: 'medium',
  },

  '3xl': {
    ...base['2xl'],
    letterSpacing: '-0.003em',
    fontWeight: 'medium',
  },

  '4xl': {
    ...base['3xl'],
    lineHeight: 1.15,
    letterSpacing: '0.005em',
    fontWeight: 'medium',
  },

  '5xl': {
    ...base['4xl'],
    lineHeight: 1.12,
    letterSpacing: '-0.003em',
    fontWeight: 'medium',
  },

  '6xl': {
    fontSize: pxToRem(38),
    lineHeight: 1.16,
    letterSpacing: '-0.004em',
    fontWeight: 'medium',
  },

  '7xl': {
    fontSize: pxToRem(40),
    lineHeight: 1.04,
    letterSpacing: '-0.005em',
    fontWeight: 'medium',
  },

  '8xl': {
    fontSize: pxToRem(48),
    lineHeight: 1.04,
    letterSpacing: '-0.003em',
    fontWeight: 'medium',
  },

  '9xl': {
    fontSize: pxToRem(50),
    lineHeight: 1.03,
    letterSpacing: '-0.01em',
    fontWeight: 'medium',
  },

  '10xl': {
    fontSize: pxToRem(56),
    lineHeight: 1,
    letterSpacing: '-0.005em',
    fontWeight: 'medium',
  },

  '11xl': {
    fontSize: pxToRem(66),
    lineHeight: 0.96,
    letterSpacing: '-0.005em',
    fontWeight: 'medium',
  },

  '12xl': {
    fontSize: pxToRem(80),
    lineHeight: 1.12,
    letterSpacing: '-0.012em',
    fontWeight: 'medium',
  },
}

const mono = {
  xs: {
    fontFamily: 'mono',
    fontSize: pxToRem(12),
    lineHeight: 1,
    letterSpacing: '0.01em',
    textTransform: 'uppercase',
  },

  sm: {
    fontFamily: 'mono',
    fontSize: pxToRem(14),
    lineHeight: 1,
    letterSpacing: '0.015em',
    textTransform: 'uppercase',
  },

  base: {
    fontFamily: 'mono',
    fontSize: pxToRem(16),
    lineHeight: 1,
    letterSpacing: '0.005em',
    textTransform: 'uppercase',
  },

  '3xl': {
    fontFamily: 'mono',
    fontSize: pxToRem(28),
    lineHeight: 1,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
  },
}

function createTypeStyle(): TypeStyles {
  const baseObject = { ...base }

  // for (const key in strong) {
  //   const styles = strong[key]
  //   baseObject[key].strong = styles
  // }

  // for (const key in mono) {
  //   const styles = mono[key]
  //   baseObject[key].mono = styles
  // }

  return baseObject
}

/** Variants for Text component's 'typeStyle' prop */
export const typeStyles = createTypeStyle()
