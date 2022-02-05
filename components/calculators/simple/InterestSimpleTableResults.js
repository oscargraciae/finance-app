import React from 'react'
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { moneyThousand } from '../../../utils/format-number'
import { useAppContext } from '../../../context/AppContext'

export const InterestSimpleTableResults = ({ datasets, datasetsInitialAmmount }) => {
  const { currency } = useAppContext()
  return (
    <Box height='400px' overflow='auto'>
      <Table>
        <Thead>
          <Tr>
            <Th>Año</Th>
            <Th>Depósito inicial</Th>
            <Th>Interés acumulado</Th>
            <Th>Balance final</Th>
          </Tr>
        </Thead>
        <Tbody>
          { datasetsInitialAmmount.map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{currency}{moneyThousand(datasetsInitialAmmount[index])}</Td>
                <Td>{currency}{moneyThousand(datasets[index])}</Td>
                <Td>{currency}{moneyThousand(datasetsInitialAmmount[index] + Number(datasets[index]))}</Td>
              </Tr>
            )
          }) }
        </Tbody>
      </Table>
    </Box>
  )
}
