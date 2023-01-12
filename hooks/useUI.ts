import { useContext } from 'react'
import { UIContext, UIContextProps } from '../context/UI'

export const useUI = (): Partial<UIContextProps> => {
  const context = useContext(UIContext)

  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider')
  }

  return context
}
