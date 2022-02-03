import { Flex, Link, Text } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import NextLink from 'next/link'
// import { FaBitcoin } from 'react-icons/fa'
import { BsBarChartLine, BsCashCoin, BsCurrencyBitcoin, BsHouse } from 'react-icons/bs'

const SideItem = ({ title, icon, href }) => {
  const { pathname } = useRouter()
  return (
    <Flex bg={pathname === href ? 'secondary.100' : 'transparent'} borderRadius='md' _hover={{ bg: 'blue.50' }} mt={2}>
      <NextLink href={href}>
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
    <Flex display={{ base: 'none', md: 'flex' }} w='330px' position='sticky' top='0px' h='100vh' direction='column' justifyContent='flex-start' alignItems='flex-start' py={6} bg='white' px={3} borderLeftWidth={1} borderLeftColor='gray.200'>
      <Flex direction='column' pb={4} w='100%'>
        <SideItem title='Interes simple' href='/calculadora/interes-simple' icon={<BsBarChartLine />}/>
        <SideItem title='Interes compuesto' href='/calculadora/interes-compuesto' icon={<BsBarChartLine />} />
        <SideItem title='Calcular hipoteca' href='/calculadora/calcular-hipoteca' icon={<BsHouse />} />
        <SideItem title='Convertir moneda' href='/calculadora/convertir-moneda' icon={<BsCashCoin />} />
        <SideItem title='Convertir criptomonedas' href='/calculadora/convertir-criptomonedas' icon={<BsCurrencyBitcoin />} />
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
