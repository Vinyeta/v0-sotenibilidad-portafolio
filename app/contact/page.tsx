import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Mail, Linkedin, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Contacto</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Conectemos y hablemos sobre tus proyectos de sostenibilidad e innovación.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:avinetam@gmail.com"
                      className="text-primary hover:underline"
                    >
                      avinetam@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Linkedin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/alejo-viñeta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Alejo Viñeta
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Localización</h3>
                    <p className="text-muted-foreground">Barcelona, España</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Disponibilidad</h3>
                    <p className="text-muted-foreground text-sm">Trabajo remoto disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information */}
            <div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Háblame sobre tu proyecto</h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">¿Qué tipo de proyectos realizo?</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>✓ Desarrollo web (React, Vue, Node.js)</li>
                      <li>✓ Aplicaciones IoT (ThingWorx)</li>
                      <li>✓ Proyectos de sostenibilidad</li>
                      <li>✓ Dashboards y visualización de datos</li>
                      <li>✓ Consultoría tecnológica</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proceso de contacto</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Envíame un email o conecta conmigo en LinkedIn. Responderé en 24-48 horas para discutir tus necesidades y explorar cómo puedo ayudarte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Listo para comenzar</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctame hoy para discutir tu proyecto. Juntos podemos crear soluciones tecnológicas sostenibles e innovadoras.
            </p>
            <a
              href="mailto:avinetam@gmail.com"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
