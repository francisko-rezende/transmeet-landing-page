import React from 'react'

import AboutPageContent from 'components/AboutPageContent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Head from 'next/head'

const about = () => {
  return (
    <>
      <Head>
        <title>Transmeet ⋅ Sobre</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  )
}

export default about
