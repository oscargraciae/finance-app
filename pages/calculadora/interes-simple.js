import React, { useState } from 'react'
import { BsPercent, BsPiggyBank } from 'react-icons/bs'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text
} from '@chakra-ui/react'
import { BiBarChart, BiDollarCircle, BiLineChart, BiTable } from 'react-icons/bi'

import { currencyToNumber, moneyThousand } from '../../utils/format-number'

import { StatCard } from '../../components/common/StatCard'
// import { TableResults } from '../../components/compound/TableResults'
import { useAppContext } from '../../context/AppContext'
import { HeadMeta } from '../../components/common/HeadMeta'
import { LayoutCalculator } from '../../components/general/LayoutCalculator'
import { useSimpleInterest } from '../../hooks/useISimpleInterest'
import { InterestSimpleChartBar } from '../../components/calculators/simple/InterestSimpleChart'
import { DescriptionSimpleInteres } from '../../components/calculators/simple/DescriptionSimpleInteres'
import { InterestSimpleTableResults } from '../../components/calculators/simple/InterestSimpleTableResults'

export default function Home () {
  const [option, setOption] = useState(1)

  const {
    datasets,
    datasetsInitialAmmount,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    labels,
    setInitialAmount,
    initialAmount,
    setInterest,
    interest,
    finalBalance,
    finalContribution,
    finalInteresEarned
  } = useSimpleInterest()

  const { currency } = useAppContext()

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps({ readOnly: false })

  return (
    <LayoutCalculator>
      <HeadMeta title='Calculadora de interés simple' description='Calcula el interés simple generado anualmente sobre el capital inicial' />

        <Heading as='h1' fontSize="4xl" fontWeight="700" lineHeight="100%" pb='12px'>Calculadora de interés simple</Heading>
        <Text color='gray.600' fontSize='lg'>Calcula el interés simple generado anualmente sobre el capital inicial</Text>

        <Flex mt={6} direction="column">
          <Flex w="100%" justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
            <Box w={{ base: '100%', md: '40%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">Capital inicial</Text>
              <InputGroup size='lg'>
                <InputLeftElement><Text>{currency}</Text></InputLeftElement>
                <Input
                  autoFocus
                  autoComplete='off'
                  bg='white'
                  borderRadius='lg'
                  name="initialAmount"
                  value={initialAmount}
                  // onBlur={(e) => moneyThousand(e.target.value)}
                  onChange={(e) => setInitialAmount(currencyToNumber(e.target.value))}
                />
              </InputGroup>
            </Box>
            <Box w={{ base: '100%', md: '40%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">
                Tasa de interés anual{' '}
              </Text>
              <Flex>
                <InputGroup size="lg">
                  <Input
                    bg='white'
                    autoComplete='off'
                    borderRadius='lg'
                    name="interest"
                    type='number'
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  />
                  <InputRightElement><BsPercent color='gray.300' /></InputRightElement>
                </InputGroup>
              </Flex>
            </Box>
            {/* <Box w={{ base: '100%', md: '40%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">Pago de intereses{' '}</Text>
              <Flex>
                <Select variant='outline' bg='white' borderRadius='lg'  size='lg'value={interestPeriod} onChange={(e) => setInterestPeriod(e.target.value)}>
                  <option value='1'>Anual</option>s
                  <option value='12'>Mensual</option>
                  <option value='24'>Quincenal</option>
                  <option value='52'>Semanal</option>
                  <option value='365'>Diario</option>
                </Select>
              </Flex>
            </Box> */}
            <Box w={{ base: '100%', md: '15%' }}>
              <Text fontSize="xs" fontWeight="bold">
                Años a invertir{' '}
              </Text>
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
            <StatCard title='Aportación total' info='' icon={<BsPiggyBank size={42} />} value={`${currency}${moneyThousand(finalContribution)}`} />
            <StatCard title='Interés ganado' icon={<BiLineChart size={42} />} value={`${currency}${moneyThousand(finalInteresEarned)}`} />
            <StatCard title='Balance final' icon={<BiDollarCircle size={42} />} value={`${currency}${moneyThousand(finalBalance)}`} />
          </Flex>

          <Flex h="440px" w="100%" pr={4} bg='white' px={6} py={4} borderRadius='lg'  direction='column'>
            <Flex justifyContent='flex-end'>
              <Button size='sm' colorScheme='secondary' variant='ghost' leftIcon={<BiBarChart />} isActive={option === 1} onClick={() => setOption(1)} mr={1}>Gráfica</Button>
              <Button size='sm' colorScheme='secondary' variant='ghost' leftIcon={<BiTable />} isActive={option === 2} onClick={() => setOption(2)}>Tabla de resultados</Button>
            </Flex>

            { option === 1
              ? <InterestSimpleChartBar labels={labels} datasets={datasets} datasetsInitialAmmount={datasetsInitialAmmount} />
              : <InterestSimpleTableResults datasets={datasets} datasetsInitialAmmount={datasetsInitialAmmount} />
            }
          </Flex>
        </Flex>

        {/* El interés simple es el que se genera al final de cada periodo y por consiguiente el capital prestado o invertido no varía y por la misma razón la cantidad recibida por interés siempre va a ser la misma, es decir, no hay capitalización de los intereses. */}
        <DescriptionSimpleInteres />

    </LayoutCalculator>
  )
}
