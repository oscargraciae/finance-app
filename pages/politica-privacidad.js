import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Privacity () {
  return (
    <Box>
      <Box mt={24} w={{ base: 'container.sm', md: 'container.md' }}>
        <Heading mb={6}>Política de privacidad</Heading>

        <Text fontSize='20px' lineHeight='35px' pb='30px'>
          financetool.app recopila información sobre los visitantes con fines estadísticos. Solo se recopila información técnica, no información personal.
        </Text>
        <Text fontSize='20px' lineHeight='35px' pb='30px'>
        Permitimos que empresas de terceros publiquen anuncios y/o recopilen cierta información anónima cuando visita nuestro sitio web. Estas empresas pueden utilizar información no identificable personalmente (p. ej., información de flujo de clics, tipo de navegador, hora y fecha, tema de los anuncios en los que se hizo clic o se desplazó) durante sus visitas a este y otros sitios.
        </Text>
      </Box>
    </Box>
  )
}
