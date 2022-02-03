import React, { useState } from 'react'
import { Box, Button, Flex, Link, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import { BiCaretDown } from 'react-icons/bi'
import NextLink from 'next/link'

import { SideBar } from './Sidebar'
import { AppProvider, useAppContext } from '../../context/AppContext'

// d7effe
export const Layout = ({ children }) => {
  const { currency, setCurrency } = useAppContext()
  return (
    <Flex bg='#EBF8FF' direction='column'>
      <Flex h='48px' boxShadow='md' bg='white' align='center' px={6} w='100%' position='fixed' zIndex={999} justifyContent='center'>
        <Flex maxW='1400px' w='100%' alignItems='center' justifyContent='space-between'>
          <NextLink href='/' passHref>
            <Link display='flex' flex={1} flexDirection='row' alignItems='center' fontWeight='500' px={3} py={3} _hover={{ textDecoration: 'none' }}>
              <Flex fontWeight='bold' alignItems='center' fontSize='lg' >
                <Text>Fianance</Text>
                <Text color='secondary.600' p={1} borderRadius='md'>Tool</Text>
              </Flex>
            </Link>
          </NextLink>
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
      </Flex>


      <Flex mt='40px' justifyContent='center'>
        {children}
        {/* <Flex justifyContent='center' minHeight='100vh'>
          {children}
        </Flex> */}
        {/* <SideBar /> */}
      </Flex>
    </Flex>
  )
}
