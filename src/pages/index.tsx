import EducationOpportunityDiversity from 'components/EducationOpportunityDiversity'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Transmeet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <EducationOpportunityDiversity />
      <Footer />
    </>
  )
}
