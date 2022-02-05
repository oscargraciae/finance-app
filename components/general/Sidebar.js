import React, { Flex, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
// import { FaBitcoin } from 'react-icons/fa'
import { BsBarChartLine, BsHouse } from 'react-icons/bs'
import { GrGrow } from 'react-icons/gr'

const SideItem = ({ title, icon, href }) => {
  const { pathname } = useRouter()
  return (
    <Flex bg={pathname === href ? 'secondary.100' : 'transparent'} borderRadius='md' _hover={{ bg: 'blue.50' }} mt={2}>
      <NextLink href={href} passHref>
        <Link display='flex' flex={1} flexDirection='row' alignItems='center' fontWeight='500' px={3} py={3}>
          {icon}
          <Text ml={3} fontSize='14px' fontWeight='bold'>{title}</Text>
        </Link>
      </NextLink>
    </Flex>
  )
}

export const SideBar = () => {
  return (
    <Flex w='320px' alignItems='center' direction='column' display={{ base: 'none', md: 'flex' }} borderRightWidth={1} borderColor='gray.100' shadow='inner' bg='white' h='93vh' mt='48px' pt={4} px={4}>
      <Flex direction='column' pb={4} w='100%'>
        <Text fontWeight='bold' my={2}>Calculadoras</Text>
        <SideItem title='Calcular Interés simple' href='/calculadora/interes-simple' icon={<BsBarChartLine />}/>
        <SideItem title='Calcular Interés compuesto' href='/calculadora/interes-compuesto' icon={<BsBarChartLine />} />
        <SideItem title='Calcular hipoteca' href='/calculadora/hipoteca' icon={<BsHouse />} />
        <SideItem title='Calcular de prestamo' href='/calculadora/hipoteca' icon={<BsHouse />} />
        <SideItem title='Tasa de crecimiento anual' href='/calculadora/tasa-crecimiento' icon={<GrGrow />} />
        <SideItem title='Valor presente' href='/calculadora/tasa-crecimiento' icon={<GrGrow />} />
        <SideItem title='Valor futuro' href='/calculadora/tasa-crecimiento' icon={<GrGrow />} />
        {/* <SideItem title='Conversor de divisas' href='/calculadora/conversor-divisas' icon={<BsCashCoin />} />
        <SideItem title='Conversor de criptomonedas' href='/calculadora/conversor-criptomonedas' icon={<BsCurrencyBitcoin />} /> */}
      </Flex>
      <Flex direction='column' pb={4} w='100%'>
      <ins className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-8005856219207631"
        data-ad-slot="8526515250"></ins>
        {/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
      </Flex>
      {/* <Flex direction='column' pb={1} w='100%'>
        <Text>Finanzas</Text>
        <SideItem title='Interes simple' href='/' />
        <SideItem title='Interes compuesto' href='/interes-simple' />
      </Flex> */}
    </Flex>
  )
}
