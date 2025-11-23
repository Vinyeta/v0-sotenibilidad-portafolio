export default function Hero() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Soluciones Tecnológicas para un Futuro Sostenible
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Desarrollador web especializado en crear aplicaciones innovadoras que combinan tecnología de vanguardia con
          responsabilidad ambiental.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition"
          >
            Conocer Más
          </a>
        </div>
      </div>
    </section>
  )
}
