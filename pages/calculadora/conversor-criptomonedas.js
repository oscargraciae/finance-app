import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

import { HeadMeta } from '../../components/common/HeadMeta'

import { LayoutCalculator } from '../../components/general/LayoutCalculator'

export default function MortgageCalculator () {
  return (
    <LayoutCalculator>
      <HeadMeta title='Calculadora de interés simple' description='La mensualidad de una hipoteca depende del capital prestado, la tasa interés y el plazo de amortización.' />

      <Heading as='h1' fontSize="4xl" fontWeight="700" lineHeight="100%" pb='12px'>Conversor de criptomonedas</Heading>
      <Text color='gray.600' fontSize='lg'>La mensualidad de una hipoteca depende del capital prestado, la tasa interés y el plazo de amortización. Con esta calculadora de hipotecas podrás ver fácilmente las cuotas y saber cuánto pagas de intereses.</Text>

    </LayoutCalculator>
  )
}
