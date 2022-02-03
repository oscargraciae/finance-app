import { Flex } from '@chakra-ui/react'
import React from 'react'
import { SideBar } from './Sidebar'

export const LayoutCalculator = ({ children }) => {
  return (
    <Flex justifyContent='center' minHeight='100vh'>
      {children}
      <SideBar />
    </Flex>
  )
}
