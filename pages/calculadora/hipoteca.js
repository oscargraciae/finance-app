import { Box, Button, Flex, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiDollarCircle, BiLineChart, BiBarChart, BiTable } from 'react-icons/bi'
import { BsPercent, BsPiggyBank, BsCalendar3 } from 'react-icons/bs'

import { HeadMeta } from '../../components/common/HeadMeta'
import { StatCard } from '../../components/common/StatCard'
import { LayoutCalculator } from '../../components/general/LayoutCalculator'
import { MortgageTableResults } from '../../components/calculators/mortgage/MortgageTableResults'
import { useAppContext } from '../../context/AppContext'
import { useMortgageCalculator } from '../../hooks/useMortgageCalculator'
import { moneyThousand } from '../../utils/format-number'
import { DescriptionMortgage } from '../../components/calculators/mortgage/DescriptionMortgage'
import { MortgageChart } from '../../components/calculators/mortgage/MortgageChart'

export default function MortgageCalculator () {
  const [option, setOption] = useState(1)

  const {
    datasetPrincipal,
    datasetInterest,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    labels,
    setInitialAmount,
    initialAmount,
    setInterest,
    interest,
    finalMonthlyPayment,
    finalInterestPayment,
    finalTotalPayment,
    tableResults
  } = useMortgageCalculator()

  const { currency } = useAppContext()

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps({ readOnly: false })

  return (
    <LayoutCalculator>
      <HeadMeta title='Calculadora de interés simple' description='La mensualidad de una hipoteca depende del capital prestado, la tasa interés y el plazo de amortización.' />

        <Heading as='h1' fontSize="4xl" fontWeight="700" lineHeight="100%" pb='12px'>Calculadora de hipoteca</Heading>
        <Text color='gray.600' fontSize='lg'>La mensualidad de una hipoteca depende del capital prestado, la tasa interés y el plazo de amortización. Con esta calculadora de hipotecas podrás ver fácilmente las cuotas y saber cuánto pagas de intereses.</Text>

        <Flex mt={6} direction="column">
          <Flex w="100%" justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
            <Box w={{ base: '100%', md: '40%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">Capital prestado</Text>
              <InputGroup size='lg'>
                <InputLeftElement><Text>{currency}</Text></InputLeftElement>
                <Input
                  autoFocus
                  autoComplete='off'
                  bg='white'
                  borderRadius='lg'
                  name="initialAmount"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(e.target.value)}
                />
              </InputGroup>
            </Box>
            <Box w={{ base: '100%', md: '40%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">Tasa de interés anual</Text>
              <Flex>
                <InputGroup size="lg">
                  <Input
                    autoComplete='off'
                    bg='white'
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

            <Box w={{ base: '100%', md: '15%' }}>
              <Text fontSize="xs" fontWeight="bold">Plazo en años</Text>
              <HStack maxW="100%" spacing={0} borderWidth={1} bg='white' borderRadius='lg' borderColor='gray.100' p='3px'>
                <Button {...dec} variant="ghost" mx={0} fontWeight="bold">-</Button>
                <Input
                  autoComplete='off'
                  size='lg'
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

          <Flex justifyContent='space-between' mt={6} mb={0} direction={{ base: 'column', md: 'row' }}>
            <StatCard title='Mensualidad' info='La cantidad que pagará por período durante el Plazo, este pago incluye una parte para el pago de capital y una parte para el pago de intereses.' icon={<BsCalendar3 size={42} />} value={`${currency}${moneyThousand(finalMonthlyPayment)}`} />
            <StatCard title='Intereses' info='Total de todos los intereses pagados durante el plazo, asumiendo que las condiciones de su préstamo (por ejemplo, tasa de interés, período de amortización, plazo, etc.) no cambiarán durante estos períodos. Este monto total de intereses también asume que no hay pagos anticipados de capital.' icon={<BiLineChart size={42} />} value={`${currency}${moneyThousand(finalInterestPayment)}`} />
            <StatCard title='Importe total' info='Total de todos los pagos realizados durante el plazo y el período de amortización respectivamente, asumiendo que las condiciones de su préstamo no cambiarán durante estos períodos.' icon={<BiDollarCircle size={42} />} value={`${currency}${moneyThousand(finalTotalPayment)}`} />
          </Flex>

          <Flex h="440px" w="100%" pr={4} bg='white' px={6} py={4} borderRadius='lg' direction='column'>
            <Flex justifyContent='flex-end'>
              <Button size='sm' colorScheme='secondary' variant='ghost' leftIcon={<BiBarChart />} isActive={option === 1} onClick={() => setOption(1)} mr={2}>Gráfica</Button>
              <Button size='sm' colorScheme='secondary' variant='ghost' leftIcon={<BiTable />}isActive={option === 2} onClick={() => setOption(2)}>Tabla de resultados</Button>
            </Flex>

            { option === 1
              ? <MortgageChart labels={labels} datasetPrincipal={datasetPrincipal} datasetInterest={datasetInterest} />
              : <MortgageTableResults results={tableResults} />
            }
          </Flex>
        </Flex>

        {/* El interés simple es el que se genera al final de cada periodo y por consiguiente el capital prestado o invertido no varía y por la misma razón la cantidad recibida por interés siempre va a ser la misma, es decir, no hay capitalización de los intereses. */}
        <DescriptionMortgage />

    </LayoutCalculator>
  )
}
