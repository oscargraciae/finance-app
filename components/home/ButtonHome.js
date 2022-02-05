import React from 'react'
import NextLink from 'next/link'
import { Flex, Link } from '@chakra-ui/react'

export const ButtonHome = ({ href, text }) => {
  return (
    <Flex borderRadius='md' mt={2} bg='green.400' color='white'>
      <NextLink href={href} passHref>
        <Link display='flex' flex={1} flexDirection='row' alignItems='center' fontWeight='bold' px={4} py={3} >
        {text}
        </Link>
      </NextLink>
    </Flex>
  )
}
