import { Box, Button, Flex, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { SideBar } from './Sidebar'
import { BiCaretDown } from 'react-icons/bi'
import { AppProvider, useAppContext } from '../../context/AppContext'

export const Layout = ({ children }) => {
  const { currency, setCurrency } = useAppContext()
  return (
    <Flex bg='#d7effe' direction='column'>
      <Flex h='40px' boxShadow='md' align='center' px={6} bg='white' w='100%'>
        <Text fontWeight='bold'>Fianance header</Text>
        <Spacer />
        <Menu>
          <MenuButton as={Button} variant='outline' color='#333' rightIcon={<BiCaretDown />} size='sm'>
            Divisa {currency}
          </MenuButton>
          <MenuList>
            <MenuItem color='primary.500' onClick={() => setCurrency('$')}>$</MenuItem>
            <MenuItem color='primary.500' onClick={() => setCurrency('€')}>€</MenuItem>
            <MenuItem color='primary.500' onClick={() => setCurrency('£')}>£</MenuItem>
            <MenuItem color='primary.500' onClick={() => setCurrency('₹')}>₹</MenuItem>
            <MenuItem color='primary.500' onClick={() => setCurrency('¥')}>¥</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
        <Flex>
          <Flex w='100%' justifyContent='center' flexGrow='1' minHeight='100vh'>
            {children}
          </Flex>
          <SideBar />
        </Flex>
    </Flex>
  )
}
