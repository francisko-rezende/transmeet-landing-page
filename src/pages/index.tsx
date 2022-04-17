import Header from 'components/Header'
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
      </main>
    </>
  )
}
