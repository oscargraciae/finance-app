import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'

import ImageBackground from '../public/back_home.png'
import { ButtonHome } from '../components/home/ButtonHome'
import { HeadMeta } from '../components/common/HeadMeta'

export default function Home () {
  return (
    <>
      <HeadMeta title='Calculadoras Financieras' description='Controla tus finanzas y las de tu empresa con nuestras calculadoras gratuitas.' />
        <Flex direction='column' px={4} justifyContent='center' alignItems='center' width='100%' minH='100vh'>
          <Flex maxW='1100px' direction='column' justifyContent='center' pt={{ base: '80px', md: '0' }}>

          <Flex px={{ base: 0, md: 4 }} py={{ base: 0, md: 24 }}>
            <Box direction="column" w='100%'>
              <Heading as='h1' fontSize={{ base: '2xl', md: '5xl' }} my={6} mr={{ base: 0, md: 12 }}>Controla tus finanzas y las de tu empresa con nuestras calculadoras gratuitas.</Heading>
              <Text fontSize={{ base: 'md', md: 'xl' }} mr={{ base: 0, md: 12 }} mb={6}>Asegúrese de que usted pueda calificar para ese préstamo hipotecario que le permitirá comprar la casa de sus sueños. Estas calculadoras financieras gratuitas, pueden ayudarlo a calcular sus deudas y evitar desastres financieros.</Text>
            </Box>
            <Box display={{ base: 'none', sm: 'none', md: 'block' }} w='512px'>
              <Image alt='Controla tus finanzas y las de tu empresa' src={ImageBackground} width={380} height={380} layout='fixed' />
            </Box>
          </Flex>

          <Flex direction='row' flexWrap='wrap' alignItems='center' justifyContent='center'>
            <ButtonHome href='/calculadora/interes-simple' text='Calcular Interés simple' />
            <ButtonHome href='/calculadora/interes-compuesto' text='Calcular Interés compuesto' />
            <ButtonHome href='/calculadora/hipoteca' text='Calcular hipoteca' />
            <ButtonHome href='/calculadora/prestamo' text='Calculadora de prestamo' />
            <ButtonHome href='/calculadora/hipoteca' text='Tasa de crecimiento anual' />
            <ButtonHome href='/calculadora/valor-presente' text='Calculadora de valor presente' />
            <ButtonHome href='/calculadora/valor-futuro' text='Calculadora de valor futuro' />
          </Flex>
        </Flex>
        <Spacer />
          <Flex width='100%' py={2} px={6} borderTopWidth={1} borderTopColor='gray.200' fontSize='sm'>
            <Link href='/politica-privacidad'>Política de privacidad</Link>
            <Spacer />
            <Text>Sugerencias y comentarios: financetoolapp@gmail.com</Text>
        </Flex>
      </Flex>
    </>
  )
}
