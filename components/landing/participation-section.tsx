"use client"

import { motion } from "framer-motion"
import { Gift, MapPin, Package, CheckCircle, Heart, Users, Sparkles, ArrowRight, Clock } from "lucide-react"

const locations = [
  {
    name: "Seleção Educacional Asa Norte",
    area: "Asa Norte",
    hours: "Seg-Sex: 8h às 18h"
  },
  {
    name: "MAG Educacional 302 Norte",
    area: "302 Norte",
    hours: "Seg-Sex: 8h às 18h"
  },
  {
    name: "MAG Educacional Águas Claras",
    area: "Águas Claras",
    hours: "Seg-Sex: 8h às 18h"
  }
]

const benefits = [
  { icon: CheckCircle, text: "Certificado de Participação" },
  { icon: Users, text: "Networking com Especialistas" },
  { icon: Heart, text: "Material Exclusivo" },
  { icon: Sparkles, text: "Sorteios no Evento" }
]

export function ParticipationSection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,58,95,0.05),transparent_50%)]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="participation-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#participation-grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-20 h-20 rounded-full bg-gold/10 blur-2xl"
        />
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[10%] w-32 h-32 rounded-full bg-navy/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
            <Gift className="w-4 h-4" />
            Como Participar
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Condições de{" "}
            <span className="text-navy relative">
              Participação
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C47.6667 2.16667 141.4 -2.4 199 5.5" stroke="currentColor" strokeWidth="2" className="text-gold"/>
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Queremos que todos possam participar. Por isso, criamos condições especiais para cada perfil.
          </p>
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <benefit.icon className="w-5 h-5 text-gold" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Alunos SELEMAG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-gold/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-card rounded-3xl p-8 lg:p-10 border-2 border-gold shadow-xl shadow-gold/10 h-full">
              {/* Badge */}
              <div className="absolute -top-4 right-8">
                {/* <span className="inline-flex items-center gap-1 bg-gold text-navy text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Recomendado
                </span> */}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold/80 flex items-center justify-center shadow-lg shadow-gold/30">
                  <Gift className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Alunos SELEMAG</h3>
                  <p className="text-gold font-semibold">Entrada Gratuita</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Como membro do Grupo SELEMAG, você tem acesso gratuito e prioritário ao evento. Basta realizar sua inscrição para garantir sua vaga.
              </p>

              <div className="space-y-4 mb-8">
                {["Acesso prioritário ao evento", "Material exclusivo incluso", "Certificado de participação", "Assento reservado"].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl p-6 text-center">
                <span className="text-4xl font-serif font-bold text-gold">100% Gratuito</span>
                <p className="text-sm text-muted-foreground mt-2">para alunos ativos do Grupo SELEMAG</p>
              </div>
            </div>
          </motion.div>

          {/* Não Alunos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative group"
          >
            <div className="relative bg-card rounded-3xl p-8 lg:p-10 border border-border hover:border-navy/30 transition-colors duration-300 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-lg">
                  <Package className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Publico Externo</h3>
                  <p className="text-navy font-semibold">Doacao Solidaria</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Para quem ainda não é aluno SELEMAG, pedimos uma doação de 3kg de alimentos não perecíveis. Esta ação beneficia famílias em situação de vulnerabilidade.
              </p>

              <div className="bg-gradient-to-r from-navy/10 to-navy/5 rounded-2xl p-6 text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  <span className="text-4xl font-serif font-bold text-navy">1 kg</span>
                </div>
                <p className="text-sm text-muted-foreground">de alimentos não perecíveis</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  Locais de Entrega:
                </p>
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{location.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3" />
                          {location.hours}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ainda tem dúvidas sobre como participar?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors cursor-pointer"
          >
            Entre em contato conosco
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
