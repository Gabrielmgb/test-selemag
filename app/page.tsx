import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { PainSection } from "@/components/landing/pain-section"
import { ValueSection } from "@/components/landing/value-section"
import { AboutEventSection } from "@/components/landing/about-event-section"
import { SpeakersSection } from "@/components/landing/speakers-section"
import { GallerySection } from "@/components/landing/gallery-section"
import { TargetAudienceSection } from "@/components/landing/target-audience-section"
import { SelemagSection } from "@/components/landing/selemag-section"
import { ParticipationSection } from "@/components/landing/participation-section"
import { CtaSection } from "@/components/landing/cta-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded-md"
      >
        Pular para o conteúdo principal
      </a>
      
      <Navbar />
      
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        
        <section id="sobre" aria-label="Sobre o evento">
          <PainSection />
        </section>
        
        <ValueSection />
        <AboutEventSection />
        
        <section id="palestrantes" aria-label="Palestrantes">
          <SpeakersSection />
        </section>
        
        <section id="galeria" aria-label="Galeria de fotos">
          <GallerySection />
        </section>
        
        <section id="para-quem" aria-label="Público alvo">
          <TargetAudienceSection />
        </section>
        
        <section id="selemag" aria-label="Grupo SELEMAG">
          <SelemagSection />
        </section>
        
        <ParticipationSection />
        
        <section id="inscricao" aria-label="Inscrição">
          <CtaSection />
        </section>
        
        <section id="contato" aria-label="Contato">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </>
  )
}
