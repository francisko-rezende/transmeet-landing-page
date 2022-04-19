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

export default function Home() {
  return (
    <>
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
