import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { SideBar } from './Sidebar'

export const LayoutCalculator = ({ children }) => {
  return (
    <Flex justifyContent='center' minHeight='100vh'>
      <Flex direction="column" px={8} py={8} maxW={{ base: '100%', md: '1100px' }}>
        {children}
      </Flex>
      <SideBar />
    </Flex>
  )
}
