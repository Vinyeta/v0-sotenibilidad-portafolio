"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            Alejo Viñeta
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/about" className="text-foreground hover:text-primary transition">
              Acerca de
            </Link>
            <a href="mailto:avinetam@gmail.com" className="text-foreground hover:text-primary transition">
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/about" className="block text-foreground hover:text-primary transition">
              Acerca de
            </Link>
            <a href="mailto:avinetam@gmail.com" className="block text-foreground hover:text-primary transition">
              Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
