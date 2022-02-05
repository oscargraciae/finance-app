import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const DescriptionMortgage = () => {
  return (
    <>
    <Heading as='h2' py='30px'>¿Qué es una hipoteca?</Heading>
    <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Una hipoteca es un préstamo que le otorga un banco o un prestamista hipotecario para ayudar a financiar la compra de una casa. La casa que compra actúa como garantía a cambio del dinero que está pidiendo prestado para financiar la hipoteca.
    </Text>
    {/* <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Se podría definir como la operación en la cual el capital aumenta al final de cada periodo por la suma de los intereses cobrados.
    </Text> */}
    </>
  )
}
