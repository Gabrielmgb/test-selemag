"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Star, ArrowRight, CheckCircle2, Sparkles, ImageIcon } from "lucide-react"

const audiences = [
  {
    icon: GraduationCap,
    title: "Estudantes",
    subtitle: "que querem melhorar o desempenho",
    description: "Alunos de todas as idades que buscam métodos eficazes para estudar melhor, manter o foco e alcançar resultados extraordinários nos estudos.",
    highlights: ["Técnicas de concentração", "Gestão do tempo", "Método de estudo"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Pais",
    subtitle: "que querem apoiar melhor os filhos",
    description: "Mães e pais que desejam participar ativamente da jornada educacional dos filhos e criar um ambiente propício para o aprendizado em casa.",
    highlights: ["Comunicação efetiva", "Apoio emocional", "Rotina de estudos"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    icon: Star,
    title: "Famílias",
    subtitle: "que valorizam educação de alta performance",
    description: "Famílias que entendem a importância da educação e querem investir no futuro através de conhecimento e desenvolvimento conjunto.",
    highlights: ["União familiar", "Metas compartilhadas", "Crescimento conjunto"],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500"
  }
]

export function TargetAudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorativo simples */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header com imagem lateral */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-navy text-sm font-semibold">Para Quem é o Evento</span>
            </motion.div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Este evento foi feito{" "}
              <span className="text-navy relative inline-block">
                especialmente para você
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-gold"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Se você se identifica com algum destes perfis, este é o momento de dar o próximo passo na sua jornada de transformação educacional.
            </p>

            {/* Stats inline */}
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-navy">500+</p>
                <p className="text-sm text-muted-foreground">Famílias transformadas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy">98%</p>
                <p className="text-sm text-muted-foreground">De satisfação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy">20+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-navy/10 to-gold/10">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <img src="./img-12.jpeg" alt="imagem do evento" />
              </div>
              {/* <Image src="/images/familia-estudando.jpg" alt="Família estudando juntos" fill className="object-cover" /> */}
              
              {/* Badge flutuante */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Evento Exclusivo</p>
                    <p className="text-sm text-muted-foreground">Vagas limitadas</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorativo */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full border-2 border-gold/20 rounded-3xl" />
          </motion.div>
        </div>

        {/* Cards de público-alvo */}
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-navy/20 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.color} rounded-t-2xl`} />
                
                {/* Icon e título */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${audience.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{audience.title}</h3>
                    <p className="text-sm text-gold font-medium">{audience.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                  {audience.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-border">
                  {audience.highlights.map((highlight, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 + idx * 0.05 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-foreground text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#inscricao"
                  className="mt-5 inline-flex items-center gap-2 text-navy font-semibold text-sm group/link cursor-pointer"
                >
                  <span>Quero participar</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-2xl p-6 border border-navy/10">
            <p className="text-foreground font-medium">
              Não sabe se é para você? <span className="text-muted-foreground">Fale conosco e tire suas dúvidas!</span>
            </p>
            <a
              href="#contato"
              className="bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold transition-colors duration-300 cursor-pointer flex items-center gap-2"
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
