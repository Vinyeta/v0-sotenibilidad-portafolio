import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Scale, Leaf, Eye } from "lucide-react"

export default function EticaIA() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            La ética en la IA: tres ejes inseparables
          </h1>
          <p className="text-muted-foreground mb-12">
            Reflexión inspirada en la iniciativa{" "}
            <a
              href="https://edutechcluster.org/etica-en-joc/?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ética en juego
            </a>{" "}
            de Edutech Cluster.
          </p>

          <div className="prose prose-invert max-w-none mb-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              La inteligencia artificial ya no es un experimento de laboratorio. Hoy decide quién recibe un crédito,
              qué currículum llega a un seleccionador y qué contenidos consumimos cada día. Cada una de esas
              decisiones lleva, dentro, una responsabilidad humana que no podemos subcontratar al algoritmo. La
              iniciativa <em>Ética en juego</em> sostiene una idea poderosa: <strong className="text-foreground">una IA
              puede ser muy precisa y simultáneamente muy injusta</strong>. Esa frase resume el reto.
            </p>

            <p>
              <strong className="text-foreground">Sesgos en los datos: justicia y equidad.</strong> Los modelos
              aprenden de lo que les damos. Si los datos históricos contienen desigualdades de género, clase o raza,
              el modelo las codifica como "patrones" y las reproduce con apariencia de objetividad. La equidad no se
              construye al final, eligiendo una métrica de <em>fairness</em>; se construye desde el principio,
              auditando datasets, midiendo paridad y aceptando que ningún sistema es neutral por defecto. Mitigar el
              sesgo es una decisión activa, no una propiedad emergente.
            </p>

            <p>
              <strong className="text-foreground">Sostenibilidad.</strong> Un modelo que ahorra energía en producción
              puede, paradójicamente, haber consumido más en su entrenamiento de la que ahorrará en años de
              inferencia. La huella de carbono del propio modelo entra en la ecuación: programar el entrenamiento en
              franjas con mix renovable, cuantizar pesos para inferir más ligero y reentrenar solo cuando es
              necesario son decisiones técnicas con peso ambiental.
            </p>

            <p>
              <strong className="text-foreground">Transparencia y explicabilidad.</strong> Si un sistema afecta a una
              persona, esa persona tiene derecho a entender por qué. La explicabilidad no exige revelar secretos
              comerciales: basta con la cadena causal observable —qué datos entraron, qué alternativas se descartaron,
              quién puede revertir la decisión—. Un sistema que no sabe explicarse no debería decidir.
            </p>

            <p className="text-foreground font-semibold border-l-4 border-primary pl-4 italic">
              Las tres dimensiones no se priorizan por separado. Son tres caras de un mismo diseño: técnica, ética y
              profesionalmente bien hecho.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <Scale className="text-accent mb-4" size={32} />
              <h3 className="font-bold text-lg text-foreground mb-2">Justicia y equidad</h3>
              <p className="text-muted-foreground text-sm">
                Auditar los datos antes de entrenar. Medir paridad entre grupos. Aceptar que la neutralidad no es el
                punto de partida, sino una conquista deliberada.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Leaf className="text-accent mb-4" size={32} />
              <h3 className="font-bold text-lg text-foreground mb-2">Sostenibilidad</h3>
              <p className="text-muted-foreground text-sm">
                Considerar el coste energético del modelo: entrenar con mix renovable, cuantizar la inferencia y
                reentrenar solo cuando hay deriva real.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Eye className="text-accent mb-4" size={32} />
              <h3 className="font-bold text-lg text-foreground mb-2">Transparencia</h3>
              <p className="text-muted-foreground text-sm">
                Hacer trazables las decisiones automatizadas. Conservar la cadena causal sin obligar a divulgar el
                código fuente del modelo.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Esta reflexión informa el diseño del proyecto EcoBalance AI, presentado en mi portafolio.
            </p>
            <a
              href="/#proyectos"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
