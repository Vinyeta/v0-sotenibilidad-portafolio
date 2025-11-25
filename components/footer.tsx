import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Alejo Viñeta</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Desarrollador web especializado en sostenibilidad e innovación tecnológica. Transformando ideas en
              soluciones sostenibles.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:avinetam@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition flex items-center gap-2"
                >
                  <Mail size={16} /> Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alejo-viñeta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition flex items-center gap-2"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Localización</h4>
            <p className="text-primary-foreground/80 text-sm">Barcelona, España</p>
            <p className="text-primary-foreground/60 text-xs mt-4">Disponible para trabajo remoto</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              &copy; 2025 Alejo Viñeta Mussons. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/alejo-viñeta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition p-2 rounded-lg hover:bg-primary-foreground/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:avinetam@gmail.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition p-2 rounded-lg hover:bg-primary-foreground/10"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
