import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { BiDollarCircle } from 'react-icons/bi'
import { moneyThousand } from '../../utils/format-number'
import { useAppContext } from '../../context/AppContext'

export const StatCard = ({ title, icon, value }) => {
  const { currency } = useAppContext()
  return (
    <Box bg='white' p={6} w='350px' borderRadius='xl'>
      <Flex flex={1} justifyContent='space-between'>
        <Text fontWeight='700' fontSize='3xl'>{currency}{value}</Text>
        {icon}
      </Flex>
      <Flex alignItems='center'>
        {/* <Box w='12px' h='12px' bg='#2A4365' mr={1} borderRadius={3} /> */}
        <Text>{title}</Text>
      </Flex>
    </Box>
  )
}
