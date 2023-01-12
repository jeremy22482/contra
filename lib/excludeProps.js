import {
  createShouldForwardProp,
  props as styledSystemProps,
} from '@styled-system/should-forward-prop'

// Internal prop validator
function validateProps(...props) {
  return createShouldForwardProp([...props])
}

/**
 * Return object with styled-components config `shouldForwardProp`  property to
 * exclude certain props from being forwarded to the HTML element.
 *
 * ```js
 * const withoutProps = excludeProps('isOpen', 'isMobile')
 *
 * const StyledComponent = style.div.withConfig(withoutProps)`
 *   background: grey;
 * `
 * ```
 */
export function excludeProps(...props) {
  return { shouldForwardProp: validateProps(...props) }
}

/**
 * Used for components that use styled-system props
 */
export const excludeStyledSystemProps = {
  shouldForwardProp: createShouldForwardProp([...styledSystemProps]),
}
