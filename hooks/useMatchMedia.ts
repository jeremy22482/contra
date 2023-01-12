import { useEffect, useState } from 'react'

export function useMatchMedia(mediaQuery) {
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    function onChange(event) {
      setMatches(event.matches)
    }

    const mediaQueryList = window.matchMedia(mediaQuery)

    setMatches(mediaQueryList.matches)
    
    if (mediaQueryList?.addEventListener) {
      // mediaQuery.addEventListener('change', handler)
      mediaQueryList.addEventListener('change', onChange)
    } else {
      mediaQueryList.addListener(onChange)
    }
    return () => {
      
      if (mediaQueryList?.addEventListener) {
        // mediaQuery.addEventListener('change', handler)
        mediaQueryList.removeEventListener('change', onChange)
      } else {
        mediaQueryList.addListener(onChange)
      }
    }
  }, [mediaQuery])

  return matches
}
