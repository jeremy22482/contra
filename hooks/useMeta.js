import { useContext } from 'react'
import { MetaContext } from '../context/Meta'

export const useMeta = () => {
  const context = useContext(MetaContext)

  if (context === undefined) {
    throw new Error('useMeta must be used within a MetaProvider')
  }

  return context
}
