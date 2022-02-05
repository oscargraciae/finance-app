import React from 'react'
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import { useAppContext } from '../../context/AppContext'
import { BiInfoCircle } from 'react-icons/bi'

export const StatCard = ({ title, icon, value, info }) => {
  const { currency } = useAppContext()
  return (
    <Box bg='#C6F6D5' p={6} w={{ base: '100%', md: '340px' }} borderRadius='lg' mb={4}>
      <Flex flex={1} justifyContent='space-between'>
        <Text fontWeight='700' fontSize='3xl'>{value}</Text>
        {icon}
      </Flex>
      <Flex alignItems='center'>
        <Text mr={1}>{title}</Text>
        {info && (
          <Tooltip hasArrow label={info || ''} bg='white' color='#333333' p={3} borderWidth={1} borderColor='gray.200' boxShadow='lg'>
            <span>
              <BiInfoCircle size={16} />
            </span>
          </Tooltip>
        )}
      </Flex>
    </Box>
  )
}
