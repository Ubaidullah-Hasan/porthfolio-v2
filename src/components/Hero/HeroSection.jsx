import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'
import HeroScrollButton from './HeroScrollButton'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <HeroContent />
      </div>

      <HeroScrollButton targetId="about" />
    </section>
  )
}
