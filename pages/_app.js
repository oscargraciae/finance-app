import { ChakraProvider } from "@chakra-ui/react"
import { Layout } from "../components/general/Layout";

import "@fontsource/nunito"
import "@fontsource/roboto"

import theme from '../config/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
