import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const LoanDescription = () => {
  return (
    <>
    <Heading as='h2' py='30px'>¿Qué es un préstamo?</Heading>
    <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Los préstamos personales y los préstamos para automóviles son dos de las opciones de financiamiento más comunes.
    </Text>

    <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Un préstamo personal se puede utilizar para muchos propósitos diferentes, incluida la compra de un automóvil, mientras que un préstamo de automóvil es estrictamente para comprar un vehículo.
    </Text>

    <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Un préstamo personal proporciona al prestatario fondos de una institución crediticia (generalmente un banco), el crédito se puede emplear a su discreción, para unas vacaciones, una boda o mejoras en el hogar.
    </Text>

    <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Dos elementos clave que afectan el monto total pagado por un préstamo son la tasa de interés y el plazo del préstamo. Nuestra calculadora de préstamos puede ser una herramienta útil para determinar cómo estos factores afectarán lo que pagará cada mes.
    </Text>
    {/* <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Se podría definir como la operación en la cual el capital aumenta al final de cada periodo por la suma de los intereses cobrados.
    </Text> */}
    </>
  )
}
