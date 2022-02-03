import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { moneyThousand } from '../../utils/format-number'

export const TableResults = ({ datasets, datasetsInitialAmmount, datasetsContributions }) => {
  const { currency } = useAppContext()
  return (
    <Box height='400px' overflow='auto'>
      <Table>
        <Thead>
          <Tr>
            <Th>Año</Th>
            <Th>Depósito inicial</Th>
            <Th>Aportaciones</Th>
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
                <Td>{currency}{moneyThousand(datasetsContributions[index])}</Td>
                <Td>{currency}{moneyThousand(datasets[index])}</Td>
                <Td>{currency}{moneyThousand(datasetsInitialAmmount[index] + datasetsContributions[index] + Number(datasets[index]))}</Td>
              </Tr>
            )
          }) }
        </Tbody>
      </Table>
    </Box>
  )
}
