import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const DescriptionSimpleInteres = () => {
  return (
    <>
    <Heading as='h2' py='30px'>¿Qué es el interés simple?</Heading>
    <Text fontSize='20px' lineHeight='35px' pb='30px'>
      El interés simple es el que se genera al final de cada periodo y por consiguiente el capital prestado o invertido no varía y por la misma razón la cantidad recibida por interés siempre va a ser la misma, es decir, no hay capitalización de los intereses.
    </Text>
    {/* <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Se podría definir como la operación en la cual el capital aumenta al final de cada periodo por la suma de los intereses cobrados.
    </Text> */}
    </>
  )
}
