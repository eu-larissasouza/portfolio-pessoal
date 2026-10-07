import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import JourneySection from './components/JourneySection'
import CommunitySection from './components/CommunitySection'
import FocusSection from './components/FocusSection'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <div className="page-content">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <CommunitySection />
        <FocusSection />
        <SocialSection />
      </div>
      <Footer />
      <BackToTop />
    </main>
  )
}
