import React, { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'

import { Layout } from '../components/general/Layout'

import '@fontsource/roboto'
import '@fontsource/noto-sans'
import '@fontsource/lato'

import theme from '../config/theme'
import { AppProvider } from '../context/AppContext'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={'https://www.googletagmanager.com/gtag/js?id=G-SB2FWTTLZ1'}
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SB2FWTTLZ1');
        `}
      </Script>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3468670183325837" crossorigin="anonymous" />
      <ChakraProvider theme={theme}>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
