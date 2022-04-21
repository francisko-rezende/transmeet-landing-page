import React from 'react'

import ContactPageContent from 'components/ContactPageContent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Head from 'next/head'

const contact = () => {
  return (
    <>
      <Head>
        <title>Transmeet ⋅ Contato</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <ContactPageContent />

      <Footer />
    </>
  )
}

export default contact
