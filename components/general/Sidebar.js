import React, { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Link, Spacer, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
// import { FaBitcoin } from 'react-icons/fa'
import { BsBarChartLine, BsHouse, BsCashCoin, BsClock } from 'react-icons/bs'
import { GrGrow } from 'react-icons/gr'
import { useAppContext } from '../../context/AppContext'

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
  const { isOpen, onClose, btnRef } = useAppContext()

  return (
    <>
      <Flex w='320px' alignItems='center' direction='column' display={{ base: 'none', md: 'none' }} borderRightWidth={1} borderColor='gray.100' shadow='inner' bg='white' h='100vh' pt='55px' px={4}>
        <Flex direction='column' pb={4} w='100%'>
          <Text fontWeight='bold' my={2}>Calculadoras</Text>
          <SideItem title='Calculadora de interés simple' href='/calculadora/interes-simple' icon={<BsBarChartLine />}/>
          <SideItem title='Calculadora de interés compuesto' href='/calculadora/interes-compuesto' icon={<BsBarChartLine />} />
          <SideItem title='Calculadora de hipoteca' href='/calculadora/hipoteca' icon={<BsHouse />} />
          <SideItem title='Calculadora de prestamo' href='/calculadora/prestamo' icon={<BsCashCoin />} />
          <SideItem title='Tasa de crecimiento anual' href='/calculadora/tasa-crecimiento' icon={<GrGrow />} />
          <SideItem title='Calculadora de valor presente' href='/calculadora/valor-presente' icon={<BsClock />} />
          <SideItem title='Calculadora de valor futuro' href='/calculadora/valor-futuro' icon={<BsClock />} />
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
        <Spacer />
        {/* <Flex width='100%' py={2} px={6} borderTopWidth={1} borderTopColor='gray.200'>
          <Link src='/politica-privacidad'>Política de privacidad</Link>
        </Flex> */}
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {/* <DrawerHeader>Create your account</DrawerHeader> */}

        <DrawerBody>
          <Text fontWeight='bold' my={2}>Calculadoras</Text>
          <SideItem title='Calculadora de interés simple' href='/calculadora/interes-simple' icon={<BsBarChartLine />}/>
          <SideItem title='Calculadora de interés compuesto' href='/calculadora/interes-compuesto' icon={<BsBarChartLine />} />
          <SideItem title='Calculadora de hipoteca' href='/calculadora/hipoteca' icon={<BsHouse />} />
          <SideItem title='Calculadora de prestamo' href='/calculadora/prestamo' icon={<BsCashCoin />} />
          <SideItem title='Tasa de crecimiento anual' href='/calculadora/tasa-crecimiento' icon={<GrGrow />} />
          <SideItem title='Calculadora de valor presente' href='/calculadora/valor-presente' icon={<BsClock />} />
          <SideItem title='Calculadora de valor futuro' href='/calculadora/valor-futuro' icon={<BsClock />} />
        </DrawerBody>
      </DrawerContent>
      </Drawer>
    </>
  )
}
