import 'tailwindcss/tailwind.css'
// import '../../public/assets/styles/global.css'

import App from 'next/app'
import Head from 'next/head'

import { Header } from '../components'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="root">
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
    </div>
  )
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)

  return {
    pageProps: {
      ...appProps.pageProps
    }
  }
}

export default MyApp
