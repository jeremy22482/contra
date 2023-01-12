// @ts-nocheck
import React, { FC, useMemo } from 'react'

// !TODO why is it not closing all ?
export interface State {
  closeAll: boolean
  displaySidebar: boolean
  displayMenu: boolean
  displayDropdown: boolean
  displayModal: boolean
  displayToast: boolean
  modalView: string
  toastText: string
  userAvatar: string
}

const initialState = {
  closeAll: false,
  displaySidebar: false,
  displayMenu: false,
  displayDropdown: false,
  displayModal: false,
  modalView: 'LOGIN_VIEW',
  displayToast: false,
  toastText: '',
  userAvatar: '',
}

type Action =
  | {
    type: 'CLOSE_ALL'
  }
  | {
    type: 'OPEN_SIDEBAR'
  }
  | {
    type: 'CLOSE_SIDEBAR'
  }
  | {
    type: 'OPEN_MENU'
  }
  | {
    type: 'CLOSE_MENU'
  }
  | {
    type: 'OPEN_TOAST'
  }
  | {
    type: 'CLOSE_TOAST'
  }
  | {
    type: 'SET_TOAST_TEXT'
    text: ToastText
  }
  | {
    type: 'OPEN_DROPDOWN'
  }
  | {
    type: 'CLOSE_DROPDOWN'
  }
  | {
    type: 'OPEN_MODAL'
  }
  | {
    type: 'CLOSE_MODAL'
  }
  | {
    type: 'SET_MODAL_VIEW'
    view: MODAL_VIEWS
  }
  | {
    type: 'SET_USER_AVATAR'
    value: string
  }

type MODAL_VIEWS =
  | 'SIGNUP_VIEW'
  | 'LOGIN_VIEW'
  | 'FORGOT_VIEW'
  | 'NEW_SHIPPING_ADDRESS'
  | 'NEW_PAYMENT_METHOD'
type ToastText = string

export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'CLOSE_ALL': {
      return {
        ...state,
        displayMenu: false,
        displaySidebar: false,
      }
    }
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
        displayMenu: false,
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
      }
    }
    case 'OPEN_MENU': {
      return {
        ...state,
        displayMenu: true,
        displaySidebar: false,
      }
    }
    case 'CLOSE_MENU': {
      return {
        ...state,
        displayMenu: false,
      }
    }
    case 'OPEN_DROPDOWN': {
      return {
        ...state,
        displayDropdown: true,
      }
    }
    case 'CLOSE_DROPDOWN': {
      return {
        ...state,
        displayDropdown: false,
      }
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      }
    }
    case 'OPEN_TOAST': {
      return {
        ...state,
        displayToast: true,
      }
    }
    case 'CLOSE_TOAST': {
      return {
        ...state,
        displayToast: false,
      }
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      }
    }
    case 'SET_TOAST_TEXT': {
      return {
        ...state,
        toastText: action.text,
      }
    }
    case 'SET_USER_AVATAR': {
      return {
        ...state,
        userAvatar: action.value,
      }
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState)

  const closeAll = () => dispatch({ type: 'CLOSE_ALL' })
  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' })
  const toggleSidebar = () =>
    state.displaySidebar
      ? dispatch({ type: 'CLOSE_SIDEBAR' })
      : dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebarIfPresent = () =>
    state.displaySidebar && dispatch({ type: 'CLOSE_SIDEBAR' })

  const toggleMenu = () =>
    state.displayMenu
      ? dispatch({ type: 'CLOSE_MENU' })
      : dispatch({ type: 'OPEN_MENU' })
  const closeMenuIfPresent = () =>
    state.displayMenu && dispatch({ type: 'CLOSE_MENU' })


  const openDropdown = () => dispatch({ type: 'OPEN_DROPDOWN' })
  const closeDropdown = () => dispatch({ type: 'CLOSE_DROPDOWN' })

  const openModal = () => dispatch({ type: 'OPEN_MODAL' })
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' })

  const openToast = () => dispatch({ type: 'OPEN_TOAST' })
  const closeToast = () => dispatch({ type: 'CLOSE_TOAST' })

  const setUserAvatar = (value: string) =>
    dispatch({ type: 'SET_USER_AVATAR', value })

  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: 'SET_MODAL_VIEW', view })

  const value = useMemo(
    () => ({
      ...state,
      closeAll,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      toggleMenu,
      closeMenuIfPresent,
      openDropdown,
      closeDropdown,
      openModal,
      closeModal,
      setModalView,
      openToast,
      closeToast,
      setUserAvatar,

    }),
    [state]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>
    {children}
  </UIProvider>
)
