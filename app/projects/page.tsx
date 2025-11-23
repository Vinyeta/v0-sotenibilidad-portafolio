import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ChevronRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Gestor de Residuos Inteligente",
      category: "IoT",
      description: "Sistema completo de gestión de residuos basado en sensores IoT y análisis de datos en tiempo real.",
      image: "/waste-management-system-iot.jpg",
      details:
        "Plataforma integrada que utiliza sensores IoT para monitorear niveles de residuos en contenedores públicos, optimizando rutas de recogida y reduciendo emisiones de carbono.",
    },
    {
      id: 2,
      title: "Dashboard de Energía Renovable",
      category: "Dashboard",
      description: "Sistema de monitoreo en tiempo real de plantas de energía solar y eólica.",
      image: "/renewable-energy-dashboard-solar-wind.jpg",
      details:
        "Dashboard interactivo que proporciona visualización en tiempo real de producción de energía renovable, rendimiento de equipos y predicciones de generación.",
    },
    {
      id: 3,
      title: "App Huella de Carbono Personal",
      category: "Aplicación Web",
      description: "Aplicación web que ayuda usuarios a calcular y reducir su huella de carbono.",
      image: "/carbon-footprint-tracking-app.jpg",
      details:
        "Herramienta educativa y práctica que permite a usuarios calcular su huella de carbono, recibir recomendaciones personalizadas y monitorear su progreso hacia objetivos sostenibles.",
    },
    {
      id: 4,
      title: "Plataforma de Comercio Sostenible",
      category: "E-commerce",
      description: "Marketplace de productos sostenibles con certificación ambiental.",
      image: "/sustainable-products-ecommerce-marketplace.jpg",
      details:
        "Plataforma que conecta consumidores conscientes con productores sostenibles, incluyendo verificación de certificaciones ambientales y análisis de impacto.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Mis Proyectos</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Una colección de proyectos de sostenibilidad e innovación donde he aplicado mis habilidades técnicas.
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={project.id} className="group">
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{project.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{project.details}</p>

                    <button className="inline-flex items-center text-primary hover:text-accent transition group-hover:translate-x-1 font-semibold">
                      Ver Detalles <ChevronRight size={20} className="ml-2" />
                    </button>
                  </div>

                  <div className={`${index % 2 === 1 ? "md:order-first" : ""}`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="rounded-lg w-full h-96 object-cover"
                    />
                  </div>
                </div>

                {index < projects.length - 1 && <hr className="my-12 border-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
