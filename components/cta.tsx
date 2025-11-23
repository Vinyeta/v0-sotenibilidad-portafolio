import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contacto" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          ¿Tienes un Proyecto en Mente?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-12 leading-relaxed">
          Estoy disponible para proyectos de sostenibilidad, desarrollo web e innovación tecnológica. Hablemos sobre cómo puedo ayudarte a crear soluciones que impacten positivamente.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:avinetam@gmail.com"
            className="group bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center justify-center gap-3"
          >
            <Mail size={20} />
            Enviar Email
            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/alejo-viñeta/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition inline-flex items-center justify-center gap-3"
          >
            <Linkedin size={20} />
            Conectar en LinkedIn
            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition" />
          </a>
        </div>

        <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-6 md:p-8">
          <p className="text-primary-foreground/90 text-sm md:text-base">
            También puedo ayudarte con proyectos relacionados con ciberseguridad, administración de sistemas y tecnología IoT. 
            <br className="hidden md:block" />
            <strong>Tiempo de respuesta típico: 24-48 horas</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
