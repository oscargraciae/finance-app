import React from 'react'
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'

import ImageBackground from '../public/back_home.png'
import { ButtonHome } from '../components/home/ButtonHome'

export default function Home () {
  return (
    <>
      <Head>
        <title>Calculadoras Financieras</title>
      </Head>
      <Flex direction='column'>
        <Flex px={4} py={24} maxW='1100px'>
          <Flex direction="column">
            <Heading as='h1' fontSize='5xl' my={6} mr={12}>Controla tus finanzas y las de tu empresa con nuestras calculadoras gratuitas.</Heading>
            <Text fontSize='xl' mr={12} mb={6}>Asegúrese de que usted pueda calificar para ese préstamo hipotecario que le permitirá comprar la casa de sus sueños. Estas calculadoras financieras gratuitas, pueden ayudarlo a calcular sus deudas y evitar desastres financieros.</Text>
          </Flex>
          <Box display={{ base: 'none', sm: 'none', md: 'block' }}>
            <Image src={ImageBackground} />
          </Box>
        </Flex>

        <Flex maxW='1200px' alignSelf='center'>
          <Wrap spacing='30px' align='center' justify='center' alignItems='center'>
            <WrapItem>
              <Center>
                <ButtonHome href='/calculadora/interes-simple' text='Calcular Interés simple' />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <ButtonHome href='/calculadora/interes-compuesto' text='Calcular Interés compuesto' />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <ButtonHome href='/calculadora/hipoteca' text='Calcular hipoteca' />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <ButtonHome href='/calculadora/hipoteca' text='Tasa de crecimiento anual' />
              </Center>
            </WrapItem>
            {/* <WrapItem>
              <Center>
                <ButtonHome href='/calculadora/convertir-divisa' text='Conversor de divisas' />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <ButtonHome href='/calculadora/convertir-criptomoneda' text='Conversor de criptomonedas' />
              </Center>
            </WrapItem> */}
          </Wrap>
        </Flex>


      </Flex>
    </>
  )
}
