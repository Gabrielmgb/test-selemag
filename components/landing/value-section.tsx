"use client"

import { motion } from "framer-motion"
import { Target, Compass, Heart, TrendingUp, CheckCircle2, Sparkles, ArrowRight, Brain, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const valueProps = [
  {
    icon: Compass,
    title: "Direção Clara",
    description: "Metodologia comprovada para definir objetivos e criar um plano de ação eficiente.",
    highlight: "Foco",
    color: "from-gold/20 to-gold/5"
  },
  {
    icon: Target,
    title: "Estratégia Inteligente",
    description: "Técnicas de estudo baseadas em neurociência para maximizar a retenção e o aprendizado.",
    highlight: "Método",
    color: "from-gold/25 to-gold/10"
  },
  {
    icon: Heart,
    title: "Apoio Familiar",
    description: "Ferramentas práticas para os pais se tornarem aliados no processo de aprendizagem.",
    highlight: "União",
    color: "from-gold/20 to-gold/5"
  }
]

const transformations = [
  { before: "Estudar sem método", after: "Rotina de estudos estruturada", icon: Brain },
  { before: "Pais distantes", after: "Família engajada e participativa", icon: Users },
  { before: "Ansiedade e estresse", after: "Equilíbrio emocional e foco", icon: Heart },
  { before: "Notas abaixo da média", after: "Resultados acima das expectativas", icon: Rocket }
]

const stats = [
  { value: "3x", label: "Mais produtividade" },
  { value: "85%", label: "Melhoria nas notas" },
  { value: "100%", label: "Satisfação familiar" }
]

export function ValueSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-20 w-20 h-20 border border-gold/20 rounded-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20 w-16 h-16 border border-gold/15 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-gold/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gold/40 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Nossa Proposta</span>
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Alta performance é uma combinação de{" "}
            <span className="relative">
              <span className="text-gold">estratégia, direção e apoio</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50 rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-primary-foreground/70 text-lg lg:text-xl max-w-2xl mx-auto">
            Descubra os três pilares fundamentais que transformam estudantes comuns em alunos de alta performance.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${prop.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm group-hover:border-gold/30 transition-all duration-300">
                {/* Highlight Badge */}
                <span className="absolute -top-3 right-6 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                  {prop.highlight}
                </span>
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-8 h-8 text-gold" />
                </div>
                
                <h3 className="font-semibold text-xl text-primary-foreground mb-3">{prop.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed">{prop.description}</p>
                
                {/* Bottom decoration */}
                <div className="mt-6 pt-4 border-t border-primary-foreground/10">
                  <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300 cursor-pointer">
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-[2rem] blur-xl" />
          
          <div className="relative bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 border border-gold/20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-primary-foreground">Transformação Real</h3>
                  <p className="text-primary-foreground/60 text-sm">Resultados comprovados pelos nossos alunos</p>
                </div>
              </div>
              
              {/* <Button 
                className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6 cursor-pointer w-fit"
              >
                Ver depoimentos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button> */}
            </div>
            
            {/* Transformation Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {transformations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-gold/20 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary-foreground/40 line-through text-sm">{item.before}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                      <p className="text-primary-foreground font-medium">{item.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
