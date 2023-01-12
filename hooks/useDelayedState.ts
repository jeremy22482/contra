import { useState, useRef } from 'react'

type useDelayedStateReturns = [any, (value: any) => void]

/**
 * `useDelayedState` wraps React's `useState` hook and uses `setTimeout` to prune excessive
 * state changes. The purpose of this hook is to reduce the number of re-renders caused by
 * state changes when updating the state value within a frequently called callback method
 * (such as a resize handler).
 * @param defaultValue default value for useState
 * @param delay time between triggering a state change and the value being updated
 * @returns array containing the current state value, and a state setter method: [value, setValue]
 */
export const useDelayedState = (defaultValue: any, delay = 300): useDelayedStateReturns => {
  const timeoutRef = useRef<number | null>(null)
  const [value, _setValue] = useState<any>(defaultValue)

  const setValue = (value: any): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      _setValue(value)
      timeoutRef.current = null
    }, delay)
  }

  return [value, setValue]
}
