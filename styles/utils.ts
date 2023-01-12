import { baseFontSize } from './constants'
import type { CSSObject } from 'styled-components'

/** Converts pixel value to relative unit. */
function pxToRelativeUnit(unit: string, base: number): (value: number) => string {
  return (x) => `${x / base}${unit}`
}

// Relative unit functions
export const pxToEm = pxToRelativeUnit('em', baseFontSize)
export const pxToRem = pxToRelativeUnit('rem', baseFontSize)
export const mapToEm = (array: number[]): string[] => array.map(pxToEm)
export const mapToRem = (array: number[]): string[] => array.map(pxToRem)

/**
 * Util for applying hover effects to style objects.
 */
export function hoverState(cssObject: CSSObject): CSSObject {
  return {
    '@media (hover: hover)': {
      '&:hover': {
        ...cssObject,
      },
    },
  }
}

/** Generates an array with key aliases, for use with styled-system responsive props. */
export function responsiveAlias<
  A extends Array<string | number>,
  R = Record<string, string | number>,
>(propertiesObject: R): A & R {
  const aliasedArray = [] as unknown as A & R

  for (const [key, value] of Object.entries(propertiesObject)) {
    aliasedArray.push(value)
    aliasedArray[<keyof R> key] = value
  }

  return aliasedArray
}
