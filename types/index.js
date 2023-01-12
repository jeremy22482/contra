import { arrayOf, element, oneOfType, shape, string } from 'prop-types'

export const ReactChild = element

export const ReactChildren = oneOfType([
  arrayOf(ReactChild),
  ReactChild,
])

export const imageProps = shape({
  src: string,
  alt: string,
})
