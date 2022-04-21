import BenefitsForCompanies from 'components/BenefitsForCompanies'
import DataOnTransEducation from 'components/DataOnTransEducation'
import DownloadNow from 'components/DownloadNow'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ManyPossibilities from 'components/ManyPossibilities'
import MatchWithWhoMakesADiff from 'components/MatchWithWhoMakesADiff'
import PartnerCompanies from 'components/PartnerCompanies'
import RegistrationSteps from 'components/RegistrationSteps'
import YourBridge from 'components/YourBridge'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Transmeet ⋅ Aplicativo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main style={{ overflowX: 'hidden' }}>
        <YourBridge />
        <PartnerCompanies />
        <MatchWithWhoMakesADiff />
        <RegistrationSteps />
        <BenefitsForCompanies />
        <ManyPossibilities />
        <DataOnTransEducation />
        <DownloadNow />
      </main>
      <Footer />
    </>
  )
}
