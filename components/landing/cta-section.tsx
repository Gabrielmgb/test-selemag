"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowRight, Clock, Calendar, MapPin, Users, Sparkles, Shield, Gift } from "lucide-react"

export function CtaSection() {
  const handleClick = () => {
    // Redireciona para WhatsApp ou link de cadastro
    window.open("https://wa.me/5561999999999?text=Olá! Gostaria de garantir minha vaga no evento.", "_blank")
  }

  return (
    <section 
      id="inscricao" 
      className="py-16 md:py-20 lg:py-32 bg-navy relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-navy-light/30 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-20 h-20 border border-gold/20 rounded-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-[15%] w-16 h-16 bg-gold/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] w-8 h-8 bg-gold/20 rounded-full hidden lg:block"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertCircle className="w-5 h-5 text-gold" />
            </motion.div>
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Vagas Limitadas</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="cta-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Garanta sua{" "}
            <span className="relative">
              <span className="text-gold">vaga agora</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gold/50 rounded-full"
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Não perca a oportunidade de participar deste evento transformador. 
            As vagas são limitadas e estão se esgotando rapidamente.
          </motion.p>

          {/* Event info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {[
              { icon: Calendar, label: "Data", value: "11 de Abril, 2026" },
              { icon: Clock, label: "Horário", value: "14h às 18h" },
              { icon: MapPin, label: "Local", value: "Brasilia - DF" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                <p className="text-primary-foreground/50 text-sm mb-1">{item.label}</p>
                <p className="text-primary-foreground font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scholarship highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/40 rounded-2xl px-6 py-4 md:px-8 md:py-5">
              <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-gold" />
              </div>
              <div className="text-left">
                <p className="text-gold font-bold text-base md:text-lg">Sorteio Exclusivo</p>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  Participe e concorra a uma bolsa de estudo para o colégio e nossos preparatórios militares
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <Button
              onClick={handleClick}
              className="cursor-pointer h-16 md:h-20 px-12 md:px-16 bg-gold hover:bg-gold/90 text-navy font-bold text-lg md:text-xl rounded-2xl shadow-2xl shadow-gold/30 transition-all hover:scale-105 hover:shadow-gold/50"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Garantir minha vaga
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {[
              { icon: Shield, text: "Inscrição Segura" },
              { icon: Gift, text: "Alunos SELEMAG: Gratuito" },
              { icon: Users, text: "Vagas Limitadas" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/60">
                <badge.icon className="w-4 h-4 text-gold" />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
          >
            {[
              { value: "500+", label: "Famílias transformadas" },
              { value: "98%", label: "Satisfação" },
              { value: "15+", label: "Anos de experiência" },
              { value: "50", label: "Vagas disponíveis" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
