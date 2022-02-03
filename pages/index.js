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
  Heading,
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
import { StatCard } from "../components/common/StatCard";
import Head from "next/head";

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
        align: 'end'
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
      <Head>
        <title>Calculadora de interés compuesto</title>
        <meta name="description" content="Calcula el interés compuesto para ver cómo sus ahorros o inversiones podrían crecer con el tiempo" />
      </Head>
      <Flex direction="column" px={4} py={6} maxW='1100px'>
        <Box>
          <Heading as='h1' fontSize="4xl" fontWeight="700" lineHeight="100%" pb='12px'>
            Calculadora de interés compuesto
          </Heading>
          <Text color='gray.600' fontSize='lg' pr={24}>Es aquel en el cual el capital cambia al final de cada periodo, debido a que los intereses se adicionan al capital para formar un nuevo capital </Text>
        </Box>
        <Flex mt={6} direction="column">
          <Flex w="100%" justifyContent="space-between">
            <Box w='20%'>
              <Text fontSize="xs" fontWeight="bold">
                Depósito inicial
              </Text>
              <InputGroup size='lg'>
                <InputLeftElement children={<BsCurrencyDollar color='gray.300' />} />
                <Input
                  autoFocus
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
                Aportación{" "}
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
              <Text fontSize="xs" fontWeight="bold">Pago de intereses y aportación{" "}</Text>
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
            <StatCard title='Aportación total' icon={<BsPiggyBank size={42} />} value={`${moneyThousand(finalContribution)}`} />
            <StatCard title='Interes ganado' icon={<BiLineChart size={42} />} value={`${moneyThousand(finalInteresEarned)}`} />
            <StatCard title='Balance final' icon={<BiDollarCircle size={42} />} value={`${moneyThousand(finalBalance)}`} />
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

        <Heading as='h2' py='30px'>¿Qué es el interés compuesto?</Heading>

        <Text fontSize='20px' lineHeight='35px' pb='30px'>
          El interés compuesto es el que se genera en cada periodo al agregar el capital aportado más el interés, generando un nuevo capital que se aplicara al siguiente periodo para generar más intereses.
        </Text>

        <Text fontSize='20px' lineHeight='35px' pb='30px'>
          Se podría definir como la operación en la cual el capital aumenta al final de cada periodo por la suma de los intereses cobrados.
        </Text>
      </Flex>
    </>
  );
}
