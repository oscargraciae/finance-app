import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Layout = ({ children }) => {
  return (
    <Flex flex={1} h='100vh' direction='column' bg='#d7effe'>
      <Flex h='50px' boxShadow='md' align='center' px={6} bg='white'>
        <Text fontWeight='bold'>Fianance header</Text>
      </Flex>
      <Flex flex={1}>
        <Flex w='100%' flex={1} justifyContent='center'>
          {children}
        </Flex>
        <Box bg='purple.200' w='300px'>
          <Text>Publicidad</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
