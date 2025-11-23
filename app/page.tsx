import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ProjectsSlideGallery from "@/components/projects-slide-gallery"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectsSlideGallery />
      <CTA />
      <Footer />
    </main>
  )
}
