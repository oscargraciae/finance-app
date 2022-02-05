import React from 'react'
import { Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import { BiCaretDown } from 'react-icons/bi'
import NextLink from 'next/link'
import NextImage from 'next/image'

import Logo from '../../public/logo1.png'

import { useAppContext } from '../../context/AppContext'

// d7effe
// EBF8FF
export const Layout = ({ children }) => {
  const { currency, setCurrency } = useAppContext()
  return (
    <Flex bg='#FFFFFF' direction='column'>

      <Flex boxShadow='md' bg='white' align='center' px={6} w='100%' position='fixed' zIndex={999} justifyContent='center'>
        <Flex w='100%' alignItems='center' justifyContent='space-between' py={2}>
          <NextLink href='/' passHref>
            <Link alignItems='center' display='flex'>
              <NextImage src={Logo} width='254' height='42' />
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

      <Flex justifyContent='center'>
        {children}
        {/* <Flex justifyContent='center' minHeight='100vh'>
          {children}
        </Flex> */}
        {/* <SideBar /> */}
      </Flex>
    </Flex>
  )
}
