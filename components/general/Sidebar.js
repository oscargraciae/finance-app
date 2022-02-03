import { Flex, Link, Text } from "@chakra-ui/react"
import { useRouter } from 'next/router'

const SideItem = ({ title, icon, href }) => {
  const { pathname } = useRouter()
  return (
    <Flex bg={pathname === href ? 'secondary.100' : 'blue.100'} borderRadius='md' _hover={{ bg: 'gray.100' }} mt={2}>
      <Link to={href} display='flex' flex={1} flexDirection='row' alignItems='center' fontWeight='500' px={3} py={3}>
        <Text ml={3} fontSize='14px' fontWeight='bold'>{title}</Text>
      </Link>
    </Flex>
  )
}

export const SideBar = () => {
  return (
    <Flex w='330px' position='sticky' top='0px' h='100vh' direction='column' justifyContent='flex-start' alignItems='flex-start' py={6}>
      <Flex direction='column' pb={4} w='100%'>
        <Text>Calculadoras</Text>
        <SideItem title='Interes simple' href='/interes-simple' />
        <SideItem title='Interes compuesto' href='/interes-compuesto' />
        <SideItem title='Calcular hipoteca' href='/calcular-hipoteca' />
        <SideItem title='Convertir moneda' href='/convertir-moneda' />
        <SideItem title='Convertir criptomonedas' href='/convertir-criptomonedas' />
      </Flex>
      {/* <Flex direction='column' pb={1} w='100%'>
        <Text>Finanzas</Text>
        <SideItem title='Interes simple' href='/' />
        <SideItem title='Interes compuesto' href='/interes-simple' />
      </Flex> */}
    </Flex>
  )
}
