import { ChakraProvider } from "@chakra-ui/react"
import { Layout } from "../components/general/Layout";

import "@fontsource/roboto"

import theme from '../config/theme'
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </ChakraProvider>
  )
}

export default MyApp
