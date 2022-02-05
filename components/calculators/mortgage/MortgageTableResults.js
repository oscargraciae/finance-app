import React from 'react'
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { moneyThousand } from '../../../utils/format-number'
import { useAppContext } from '../../../context/AppContext'

export const MortgageTableResults = ({ results }) => {
  const { currency } = useAppContext()
  return (
    <Box height='400px' overflow='auto'>
      <Table>
        <Thead>
          <Tr>
            <Th>Mes</Th>
            <Th isNumeric>Capital Inicial</Th>
            <Th isNumeric>Mensualidad</Th>
            <Th isNumeric>Pago interés</Th>
            <Th isNumeric>Pago Capital</Th>
            <Th isNumeric>Capital Final</Th>
          </Tr>
        </Thead>
        <Tbody>
          { results.map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td isNumeric>{currency}{moneyThousand(item.principalBefore)}</Td>
                <Td isNumeric>{currency}{moneyThousand(item.monthlyPayment)}</Td>
                <Td isNumeric>{currency}{moneyThousand(item.interestPayment)}</Td>
                <Td isNumeric>{currency}{moneyThousand(item.principalPayments)}</Td>
                <Td isNumeric>{currency}{moneyThousand(item.principal)}</Td>
              </Tr>
            )
          }) }
        </Tbody>
      </Table>
    </Box>
  )
}
