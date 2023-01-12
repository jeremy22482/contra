import { any, element } from 'prop-types'
import { createContext } from 'react'

export const MetaContext = createContext()

export function MetaProvider({ meta, children }) {
  return <MetaContext.Provider value={meta}>{children}</MetaContext.Provider>
}

MetaProvider.propTypes = {
  meta: any,
  children: element.isRequired,
}
