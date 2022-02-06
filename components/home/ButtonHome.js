import React from 'react'
import NextLink from 'next/link'
import { Flex, Link } from '@chakra-ui/react'

export const ButtonHome = ({ href, text }) => {
  return (
    <Flex borderRadius='md' mt={6} mx={{ base: 0, md: 4 }} bg='green.300' color='white' _hover={{ bg: 'green.600' }} alignItems='center' justifyContent='center' alignSelf='center' w={{ base: '90%', md: 'auto' }}>
      <NextLink href={href} passHref>
        <Link display='flex' size='lg' flex={1} flexDirection='row' alignItems='center' fontWeight='bold' px={6} py={3} >
        {text}
        </Link>
      </NextLink>
    </Flex>
  )
}
