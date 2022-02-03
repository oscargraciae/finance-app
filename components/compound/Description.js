import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Description = () => {
  return (
    <>
    <Heading as='h2' py='30px'>¿Qué es el interés compuesto?</Heading>
    <Text fontSize='20px' lineHeight='35px' pb='30px'>
      El interés compuesto es el que se genera en cada periodo al agregar el capital aportado más el interés, generando un nuevo capital que se aplicara al siguiente periodo para generar más intereses.
    </Text>
    <Text fontSize='20px' lineHeight='35px' pb='30px'>
      Se podría definir como la operación en la cual el capital aumenta al final de cada periodo por la suma de los intereses cobrados.
    </Text>
    </>
  )
}
