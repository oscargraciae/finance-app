import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const AppProvider= ({ children }) => {
  const [currency, setCurr] = useState('$')

  const setCurrency = (curr) => {
    setCurr(curr)
    // localStorage.setItem('currency', curr)
  }

  const value = { currency, setCurrency }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext)
}
