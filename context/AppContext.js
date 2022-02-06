import { useDisclosure } from '@chakra-ui/react'
import React, { createContext, useContext, useRef, useState } from 'react'

const AppContext = createContext(null)

export const AppProvider= ({ children }) => {
  const [currency, setCurr] = useState('$')
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = useRef()

  const setCurrency = (curr) => {
    setCurr(curr)
    // localStorage.setItem('currency', curr)
  }

  const value = { currency, setCurrency, isOpen, onClose, onOpen, btnRef }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext)
}
