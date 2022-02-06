import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { SideBar } from './Sidebar'

export const LayoutCalculator = ({ children }) => {
  return (
    <Flex flex={1} height='100vh' direction={{ base: 'column', md: 'row' }}>
      <Flex direction='column' flex='1 1 0%' overflowY='auto'>
        <Box px={{ base: 2, md: 6, xl: 6 }} py={6} mx='auto' w='100%' maxW='1100px' pt='70px'>
          {children}
        </Box>
      </Flex>
      <SideBar />
    </Flex>
  )
}
