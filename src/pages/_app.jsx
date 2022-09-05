import 'tailwindcss/tailwind.css'
// import '../../public/assets/styles/global.css'

import App from 'next/app'
import Head from 'next/head'
import { useMemo } from 'react'
import es6Promise from 'es6-promise'
import userService from '../service/userService'
import { getTokenSSRAndCSR } from '../helpers'
import { useGlobalState } from '../states'
import { Header } from '../components'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../libs/apollo-client'

es6Promise.polyfill()

const MyApp = ({ Component, pageProps }) => {
  const [, setCurrentUser] = useGlobalState('currentUser')
  const [, setToken] = useGlobalState('token')
  const apolloClient = useApollo(pageProps.initialApolloState)

  useMemo(() => {
    setToken(pageProps.token)
    setCurrentUser(pageProps.userInfo)
  }, [])
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, maximum-scale=1"
        />
        <meta name="keywords" content="Media Social" />
        <meta name="description" content="Social Media" />
        <meta name="author" content="ngoctienle<hi@bravethinking.io>" />
        <title>Meetmax Social Media</title>

        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async appContext => {
  let userRes = null

  const appProps = await App.getInitialProps(appContext)
  const [token, userToken] = getTokenSSRAndCSR(appContext.ctx)

  if (typeof window === 'undefined' && userToken?.id && userToken?.email) {
    userRes = await userService.getUserID(userToken.id)
  }
  return {
    pageProps: {
      ...appProps.pageProps,
      userInfo: userRes && userRes.user,
      token
    }
  }
}

export default MyApp
