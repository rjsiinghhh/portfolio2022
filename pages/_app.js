import '../styles/globals.css'
import Navbar from '../components/navbar'
import { Fragment } from 'react'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <Fragment> <Head>
     <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"/>
    </Head><Navbar/> <Component {...pageProps} />
  </Fragment>
  
}

export default MyApp
