import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import PregnancyTimeline from './components/PregnancyTimeline'
import AIInsights from './components/AIInsights'
import AlloWearSection from './components/AlloWearSection'
import AIChat from './components/AIChat'
import PartnerSection from './components/PartnerSection'
import HealthRecords from './components/HealthRecords'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <>
      <Navbar onLogin={() => setLoginOpen(true)} />
      <main>
        <Hero />
        <IntroSection />
        <PregnancyTimeline />
        <AIInsights />
        <AlloWearSection />
        <AIChat />
        <PartnerSection />
        <HealthRecords />
        <DownloadCTA />
      </main>
      <Footer />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  )
}
