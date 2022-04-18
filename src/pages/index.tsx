import BenefitsForCompanies from 'components/BenefitsForCompanies'
import DataOnTransEducation from 'components/DataOnTransEducation'
import DownloadNow from 'components/DownloadNow'
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
      <main>
        <YourBridge />
        <PartnerCompanies />
        <MatchWithWhoMakesADiff />
        <RegistrationSteps />
        <BenefitsForCompanies />
        <ManyPossibilities />
        <DataOnTransEducation />
        <DownloadNow />
      </main>
    </>
  )
}
