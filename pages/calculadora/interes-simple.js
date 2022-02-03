import { useState } from 'react';
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
  Text,
} from "@chakra-ui/react";
import { BiDollarCircle, BiLineChart } from 'react-icons/bi'

import { useInterest } from "../../hooks/useInterest";
import { moneyThousand } from "../../utils/format-number";

import { StatCard } from "../../components/common/StatCard";
import { ChartBar } from '../../components/compound/ChartBar';
import { TableResults } from '../../components/compound/TableResults';
import { useAppContext } from '../../context/AppContext';
import { Description } from '../../components/compound/Description';
import { HeadMeta } from '../../components/common/HeadMeta';
import { LayoutCalculator } from '../../components/general/LayoutCalculator';

export default function Home() {
  const [option, setOption] = useState(1)

  const {
    datasets,
    datasetsInitialAmmount,
    datasetsContributions,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    labels,
    setInitialAmount,
    initialAmount,
    setContribution,
    contribution,
    setInterest,
    interest,
    setInterestPeriod,
    interestPeriod,
    setContributionPeriod,
    contributionPeriod,
    finalBalance,
    finalContribution,
    finalInteresEarned,
  } = useInterest();

  const { currency } = useAppContext()

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ readOnly: false });

  return (
    <LayoutCalculator>
      <HeadMeta title='Calculadora de interés compuesto' description='Calcula el interés compuesto para ver cómo sus ahorros o inversiones podrían crecer con el tiempo' />

        <Heading as='h1' fontSize="4xl" fontWeight="700" lineHeight="100%" pb='12px'>
          Calculadora de interés simple
        </Heading>
        <Text color='gray.600' fontSize='lg'>Calcula el interés compuesto para ver cómo sus ahorros o inversiones podrían crecer con el tiempo.</Text>

        <Flex mt={6} direction="column">
          <Flex w="100%" justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
            <Box w={{ base: '100%', md: '20%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">Depósito inicial</Text>
              <InputGroup size='lg'>
                <InputLeftElement><Text>{currency}</Text></InputLeftElement>
                <Input
                  autoFocus
                  bg='white'
                  borderRadius='lg' borderWidth={1} borderColor='gray.100'
                  name="initialAmount"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(e.target.value)}
                />
              </InputGroup>
            </Box>
            <Box w={{ base: '100%', md: '20%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">
                Aportación{" "}
              </Text>
              <Flex alignItems='center'>
                <InputGroup size="lg">
                  <InputLeftElement><Text>{currency}</Text></InputLeftElement>
                  <Input
                    bg='white'
                    borderRadius='lg' borderWidth={1} borderColor='gray.100'
                    name="contribution"
                    value={contribution}
                    onChange={(e) => setContribution(e.target.value)}
                  />
                </InputGroup>
              </Flex>
            </Box>
            <Box w={{ base: '100%', md: '20%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">
                Tasa de interés anual{" "}
              </Text>
              <Flex>
                <InputGroup size="lg">
                  <Input
                    bg='white'
                    borderRadius='lg' borderWidth={1} borderColor='gray.100'
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  />
                  <InputRightElement><BsPercent color='gray.300' /></InputRightElement>
                </InputGroup>
              </Flex>
            </Box>
            <Box w={{ base: '100%', md: '20%' }} mb={{ base: 4, md: 0 }}>
              <Text fontSize="xs" fontWeight="bold">Pago de intereses y aportación{" "}</Text>
              <Flex>
                <Select variant='outline' bg='white' borderRadius='lg' borderWidth={1} borderColor='gray.100' size='lg'value={interestPeriod} onChange={(e) => setInterestPeriod(e.target.value)}>
                  <option value='1'>Anual</option>s
                  <option value='12'>Mensual</option>
                  <option value='24'>Quincenal</option>
                  <option value='52'>Semanal</option>
                  <option value='365'>Diario</option>
                </Select>
              </Flex>
            </Box>
            <Box w={{ base: '100%', md: '15%'}}>
              <Text fontSize="xs" fontWeight="bold">
                Años a invertir{" "}
              </Text>
              <HStack maxW="100%" spacing={0} borderWidth={1} bg='white' borderRadius='lg' borderColor='gray.100' p='3px'>
                <Button {...dec} variant="ghost" mx={0} fontWeight="bold">-</Button>
                <Input
                  size='lg'
                  borderRadius='lg' borderWidth={1} borderColor='gray.100'
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
            <StatCard title='Aportación total' icon={<BsPiggyBank size={42} />} value={`${moneyThousand(finalContribution)}`} />
            <StatCard title='Interés ganado' icon={<BiLineChart size={42} />} value={`${moneyThousand(finalInteresEarned)}`} />
            <StatCard title='Balance final' icon={<BiDollarCircle size={42} />} value={`${moneyThousand(finalBalance)}`} />
          </Flex>

          <Flex h="440px" w="100%" pr={4} bg='white' px={6} py={4} borderRadius='lg' borderWidth={1} borderColor='gray.100' direction='column'>
            <Flex justifyContent='flex-end'>
              <Button size='sm' colorScheme='secondary' variant='ghost' isActive={option === 1} onClick={() => setOption(1)} mr={1}>Grafica de barras</Button>
              <Button size='sm' colorScheme='secondary' variant='ghost' isActive={option === 2} onClick={() => setOption(2)}>Tabla de resultados</Button>
            </Flex>
            {
              option === 1
              ? <ChartBar labels={labels} datasets={datasets} datasetsInitialAmmount={datasetsInitialAmmount} datasetsContributions={datasetsContributions} />
              : <TableResults datasets={datasets} datasetsInitialAmmount={datasetsInitialAmmount} datasetsContributions={datasetsContributions} />
            }
          </Flex>
        </Flex>

        <Description />

    </LayoutCalculator>
  );
}
