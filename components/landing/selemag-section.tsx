"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Sparkles, CheckCircle2, ImageIcon, Target, TrendingUp, Users, GraduationCap, Star, Zap, ArrowRight } from "lucide-react"

export function SelemagSection() {
  const stats = [
    { value: "500+", label: "Alunos Formados", icon: GraduationCap },
    { value: "95%", label: "Taxa de Aprovação", icon: TrendingUp },
    { value: "20+", label: "Anos de Experiência", icon: Award },
    { value: "100%", label: "Satisfação", icon: Star },
  ]

  const metodologyItems = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Metodologia orientada para alta performance acadêmica"
    },
    {
      icon: Users,
      title: "Acompanhamento Individual",
      description: "Atenção personalizada para cada aluno"
    },
    {
      icon: Zap,
      title: "Técnicas Avançadas",
      description: "Métodos comprovados de aprendizagem acelerada"
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 mb-8">
            <Trophy className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-wide">Grupo de Alta Performance</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Conheça o{" "}
            <span className="text-gold relative">
              Grupo SELEMAG
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Um grupo exclusivo de alunos que alcançam resultados extraordinários através de metodologia comprovada e acompanhamento especializado.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center group hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-primary-foreground/60 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border-2 border-gold/20 shadow-2xl shadow-gold/10">
              {/* Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-light flex items-center justify-center">
                <div className="text-center">
                 <img src="./img-3.jpeg" alt="" />
                </div>
              </div>
            </div>
            
            {/* Floating Metodology Cards */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {metodologyItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="bg-card border border-gold/20 rounded-xl p-4 shadow-xl flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          {/* Para quem ja e aluno */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-gold/20 group hover:border-gold/40 transition-all duration-300"
          >
            {/* Header with Gradient */}
            <div className="relative p-8 pb-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
              <div className="relative flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center shadow-lg shadow-gold/30">
                  <Award className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-primary-foreground">Para Alunos SELEMAG</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium">
                      <Star className="w-4 h-4 fill-gold" />
                      Você já faz parte da elite
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 pt-4">
              <p className="text-primary-foreground/70 mb-8 leading-relaxed text-lg">
                Se você já é aluno do Grupo SELEMAG, este evento é uma oportunidade exclusiva de aprofundar seus conhecimentos e fortalecer os laços com sua família no processo de aprendizagem.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Acesso prioritário ao evento",
                  "Material complementar exclusivo",
                  "Networking com outros alunos de alta performance",
                  "Participação gratuita"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center group-hover/item:bg-gold/30 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-primary-foreground/80 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#inscricao"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all cursor-pointer"
              >
                Garantir minha vaga
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Para quem ainda nao e aluno */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-gold/30 group hover:border-gold/50 transition-all duration-300 relative"
          >
            {/* Highlight Badge */}
            <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              OPORTUNIDADE
            </div>

            {/* Header with Gradient */}
            <div className="relative p-8 pb-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
              <div className="relative flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-primary-foreground">Ainda Não é Aluno?</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      Esta é sua oportunidade
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 pt-4">
              <p className="text-primary-foreground/70 mb-8 leading-relaxed text-lg">
                Este evento é a chance perfeita para conhecer de perto nossa metodologia e descobrir como o Grupo SELEMAG pode transformar a jornada educacional do seu filho.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Conheça nossa metodologia exclusiva",
                  "Veja resultados reais de nossos alunos",
                  "Tire dúvidas diretamente com especialistas",
                  "Condições especiais para novos membros"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center group-hover/item:bg-gold/40 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-primary-foreground/80 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#inscricao"
                className="inline-flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold/90 text-navy font-bold py-4 px-6 rounded-xl shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 transition-all cursor-pointer"
              >
                Quero fazer parte do SELEMAG
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
