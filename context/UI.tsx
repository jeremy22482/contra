import PropTypes from 'prop-types'
import {
  createContext,
  ReactNode,
  useCallback,
  useReducer
} from 'react'

interface UIState {
  navOpen: boolean
  menuOpen: boolean
}

export interface UIContextProps extends UIState {
  resetUI: () => void
  openNav: () => void
  openMenu: () => void
  closeNav: () => void
  toggleNav: () => void
  closeMenu: () => void
  toggleMenu: () => void
}

enum UIAction {
  resetUI = 'RESET_UI',
  setNav = 'SET_NAV',
  setModal = 'SET_MODAL',
  setMenu = 'SET_MENU',
}

const initialState: UIState = {
  navOpen: false,
  menuOpen: false
}

function reducer(
  state: UIState,
  action: { type: UIAction, payload?: boolean },
): UIState {
  switch (action.type) {
    case UIAction.resetUI:
      return initialState

    case UIAction.setNav:
      return {
        ...state,
        navOpen: action.payload,
      }

    case UIAction.setMenu:
      return {
        ...state,
        menuOpen: action.payload,
      }

    default:
      return { ...state }
  }
}

export const UIContext = createContext<Partial<UIContextProps>>({ ...initialState })

export function UIProvider({ children }: { children: ReactNode }): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)

  const resetUI = useCallback(() => {
    dispatch({
      type: UIAction.resetUI,
    })
  }, [])

  const openNav = useCallback(() => {
    dispatch({
      type: UIAction.setNav,
      payload: true,
    })
  }, [])

  const closeNav = useCallback(() => {
    dispatch({
      type: UIAction.setNav,
      payload: false,
    })
  }, [])

  const toggleNav = useCallback(() => {
    dispatch({
      type: UIAction.setNav,
      payload: !state.navOpen,
    })
  }, [state.navOpen])


  const openMenu = useCallback(() => {
    dispatch({
      type: UIAction.setMenu,
      payload: true,
    })
  }, [])


  const closeMenu = useCallback(() => {
    dispatch({
      type: UIAction.setMenu,
      payload: false,
    })
  }, [])

  const toggleMenu = useCallback(() => {
    dispatch({
      type: UIAction.setMenu,
      payload: !state.menuOpen,
    })
  }, [state.menuOpen])


  return (
    <UIContext.Provider
      value={{
        ...state,
        resetUI,
        openNav,
        closeNav,
        toggleNav,
        openMenu,
        closeMenu,
        toggleMenu
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

UIProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
