"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: number
  title: string
  content: string
  type: "cover" | "intro" | "activity" | "summary" | "references" | "analysis" | "strategies" | "conclusion"
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
      },
      {
        id: 2,
        title: "Introducción",
        type: "intro",
        content: `Este análisis aborda de forma global el caso de "EcoFast Delivery", una empresa de reparto que se enfrenta a problemas esenciales vinculados a la gestión ambiental, la igualdad en el empleo y la eficacia de sus operaciones. El estudio busca detectar las deficiencias, proponer alternativas de mejora con evidencias contrastadas y evaluar el efecto acumulativo de las prácticas en un entorno urbano.`,
      },
      {
        id: 3,
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
      },
      {
        id: 4,
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
      },
      {
        id: 5,
        title: "Actividad 3: Investigación y Fundamentación (1/2)",
        type: "activity",
        content: `A continuación, se desarrollan las propuestas de mejora organizadas según su dimensión.

DIMENSIÓN AMBIENTAL

En la dimensión ambiental, la renovación de la flota es prioritaria. La combinación de vehículos híbridos para rutas interurbanas y bicicletas de carga eléctrica (cargo bikes) para el reparto en centros urbanos se alinea directamente con los requisitos de las Zonas de Bajas Emisiones (ZBE).

La investigación de Gruber y Kihm muestra que la adopción de bicicletas de carga eléctrica por parte de mensajeros depende tanto de características sociodemográficas como de condiciones laborales y actitudes hacia la tecnología; esto refuerza la propuesta de EcoFast de combinar cargo bikes con cambios organizativos (p. ej., incentivos, formación y pruebas piloto) para aumentar la aceptación entre conductores y mensajeros y así garantizar la viabilidad operativa en ZBE y centros urbanos. (Gruber, J., & Kihm, A. 2016).

Las ZBE, obligatorias en municipios de más de 50.000 habitantes según la ley 7/2021, restringen el acceso a vehículos contaminantes, haciendo de las cargo bikes una solución no solo limpia sino también estratégica para garantizar la eficiencia en el centro de las ciudades. Complementariamente, la optimización de rutas con software específico permite agrupar envíos por zonas y calcular trayectorias más eficientes, lo que reduce tiempo de conducción y consumo de combustible. Por último, instalar paneles solares para autoconsumo en los almacenes permitiría cargar las cargo bikes con energía limpia, reduciendo la huella de carbono y generando ahorros en la factura eléctrica a medio plazo.`,
      },
      {
        id: 6,
        title: "Actividad 3: Investigación y Fundamentación (2/2)",
        type: "activity",
        content: `DIMENSIÓN SOCIAL

En el ámbito social, es urgente establecer políticas de igualdad salarial claras y auditadas que garanticen la misma retribución entre puestos iguales. Esta medida debe ir acompañada de un programa de formación en diversidad e inclusión para sensibilizar a la plantilla, fomentar un ambiente de respeto además de atraer y retener talento femenino en puestos de conducción. La creación de métodos transparentes para ascensos, basados en criterios objetivos y medibles como la productividad, antigüedad o evaluaciones fomenta la meritocracia y la motivación.

El estudio Good Gig, Bad Gig: Autonomy and Algorithmic Control in the Global Gig Economy examina relaciones laborales en el sector de reparto y efectos de modelos organizativos en la calidad del empleo; sus hallazgos subrayan la necesidad de que EcoFast combine mejoras tecnológicas con políticas claras de empleo (igualdad salarial, formación, criterios de ascenso) para evitar precarización al introducir nuevas tecnologías y para asegurar la retención y motivación del personal. (Wood, A. J., Graham, M., Lehdonvirta, V., & Hjorth, I., 2018).

DIMENSIÓN ECONÓMICA

En la dimensión económica la inversión en tecnología verde (vehículos, software, energías renovables), aunque supone un coste alto inicial, conlleva a una importante reducción de costes operativos en el futuro y en una ventaja competitiva. Buscar certificaciones de sostenibilidad como la ISO 14001 (Gestión Ambiental) o la 45001 (Seguridad y Salud en el Trabajo) demuestra el compromiso de la empresa y mejora la credibilidad ante los clientes y administraciones públicas. Por último, desarrollar una estrategia de Responsabilidad Social Corporativa (RSC) integral permite comunicar estos avances de forma clara, fortalecer la lealtad de los clientes y asegurar su marca en un entorno cada vez más exigente.

El artículo The Electric Vehicle-Routing Problem with Time Windows and Recharging Stations aporta evidencia metodológica sobre modelos de toma de decisiones en flotas y estrategias de enrutamiento que consideran incertidumbre y costos operativos; sus resultados apoyan la recomendación de EcoFast de invertir en software de optimización de rutas y en un análisis coste-beneficio para evaluar la sustitución gradual de vehículos por alternativas más pequeñas o electrificadas, optimizando la capacidad y reduciendo costes bajo escenarios de demanda variable. (Michael Schneider, Andreas Stenger, Dominik Goeke, 2014)`,
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
      },
      {
        id: 8,
        title: "Actividad 5: Reflexión Crítica",
        type: "activity",
        content: `La proliferación de empresas con la misma huella operativa actual que EcoFast colapsaría la infraestructura y la salud ambiental de la ciudad. El aumento simultáneo de emisiones, ruido y tráfico sobrepasaría la capacidad del entorno urbano para regenerarse y absorber contaminantes. Esto demuestra que la única vía posible es la de implementar modelos de distribución sostenibles, diseñados para coexistir con las ciudades y sus habitantes.`,
      },
      {
        id: 9,
        title: "Resumen",
        type: "summary",
        content: `La empresa EcoFast Delivery se enfrenta a desafíos de sostenibilidad que amenazan su continuidad a largo plazo. En este análisis se identificarán problemas en tres dimensiones: ambiental (flota antigua, alto consumo de combustible), social (desigualdad salarial, falta de diversidad de género, condiciones laborales deficientes) y económica (crecimiento no planificado, mala reputación). Se proponen mejoras fundamentadas que incluyen transición a vehículos más eficientes, optimización de rutas, implementación de políticas de igualdad y adopción de normas ISO certificables. La investigación se sustenta en fuentes académicas y normativas como la Agencia Europea de Medio Ambiente y la Ley 7/2021 de cambio climático. El análisis concluye que la transformación hacia un modelo logístico sostenible es esencial para la viabilidad de las empresas, la salud de las personas y el ecosistema donde opera.`,
      },
      {
        id: 10,
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
      },
      {
        id: 2,
        title: "Mi Huella Ecológica Personal: Un Despertar",
        type: "conclusion",
        content: `Según la encuesta, mi estilo de vida requiere 2.25 planetas Tierra para ser sostenible a nivel global. Lo más sorprendente fue la relevancia de la facilidad para acordar la reducción de la huella entre los habitantes de mi vivienda, en lugar de cómo el número de personas afecta el consumo.

EL DIAGNÓSTICO INICIAL
Mi estilo de vida actual requiere 2.25 planetas Tierra para ser sostenible. Mi huella está determinada principalmente por mi consumo personal de recursos.

IMPACTO DE LOS CAMBIOS
Al no tener coche y vivir en un bloque de pisos, el único cambio significativo que probé fue eliminar el consumo de carne. Esta modificación redujo mi huella a 2 planetas Tierra.

FACTORES CLAVE
Experimentando con las opciones de la encuesta, descubrí que el consumo de carne y el transporte son dos de los valores que más influyen en la sostenibilidad del estilo de vida. Estos factores tienen un impacto desproporcionado en la huella ecológica.`,
      },
      {
        id: 3,
        title: "Déficit Ecológico: Reino Unido vs. Canadá",
        type: "analysis",
        content: `Para entender mejor el déficit ecológico, compararemos dos países con realidades muy distintas: el Reino Unido, con déficit, y Canadá, con superávit.

REINO UNIDO: DÉFICIT PERSISTENTE
En 2024, el Reino Unido registró 1.13 hectáreas globales (gha) de biocapacidad y 3.84 gha de huella ecológica. Su biocapacidad es baja por habitante, mientras que su huella es alta debido al consumo y la intensidad energética. Aunque la huella se ha estabilizado o decrecido ligeramente por mejoras de eficiencia, la biocapacidad no crece, manteniendo el déficit.

CANADÁ: SUPERÁVIT CON DESAFÍOS
Canadá, en el mismo año, tuvo 14.2 gha de biocapacidad y 8.11 gha de huella ecológica. Su biocapacidad es elevada gracias a sus vastas extensiones naturales. Sin embargo, su huella per cápita también es alta (transporte, energía ligada a recursos). La biocapacidad muestra una tendencia decreciente por la explotación de recursos, y la huella fluctúa con el consumo y las emisiones del sector energético.`,
      },
      {
        id: 4,
        title: "Estrategias para Reducir la Huella Ecológica de Multicines Prince S.A.",
        type: "strategies",
        content: `Multicines Prince S.A. puede implementar una serie de mejoras en diversas áreas para reducir significativamente su huella ecológica. Estas medidas abarcan desde la energía hasta la movilidad, pasando por la gestión de residuos.

ENERGÍA Y ELECTRICIDAD
Instalación de paneles solares para autoconsumo, contratación de suministro 100% renovable y sustitución de iluminación por LED con sensores de presencia.

CLIMATIZACIÓN Y EDIFICIO
Optimización de la bomba de calor, regulación por zonas y horarios, y mejora del aislamiento térmico de techos, puertas y ventanas.

RESIDUOS Y ECONOMÍA CIRCULAR
Eliminación de plásticos de un solo uso, implantación de recogida selectiva rígida y promoción de entradas digitales para reducir el uso de papel.

MOVILIDAD Y ACCESIBILIDAD
Incentivar el uso del transporte público con descuentos, y habilitar aparcamientos para bicicletas y estaciones de sharing cercanas.`,
      },
      {
        id: 5,
        title: "Cálculo de la Huella de Carbono de Multicines Prince S.A.",
        type: "analysis",
        content: `Realizamos una estimación aproximada de la huella de carbono de Multicines Prince S.A. basándonos en los datos proporcionados y algunas suposiciones clave. Este cálculo nos dará una referencia rápida de su impacto ambiental.

50.000 kWh - Consumo Eléctrico Anual
La principal fuente de energía del cine.

30 - Plantilla de Empleados
Número de personas que trabajan en el cine.

5.000 m2 - Superficie del Edificio
Tamaño total de las instalaciones.

0 tCO2e - Scope 1 (Estimado)
Asumido por falta de datos de combustibles fósiles o fugas de refrigerante.`,
      },
      {
        id: 6,
        title: "Emisiones por Electricidad (Scope 2)",
        type: "analysis",
        content: `Las emisiones de Scope 2 provienen directamente del consumo eléctrico. Hemos calculado dos escenarios basados en diferentes factores de emisión para la electricidad.

Escenario A (Conservador): 0.233 kg CO2e/kWh → 11.65 tCO2e/año
Escenario B (Optimista): 0.185 kg CO2e/kWh → 9.25 tCO2e/año

El consumo de 50.000 kWh anuales se traduce en 11.65 tCO2e/año en el escenario más conservador y 9.25 tCO2e/año en el más optimista. Esto subraya la importancia de la fuente de energía eléctrica.`,
      },
      {
        id: 7,
        title: "Estimación del Scope 3 y Huella Total",
        type: "analysis",
        content: `El Scope 3, que incluye emisiones indirectas como residuos y desplazamientos, se estima como un 30% del Scope 2. Sumando todos los scopes, obtenemos la huella de carbono total estimada.

Scope 3 (Escenario A): 3.50 tCO2e
Scope 3 (Escenario B): 2.78 tCO2e

EMISIONES INDIRECTAS ESTIMADAS

La huella de carbono total estimada para Multicines Prince S.A. es de 15.15 tCO2e/año en el escenario A y 12.03 tCO2e/año en el escenario B. Estas cifras nos dan una visión completa del impacto.`,
      },
      {
        id: 8,
        title: "Huella de Carbono por Persona y Conclusiones Clave",
        type: "conclusion",
        content: `Dividiendo la huella total por el número de empleados, obtenemos un indicador per cápita que facilita la comprensión del impacto individual.

INDICADORES POR PERSONA (30 empleados)
Escenario A: 0.505 tCO2e/persona
Escenario B: 0.401 tCO2e/persona

Estos valores muestran el impacto promedio de cada empleado en la huella de carbono total de la empresa.

CONCLUSIONES PRINCIPALES
• La mayor parte de la huella proviene del consumo eléctrico (Scope 2). Las medidas de reducción de consumo eléctrico son cruciales.
• El Scope 3 es una aproximación, pero las acciones en economía circular y movilidad (Tarea 3) tendrán un impacto significativo, especialmente por el transporte de clientes.`,
      },
      {
        id: 9,
        title: "Priorizando Acciones para un Cine Sostenible",
        type: "strategies",
        content: `Para Multicines Prince S.A., la estrategia más efectiva para reducir su huella ecológica debe centrarse en las áreas de mayor impacto, comenzando por la energía y la gestión de residuos.

LA BASE DE LA PIRÁMIDE: ENERGÍA
La base de la pirámide, la energía, representa el área con mayor potencial de reducción de emisiones, seguida por la climatización y la gestión de residuos. La movilidad, aunque importante, tiene un impacto más difuso y depende en gran medida de los hábitos de los clientes.`,
      },
      {
        id: 10,
        title: "El Camino Hacia un Futuro Más Verde",
        type: "strategies",
        content: `La reducción de la huella ecológica, tanto a nivel personal como empresarial, es un viaje continuo que requiere compromiso y acciones concretas. Cada pequeña mejora contribuye a un impacto global significativo.

EVALUAR - Comprender la huella actual.
PLANIFICAR - Establecer objetivos y estrategias.
IMPLEMENTAR - Aplicar las medidas de mejora.
COMUNICAR - Compartir logros y fomentar el cambio.
MONITORIZAR - Seguir el progreso y ajustar.

Este ciclo de mejora continua es esencial para construir un futuro más sostenible para todos. La colaboración y la innovación son clave para superar los retos ambientales que enfrentamos.`,
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

  const renderSlideContent = () => {
    switch (slide.type) {
      case "cover":
        return (
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{slide.title}</h1>
            <div className="space-y-4 mt-12 text-lg text-muted-foreground whitespace-pre-line">{slide.content}</div>
          </div>
        )
      case "intro":
      case "analysis":
      case "strategies":
      case "conclusion":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">{slide.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{slide.content}</p>
          </div>
        )
      case "activity":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">{slide.title}</h2>
            <div className="text-base text-muted-foreground whitespace-pre-line leading-relaxed">{slide.content}</div>
          </div>
        )
      case "summary":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">{slide.title}</h2>
            <p className="text-base text-muted-foreground leading-relaxed">{slide.content}</p>
          </div>
        )
      case "references":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">{slide.title}</h2>
            <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed font-mono">
              {slide.content}
            </div>
          </div>
        )
      default:
        return null
    }
  }

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
          <div className="min-h-screen md:min-h-[600px] p-8 md:p-12 flex flex-col justify-between">
            <div>{renderSlideContent()}</div>

            {/* Slide Counter */}
            <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
              Diapositiva {currentSlide + 1} de {slides.length}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition"
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
