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
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadoras Financieras</title>
      </Head>
      <Flex direction="column" px={12} py={12} maxW='1100px'>
        <Heading as='h1' fontSize='5xl' my={6} mr={12}>Controla tus finanzas y las de tu empresa con nuestras calculadoras gratuitas.</Heading>
        <Text fontSize='xl' mr={12} mb={6}>Asegúrese de que usted pueda calificar para ese préstamo hipotecario que le permitirá comprar la casa de sus sueños. Estas calculadoras financieras gratuitas, pueden ayudarlo a calcular sus deudas y evitar desastres financieros.</Text>
      </Flex>
    </>
  );
}
