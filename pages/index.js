import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { BsPercent, BsCurrencyDollar, BsPiggyBank } from 'react-icons/bs'
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { BiDollarCircle, BiLineChart } from 'react-icons/bi'


import { useInterest } from "../hooks/useInterest";
import { moneyThousand } from "../utils/format-number";

export default function Home() {
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

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ readOnly: false });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    scales: {
      xAxes: {
        grid: {
          display: false,
        },
        stacked: true,
        ticks: {
          precision: 0,
        },
      },
      yAxes: {
        grid: {
          display: false,
        },
        stacked: true,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        align: 'start'
      }
    }
  };

  const datasetsBar = [
    {
      label: "Intereses generados",
      backgroundColor: "#2A4365",
      borderRadius: 8,
      data: datasets,
      order: 3,
    },
    {
      label: "Deposito inicial",
      backgroundColor: "#90CDF4",
      data: datasetsInitialAmmount,
      order: 1,
    },
    {
      label: "Contribuciones",
      backgroundColor: "#3182CE",
      data: datasetsContributions,
      order: 2,
    },
  ];

  return (
    <>
      <Flex direction="column" flex={1} px={4} py={6} maxW='1100px'>
        <Box>
          <Text fontSize="4xl" fontWeight="700" lineHeight="100%">
            Calculadora de interes compuesto
          </Text>
        </Box>
        <Flex flex={1} mt={6} direction="column">
          <Flex w="100%" justifyContent="space-between">
            <Box w='20%'>
              <Text fontSize="xs" fontWeight="bold">
                Depósito inicial
              </Text>
              <InputGroup size='lg'>
                <InputLeftElement children={<BsCurrencyDollar color='gray.300' />} />
                <Input
                  bg='white'
                  borderRadius='xl'
                  name="initialAmount"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(e.target.value)}
                />
              </InputGroup>
            </Box>
            <Box w='20%'>
              <Text fontSize="xs" fontWeight="bold">
                Aportación mensual{" "}
              </Text>
              <Flex alignItems='center'>
                <InputGroup size="lg">
                  <InputLeftElement children={<BsCurrencyDollar color='gray.300' />} />
                  <Input
                    bg='white'
                    borderRadius='xl'
                    name="contribution"
                    value={contribution}
                    onChange={(e) => setContribution(e.target.value)}
                  />
                </InputGroup>
                {/* <Select size='lg' variant='outline' borderLeftRadius={0} bg='white' w='50%' value={contributionPeriod} onChange={(e) => setContributionPeriod(e.target.value)}>
                  <option value='1'>Anual</option>
                  <option value='12' >Mensual</option>
                  <option value='24'>Quincenal</option>
                  <option value='52'>Semanal</option>
                  <option value='365'>Diario</option>
                </Select> */}
              </Flex>
            </Box>
            <Box w='20%'>
              <Text fontSize="xs" fontWeight="bold">
                Tasa de interés anual{" "}
              </Text>
              <Flex>
                <InputGroup size="lg">
                  <Input
                    bg='white'
                    borderRadius='xl'
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  />
                  <InputRightElement children={<BsPercent color='gray.300' />} />
                </InputGroup>
              </Flex>
            </Box>
            <Box w='20%'>
              <Text fontSize="xs" fontWeight="bold">Pago de intereses{" "}</Text>
              <Flex>
                <Select variant='outline' bg='white' borderRadius='xl' size='lg'value={interestPeriod} onChange={(e) => setInterestPeriod(e.target.value)}>
                  <option value='1'>Anual</option>s
                  <option value='12'>Mensual</option>
                  <option value='24'>Quincenal</option>
                  <option value='52'>Semanal</option>
                  <option value='365'>Diario</option>
                </Select>
              </Flex>
            </Box>
            <Box w='15%'>
              <Text fontSize="xs" fontWeight="bold">
                Años a invertir{" "}
              </Text>
              <HStack maxW="100%" spacing={0} borderWidth={1} bg='white' borderRadius='xl' p='3px'>
                <Button {...dec} variant="ghost" mx={0} fontWeight="bold">-</Button>
                <Input
                  size='lg'
                  borderRadius='xl'
                  name="numUsers"
                  {...input}
                  variant="unstyled"
                  textAlign="center"
                />
                <Button {...inc} variant="ghost" mx={0} fontWeight="bold">+</Button>
              </HStack>
            </Box>
          </Flex>
          <Flex justifyContent='space-between' my={6}>
            <Box bg='white' p={6} w='350px' borderRadius='xl'>
              <Flex flex={1} justifyContent='space-between'>
                <Text fontWeight='700' fontSize='3xl'>${moneyThousand(finalContribution)}</Text>
                <Box p={1} borderRadius='xl'>
                  <BsPiggyBank size={42} />
                </Box>
              </Flex>
              <Flex alignItems='center'>
                {/* <Box w='12px' h='12px' bg='red' mr={1} borderRadius={3} /> */}
                <Text>Aportación total</Text>
              </Flex>
            </Box>
            <Box bg='white' p={6} w='350px' borderRadius='xl'>
              <Flex flex={1} justifyContent='space-between'>
                <Text fontWeight='700' fontSize='3xl'>${moneyThousand(finalInteresEarned)}</Text>
                <BiLineChart size={42} />
              </Flex>
              <Flex alignItems='center'>
                {/* <Box w='12px' h='12px' bg='red' mr={1} borderRadius={3} /> */}
                <Text>Interes ganado</Text>
              </Flex>
            </Box>
            <Box bg='white' p={6} w='350px' borderRadius='xl'>
              <Flex flex={1} justifyContent='space-between'>
                <Text fontWeight='700' fontSize='3xl'>${moneyThousand(finalBalance)}</Text>
                <BiDollarCircle size={42} />
              </Flex>
              <Flex alignItems='center'>
                {/* <Box w='12px' h='12px' bg='#2A4365' mr={1} borderRadius={3} /> */}
                <Text>Balance final</Text>
              </Flex>
            </Box>
          </Flex>
          <Flex h="400px" w="100%" pr={4} bg='white' px={6} py={4} borderRadius='xl'>
            <Chart
              type="bar"
              data={{ labels, datasets: datasetsBar }}
              height={350}
              options={options}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
