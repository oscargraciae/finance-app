import React from 'react'
import { Box, Button, Flex, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'

import { HeadMeta } from '../../components/common/HeadMeta'

import { LayoutCalculator } from '../../components/general/LayoutCalculator'
import { useAppContext } from '../../context/AppContext'
import { BsPercent } from 'react-icons/bs'
import { StatCard } from '../../components/common/StatCard'
import { BiDollarCircle } from 'react-icons/bi'
import { usePresentValue } from '../../hooks/usePresentValue'
import { moneyThousand } from '../../utils/format-number'

export default function AnnualGrowthRate () {
  const { currency } = useAppContext()

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    setFutureAmount,
    futureAmount,
    setRate,
    rate,
    presentValue
  } = usePresentValue()

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps({ readOnly: false })

  return (
    <LayoutCalculator>
      <HeadMeta title='Calculadora de valor presente' description='Calcula el valor presente a partir del valor futuro y la tasa de descuento.' />

      <Heading as='h1' fontSize="4xl" fontWeight="700" lineHeight="100%" pb='12px'>Calculadora de valor presente</Heading>
      {/* <Text color='gray.600' fontSize='lg'>Calcula la tasa de rendimiento anual que se requiere para que una inversión crezca desde su saldo inicial hasta su saldo final dentro de un período particular.</Text> */}

      <Flex w="100%" justifyContent="space-between" direction={{ base: 'column', md: 'row' }} mt={6}>
        <Box w={{ base: '100%', md: '40%' }} mb={{ base: 4, md: 0 }}>
          <Text fontSize="xs" fontWeight="bold">Valor futuro</Text>
          <InputGroup size='lg'>
            <InputLeftElement><Text>{currency}</Text></InputLeftElement>
            <Input
              autoFocus
              autoComplete='off'
              bg='white'
              borderRadius='lg'
              name="futureAmount"
              value={futureAmount}
              onChange={(e) => setFutureAmount(e.target.value)}
            />
          </InputGroup>
        </Box>
        <Box w={{ base: '100%', md: '40%' }} mb={{ base: 4, md: 0 }}>
          <Text fontSize="xs" fontWeight="bold">Tasa de descuento</Text>
          <Flex>
            <InputGroup size="lg">
              <Input
                bg='white'
                autoComplete='off'
                borderRadius='lg'
                name="rate"
                type='number'
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
              <InputRightElement><BsPercent color='gray.300' /></InputRightElement>
            </InputGroup>
          </Flex>
        </Box>

        <Box w={{ base: '100%', md: '15%' }}>
          <Text fontSize="xs" fontWeight="bold">Años</Text>
          <HStack maxW="100%" spacing={0} borderWidth={1} bg='white' borderRadius='lg' borderColor='gray.100' p='3px'>
            <Button {...dec} variant="ghost" mx={0} fontWeight="bold">-</Button>
            <Input
              size='lg'
              autoComplete='off'
              borderRadius='lg'
              name="numUsers"
              {...input}
              variant="unstyled"
              textAlign="center"
            />
            <Button {...inc} variant="ghost" mx={0} fontWeight="bold">+</Button>
          </HStack>
        </Box>
      </Flex>

      <Flex justifyContent='space-between' my={6} direction={{ base: 'column', md: 'row' }}>
        <StatCard title='Valor presente' info='' icon={<BiDollarCircle size={42} />} value={`${moneyThousand(presentValue?.toFixed(2)) || 0}`} />
      </Flex>

    </LayoutCalculator>
  )
}
