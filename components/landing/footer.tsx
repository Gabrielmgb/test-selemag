"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 md:py-10 bg-navy border-t border-primary-foreground/10" role="contentinfo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
              <span className="font-serif font-bold text-navy text-lg">S</span>
            </div>
            <div>
              <span className="font-serif font-bold text-primary-foreground text-lg">SELEMAG</span>
              <p className="text-xs text-primary-foreground/50">Grupo de Alta Performance</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href="#inscricao"
              className="cursor-pointer text-sm text-primary-foreground/70 hover:text-gold transition-colors focus:outline-none focus:text-gold"
            >
              Inscreva-se
            </a>
            <a
              href="https://wa.me/556133261922"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm text-primary-foreground/70 hover:text-gold transition-colors focus:outline-none focus:text-gold"
            >
              Contato
            </a>
          </div>

          <p className="text-sm text-primary-foreground/50 text-center md:text-right">
            &copy; {currentYear} Grupo SELEMAG. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
