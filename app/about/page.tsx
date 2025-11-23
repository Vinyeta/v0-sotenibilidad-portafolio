import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Code2, Leaf, Zap } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Acerca de Mí</h1>
          
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Soy Alejo Viñeta Mussons, un desarrollador web con experiencia en la creación de sitios y aplicaciones optimizadas para rendimiento y accesibilidad. Me especializo en HTML, CSS, JavaScript y frameworks como React y Vue, con conocimientos en diseño responsivo y la plataforma IoT ThingWorx.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Mi objetivo es combinar mi experiencia en desarrollo web con mis nuevos conocimientos en administración de sistemas y ciberseguridad para crear soluciones tecnológicas que no solo sean eficientes, sino también responsables con el medio ambiente.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Creo firmemente que la tecnología debe ser una herramienta para construir un futuro más sostenible. Cada proyecto que emprendo refleja este compromiso con la sostenibilidad y la innovación responsable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <Zap className="text-accent mb-4" size={32} />
              <h3 className="font-bold text-lg text-foreground mb-2">Desarrollo Web</h3>
              <p className="text-muted-foreground text-sm">Experto en React, Vue, JavaScript y diseño responsivo para aplicaciones web modernas.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Code2 className="text-accent mb-4" size={32} />
              <h3 className="font-bold text-lg text-foreground mb-2">IoT & Sistemas</h3>
              <p className="text-muted-foreground text-sm">Experiencia con ThingWorx y administración de sistemas para soluciones conectadas.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Leaf className="text-accent mb-4" size={32} />
              <h3 className="font-bold text-lg text-foreground mb-2">Sostenibilidad</h3>
              <p className="text-muted-foreground text-sm">Comprometido con crear tecnología que beneficie al planeta y las comunidades.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Experiencia Profesional</h2>
            
            <div className="space-y-6">
              <div className="pb-6 border-b border-border last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-foreground">Desarrollador Web</h3>
                  <span className="text-sm text-muted-foreground">2023 - Presente</span>
                </div>
                <p className="text-accent font-semibold mb-2">EverlyRusher (Remoto)</p>
                <p className="text-muted-foreground">Participé en la creación de aplicaciones web optimizadas.</p>
              </div>

              <div className="pb-6 border-b border-border last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-foreground">Desarrollador IoT</h3>
                  <span className="text-sm text-muted-foreground">2021 - 2023</span>
                </div>
                <p className="text-accent font-semibold mb-2">Adasoft, Barcelona</p>
                <p className="text-muted-foreground">Desarrollé una aplicación con ThingWorx para control de producción en fabricación.</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-foreground">Profesor Particular de Matemáticas</h3>
                  <span className="text-sm text-muted-foreground">2018 - 2019</span>
                </div>
                <p className="text-accent font-semibold mb-2">CAVI, Barcelona</p>
                <p className="text-muted-foreground">Enseñanza de matemáticas a nivel escolar y preuniversitario.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
              <div className="space-y-3">
                {['React', 'Vue.js', 'JavaScript', 'HTML & CSS', 'Node.js', 'ThingWorx', 'Laravel', 'PHP', 'Linux'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Idiomas</h2>
              <div className="space-y-3">
                {[
                  { lang: 'Español', level: 'Nativo' },
                  { lang: 'Catalán', level: 'Nativo' },
                  { lang: 'Inglés', level: 'C2' },
                  { lang: 'Alemán', level: 'A2' },
                  { lang: 'Francés', level: 'A2' },
                ].map((item) => (
                  <div key={item.lang} className="flex items-center justify-between">
                    <span className="text-foreground">{item.lang}</span>
                    <span className="text-muted-foreground text-sm">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">¿Quieres conocer más sobre mis proyectos?</p>
            <a
              href="/#proyectos"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
