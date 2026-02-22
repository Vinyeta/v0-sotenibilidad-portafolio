"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: number
  title: string
  content: string
  type: "cover" | "intro" | "activity" | "summary" | "references" | "analysis" | "strategies" | "conclusion"
  image?: string
}

interface Project {
  id: string
  name: string
  slides: Slide[]
}

const projects: Project[] = [
  {
    id: "ecofast",
    name: "Análisis de Sostenibilidad: Caso EcoFast Delivery",
    slides: [
      {
        id: 1,
        title: "Análisis de Sostenibilidad: Caso EcoFast Delivery",
        type: "cover",
        content: `Alejo Viñeta Mussons
IFP Sants | Curso: ASIX 2 | Profesor: Freddy Serrano Cifuentes
Fecha de Entrega: 17/10/2025`,
        image: "/ecofast/1_Analisis-de-Sostenibilidad-Caso-EcoFast-Delivery.png",
      },
      {
        id: 2,
        title: "Resumen",
        type: "summary",
        content: `La empresa EcoFast Delivery se enfrenta a desafíos de sostenibilidad que amenazan su continuidad a largo plazo. En este análisis se identificarán problemas en tres dimensiones: ambiental (flota antigua, alto consumo de combustible), social (desigualdad salarial, falta de diversidad de género, condiciones laborales deficientes) y económica (crecimiento no planificado, mala reputación). Se proponen mejoras fundamentadas que incluyen transición a vehículos más eficientes, optimización de rutas, implementación de políticas de igualdad y adopción de normas ISO certificables. La investigación se sustenta en fuentes académicas y normativas como la Agencia Europea de Medio Ambiente y la Ley 7/2021 de cambio climático. El análisis concluye que la transformación hacia un modelo logístico sostenible es esencial para la viabilidad de las empresas, la salud de las personas y el ecosistema donde opera.`,
        image: "/ecofast/2_Resumen.png",
      },
      {
        id: 3,
        title: "Introducción",
        type: "intro",
        content: `Este análisis aborda de forma global el caso de "EcoFast Delivery", una empresa de reparto que se enfrenta a problemas esenciales vinculados a la gestión ambiental, la igualdad en el empleo y la eficacia de sus operaciones. El estudio busca detectar las deficiencias, proponer alternativas de mejora con evidencias contrastadas y evaluar el efecto acumulativo de las prácticas en un entorno urbano.`,
        image: "/ecofast/3_Introduccion.png",
      },
      {
        id: 4,
        title: "Actividad 1: Detección de Problemas",
        type: "activity",
        content: `Se han identificado los siguientes problemas en EcoFast Delivery:

PROBLEMAS AMBIENTALES:
• Flota antigua (>10 años)
• Contaminación y ruido
• Combustibles fósiles costosos
• Quejas vecinales

PROBLEMAS SOCIALES:
• Desigualdad salarial
• Falta de diversidad de género
• Ausencia de mujeres en conducción
• Condiciones laborales deficientes

PROBLEMAS ECONÓMICOS:
• Crecimiento no planificado
• Mala reputación
• Altos costos operativos
• Falta de inversión`,
        image: "/ecofast/4_Actividad-1-Deteccion-de-Problemas.png",
      },
      {
        id: 5,
        title: "Actividad 2: Clasificación y Propuestas de Mejora",
        type: "activity",
        content: `DIMENSIÓN AMBIENTAL:
• Renovar flota con vehículos híbridos y Cargo Bikes
• Optimizar rutas con software específico
• Valorar la instalación de paneles solares para autoconsumo

DIMENSIÓN SOCIAL:
• Implementar política de igualdad salarial
• Crear programa de formación en diversidad
• Crear métodos transparentes para ascensos

DIMENSIÓN ECONÓMICA:
• Invertir en tecnología verde
• Buscar certificaciones de sostenibilidad (ISO)
• Desarrollar estrategias de Responsabilidad Social Corporativa`,
        image: "/ecofast/5_Actividad-2-Clasificacion-y-Propuestas-de-Mejora.png",
      },
      {
        id: 6,
        title: "Actividad 3: Investigación y Fundamentación",
        type: "activity",
        content: `A continuación, se desarrollan las propuestas de mejora organizadas según su dimensión.

DIMENSIÓN AMBIENTAL

En la dimensión ambiental, la renovación de la flota es prioritaria. La combinación de vehículos híbridos para rutas interurbanas y bicicletas de carga eléctrica (cargo bikes) para el reparto en centros urbanos se alinea directamente con los requisitos de las Zonas de Bajas Emisiones (ZBE).

Las ZBE, obligatorias en municipios de más de 50.000 habitantes según la ley 7/2021, restringen el acceso a vehículos contaminantes, haciendo de las cargo bikes una solución no solo limpia sino también estratégica para garantizar la eficiencia en el centro de las ciudades.`,
        image: "/ecofast/6_Actividad-3-Investigacion-y-Fundamentacion.png",
      },
      {
        id: 7,
        title: "Actividad 4: Conclusiones",
        type: "activity",
        content: `RENOVACIÓN DE FLOTA

La renovación de la flota con vehículos híbridos y cargo bikes reduciría emisiones y costos operativos sin verse lastrada la eficiencia operativa (Agencia Europea de Medio Ambiente, 2021).

POLÍTICAS DE IGUALDAD

La implementación de políticas de igualdad laboral mejoraría la equidad interna (Ministerio de Trabajo y Economía Social, 2020).

ADAPTACIÓN NORMATIVA

La adaptación a normativas como la Ley 7/2021 garantizaría su continuidad en entornos urbanos regulados.`,
        image: "/ecofast/7_Actividad-4-Conclusiones.png",
      },
      {
        id: 8,
        title: "Actividad 5: Reflexión Crítica",
        type: "activity",
        content: `La proliferación de empresas con la misma huella operativa actual que EcoFast colapsaría la infraestructura y la salud ambiental de la ciudad. El aumento simultáneo de emisiones, ruido y tráfico sobrepasaría la capacidad del entorno urbano para regenerarse y absorber contaminantes. Esto demuestra que la única vía posible es la de implementar modelos de distribución sostenibles, diseñados para coexistir con las ciudades y sus habitantes.`,
        image: "/ecofast/8_Actividad-5-Reflexion-Critica.png",
      },
      {
        id: 9,
        title: "Referencias",
        type: "references",
        content: `Gruber, J., & Kihm, A. (2016). Reject or embrace? Messengers and electric cargo bikes. Transportation Research Procedia, 12, 900–910.
https://doi.org/10.1016/j.trpro.2016.02.042

Archetti, C., Bertazzi, L., Hertz, A., & Speranza, M. G. (2013). A hybrid heuristic for an e-commerce delivery problem. Transportation Science, 47(3), 455–474.
https://doi.org/10.1287/trsc.2013.0490

Cant, C. (2018). Riding for Deliveroo: Resistance in the new economy. Work, Employment and Society, 32(3), 402–419.
https://doi.org/10.1177/0950017018785616

Wood A J, Graham M, Lehdonvirta V, Hjorth I. Good Gig, Bad Gig: Autonomy and Algorithmic Control in the Global Gig Economy. Work Employ Soc. 2019 Feb;33(1):56-75. doi: 10.1177/0950017018785616.

Michael Schneider, Andreas Stenger, Dominik Goeke (2014) The Electric Vehicle-Routing Problem with Time Windows and Recharging Stations. Transportation Science 48(4):500-520. https://doi.org/10.1287/trsc.2013.0490`,
        image: "/ecofast/9_Referencias.png",
      },
    ],
  },
  {
    id: "multicines",
    name: "El Reto de la Sostenibilidad Empresarial: Multicines Prince S.A.",
    slides: [
      {
        id: 1,
        title: "El Reto de la Sostenibilidad Empresarial",
        type: "cover",
        content: `En esta presentación, exploraremos la huella ecológica personal y corporativa, analizando el impacto de nuestros estilos de vida y las operaciones empresariales en el planeta. Nos adentraremos en el concepto de déficit ecológico, comparando países y proponiendo soluciones concretas para reducir la huella de carbono de una empresa.`,
        image: "/retoEmpresarial/1_El-Reto-de-la-Sostenibilidad-Empresarial.png",
      },
      {
        id: 2,
        title: "Mi Huella Ecológica Personal: Un Despertar",
        type: "conclusion",
        content: `Según la encuesta, mi estilo de vida requiere 2.25 planetas Tierra para ser sostenible a nivel global.`,
        image: "/retoEmpresarial/2_Mi-Huella-Ecologica-Personal-Un-Despertar.png",
      },
      {
        id: 3,
        title: "Déficit Ecológico: Reino Unido vs. Canadá",
        type: "analysis",
        content: `Para entender mejor el déficit ecológico, compararemos dos países con realidades muy distintas.`,
        image: "/retoEmpresarial/3_Deficit-Ecologico-Reino-Unido-vs-Canada.png",
      },
      {
        id: 4,
        title: "Estrategias para Reducir la Huella Ecológica de Multicines Prince S.A.",
        type: "strategies",
        content: `Multicines Prince S.A. puede implementar una serie de mejoras en diversas áreas.`,
        image: "/retoEmpresarial/4_Estrategias-para-Reducir-la-Huella-Ecologica-de-Multicines-Prince-SA.png",
      },
      {
        id: 5,
        title: "Cálculo de la Huella de Carbono de Multicines Prince S.A.",
        type: "analysis",
        content: `Realizamos una estimación aproximada de la huella de carbono.`,
        image: "/retoEmpresarial/5_Calculo-de-la-Huella-de-Carbono-de-Multicines-Prince-SA.png",
      },
      {
        id: 6,
        title: "Emisiones por Electricidad (Scope 2)",
        type: "analysis",
        content: `Las emisiones de Scope 2 provienen directamente del consumo eléctrico.`,
        image: "/retoEmpresarial/6_Emisiones-por-Electricidad-Scope-2.png",
      },
      {
        id: 7,
        title: "Estimación del Scope 3 y Huella Total",
        type: "analysis",
        content: `El Scope 3, que incluye emisiones indirectas como residuos y desplazamientos.`,
        image: "/retoEmpresarial/7_Estimacion-del-Scope-3-y-Huella-Total.png",
      },
      {
        id: 8,
        title: "Huella de Carbono por Persona y Conclusiones Clave",
        type: "conclusion",
        content: `Dividiendo la huella total por el número de empleados.`,
        image: "/retoEmpresarial/7_Huella-de-Carbono-por-Persona-y-Conclusiones-Clave.png",
      },
      {
        id: 9,
        title: "Priorizando Acciones para un Cine Sostenible",
        type: "strategies",
        content: `Para Multicines Prince S.A., la estrategia más efectiva debe centrarse en las áreas de mayor impacto.`,
        image: "/retoEmpresarial/8_Priorizando-Acciones-para-un-Cine-Sostenible.png",
      },
      {
        id: 10,
        title: "El Camino Hacia un Futuro Más Verde",
        type: "strategies",
        content: `La reducción de la huella ecológica es un viaje continuo.`,
        image: "/retoEmpresarial/9_El-Camino-Hacia-un-Futuro-Mas-Verde.png",
      },
      {
        id: 11,
        title: "Cifrado César",
        type: "analysis",
        content: `Cifrado de términos de sostenibilidad.`,
        image: "/retoEmpresarial/10_Cifrado-Cesar.png",
      },

      {
        id: 12,
        title: "Referencias",
        type: "references",
        content: `Referencias del proyecto.`,
        image: "/retoEmpresarial/11_Referencias.png",
      },
    ],
  },
  {
    id: "aproplast",
    name: "Renovar para Sostener: El Desafío de Aproplast S.A.",
    slides: [
      {
        id: 1,
        title: "Renovar para Sostener: El Desafío de Aproplast S.A.",
        type: "cover",
        content: "",
        image: "/aproplast/1_Renovar-para-Sostener-El-Desafio-de-Aproplast-SA.png",
      },
      {
        id: 2,
        title: "Resumen Ejecutivo",
        type: "summary",
        content: "",
        image: "/aproplast/2_Resumen-Ejecutivo.png",
      },
      {
        id: 3,
        title: "Introducción al Desafío",
        type: "intro",
        content: "",
        image: "/aproplast/3_Introduccion-al-Desafio.png",
      },
      {
        id: 4,
        title: "Modificaciones de Diseño",
        type: "activity",
        content: "",
        image: "/aproplast/4_Modificaciones-de-Diseno.png",
      },
      {
        id: 5,
        title: "Cambios en Producción",
        type: "activity",
        content: "",
        image: "/aproplast/5_Cambios-en-Produccion.png",
      },
      {
        id: 6,
        title: "Parte 2: Economía Circular - Las 5R",
        type: "activity",
        content: "",
        image: "/aproplast/6_Parte-2.png",
      },
      {
        id: 7,
        title: "Estrategias e Incentivos",
        type: "strategies",
        content: "",
        image: "/aproplast/7_Pregunta-2-Que-estrategias-o-incentivos-podria-aplicar-Aproplast-para-fomentar-la-devolucion-y-el-re.png",
      },
      {
        id: 8,
        title: "Parte 3: Procesos Sostenibles",
        type: "activity",
        content: "",
        image: "/aproplast/8_Parte-3.png",
      },
      {
        id: 9,
        title: "Verificación ISO 14001",
        type: "analysis",
        content: "",
        image: "/aproplast/9_Pregunta-2-Como-comprobarias-la-eficacia-de-la-implantacion-del-sistema-ISO-14001-dentro-de-la-empre.png",
      },
      {
        id: 10,
        title: "Parte 4: Comunicación Responsable",
        type: "activity",
        content: "",
        image: "/aproplast/10_Parte-4.png",
      },
      {
        id: 11,
        title: "Conclusión del Caso",
        type: "conclusion",
        content: "",
        image: "/aproplast/11_Conclusion-del-Caso.png",
      },
      {
        id: 12,
        title: "Referencias",
        type: "references",
        content: "",
        image: "/aproplast/12_Referencias.png",
      },
    ],
  },
  {
    id: "ecohotel",
    name: "Reto Empresarial: Un Hotel Sostenible",
    slides: [
      {
        id: 1,
        title: "RETO EMPRESARIAL: Un Hotel Sostenible",
        type: "cover",
        content: "",
        image: "/EcoHotel/1_RETO-EMPRESARIAL-Un-Hotel-Sostenible.png",
      },
      {
        id: 2,
        title: "Introducción y Objetivo",
        type: "intro",
        content: "",
        image: "/EcoHotel/2_1-Introduccion-y-objetivo.png",
      },
      {
        id: 3,
        title: "Tarea 1: Análisis del Ciclo de Vida del Turismo de Masas",
        type: "analysis",
        content: "",
        image: "/EcoHotel/3_2-Tarea-1-Analisis-del-ciclo-de-vida-del-turismo-de-masas-tradicional.png",
      },
      {
        id: 4,
        title: "Tarea 2: Evaluación de Producción Limpia",
        type: "analysis",
        content: "",
        image: "/EcoHotel/4_3-Tarea-2-Evaluacion-de-produccion-limpia.png",
      },
      {
        id: 5,
        title: "Área 3: Ecodiseño del Hotel Sostenible - Hotel EcoMar",
        type: "activity",
        content: "",
        image: "/EcoHotel/5_4-Area-3-Ecodiseno-del-hotel-sostenible-Hotel-EcoMar.png",
      },
      {
        id: 6,
        title: "Ecodiseño del Hotel EcoMar (Continuación)",
        type: "activity",
        content: "",
        image: "/EcoHotel/6_4-Area-3-Ecodiseno-del-hotel-sostenible-Hotel-EcoMar-Continuacion.png",
      },
      {
        id: 7,
        title: "Tarea 4: Certificación Medioambiental",
        type: "analysis",
        content: "",
        image: "/EcoHotel/7_5-Tarea-4-Certificacion-medioambiental.png",
      },
      {
        id: 8,
        title: "Presentación de Resultados",
        type: "summary",
        content: "",
        image: "/EcoHotel/8_6-Presentacion-de-resultados.png",
      },
      {
        id: 9,
        title: "Cuestiones Finales: ¿Qué Hemos Aprendido?",
        type: "conclusion",
        content: "",
        image: "/EcoHotel/9_7-Cuestiones-finales-Que-hemos-aprendido.png",
      },
      {
        id: 10,
        title: "Cuestiones Finales (Continuación)",
        type: "conclusion",
        content: "",
        image: "/EcoHotel/10_7-Cuestiones-finales-Que-hemos-aprendido-Continuacion.png",
      },
    ],
  },
]

export default function ProjectsSlideGallery() {
  const [currentProjectId, setCurrentProjectId] = useState("ecofast")
  const [currentSlide, setCurrentSlide] = useState(0)

  const currentProject = projects.find((p) => p.id === currentProjectId)!
  const slides = currentProject.slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const switchProject = (projectId: string) => {
    setCurrentProjectId(projectId)
    setCurrentSlide(0)
  }

  const slide = slides[currentSlide]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Proyectos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Selecciona un proyecto para explorar las diapositivas
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => switchProject(project.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentProjectId === project.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Slide */}
        <div className="relative bg-card rounded-lg border border-border mb-8 overflow-hidden">
          <div className={`p-4 md:p-8 flex flex-col items-center justify-center ${slide.image ? "" : "min-h-screen md:min-h-[800px]"}`}>
            {slide.image ? (
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-auto object-contain"
              />
            ) : (
              <>
                <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                {/* Slide Counter */}
                <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
                  Diapositiva {currentSlide + 1} de {slides.length}
                </div>
              </>
            )}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground shadow-lg backdrop-blur-sm p-3 rounded-full transition border border-border"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground shadow-lg backdrop-blur-sm p-3 rounded-full transition border border-border"
            aria-label="Siguiente diapositiva"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-primary w-8" : "bg-border w-3 hover:bg-muted-foreground"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
              title={`Diapositiva ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide List */}
        <div>
          <p className="text-sm font-semibold text-muted-foreground mb-4">Selecciona una diapositiva:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {slides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => goToSlide(index)}
                className={`p-3 text-xs font-semibold text-center rounded-lg border-2 transition-all ${
                  currentSlide === index
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="truncate">{s.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
