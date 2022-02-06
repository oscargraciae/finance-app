import React from 'react'
import { Box, Button, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import { BiCaretDown } from 'react-icons/bi'
import NextLink from 'next/link'
import Image from 'next/image'

import Logo from '../../public/logo1.png'

import { useAppContext } from '../../context/AppContext'
import { BsList, BsMenuApp } from 'react-icons/bs'

// d7effe
// EBF8FF
export const Layout = ({ children }) => {
  const { currency, setCurrency, onOpen } = useAppContext()
  return (
    <Flex direction='column' alignItems='center' h='100vh'>

      <Box boxShadow='md' bg='white' align='center' px={{ base: 0, md: 6 }} w='100%' zIndex={999} justifyContent='center' pos='fixed'>
        <Flex w='100%' alignItems='center' justifyContent='space-between' py={2}>
          <NextLink href='/' passHref>
            <Link alignItems='center' display='flex'>
              <Image alt='Controla tus finanzas y las de tu empresa' src={Logo} width={185} height={30} layout='fixed' />
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
          <IconButton display={{ base: 'flex', md: 'none' }} ml={3} colorScheme='gray' onClick={onOpen} icon={<BsList />} />
        </Flex>
      </Box>

      <Flex justifyContent='stretch' h='100%' alignItems='center' width='100%'>
        {children}
      </Flex>
    </Flex>
  )
}
