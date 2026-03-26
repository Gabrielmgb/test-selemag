"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Brain,
  Users,
  BookOpen,
  ArrowRight,
  Sparkles,
  Heart,
  Target,
  Lightbulb,
} from "lucide-react";

const painPoints = [
  {
    icon: Brain,
    title: "Falta de Foco",
    description:
      "Dificuldade em manter a concentração durante os estudos e realizar tarefas até o fim.",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-600",
  },
  {
    icon: AlertCircle,
    title: "Baixo Rendimento",
    description:
      "Notas abaixo do esperado mesmo com horas de estudo e esforço constante.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-600",
  },
  {
    icon: Users,
    title: "Falta de Apoio",
    description:
      "Pais que não sabem como ajudar ou participar ativamente da vida escolar.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Desorganização",
    description:
      "Ausência de método, rotina e estratégias eficientes para aprender.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PainSection() {
  return (
    <section
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background via-navy/5 to-background relative overflow-hidden"
      aria-labelledby="pain-section-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-navy/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-16 h-16 border-2 border-gold/20 rounded-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[10%] w-20 h-20 border-2 border-navy/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[5%] w-12 h-12 bg-gold/10 rounded-lg rotate-45"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-navy/10 border border-navy/20 rounded-full px-5 py-2.5 mb-6"
          >
            <Heart className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-navy">
              Você não está sozinho
            </span>
          </motion.div>

          <h2
            id="pain-section-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Se você tem se preocupado com o{" "}
            <span className="relative inline-block">
              <span className="text-navy">desempenho escolar</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-gold/30 -z-10 origin-left rounded-sm"
              />
            </span>
            , essa mensagem é para você
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Muitas famílias enfrentam os mesmos desafios. Reconhecer é o
            primeiro passo para a transformação.
          </p>
        </motion.div>

        {/* Visual representation - Illustration area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-navy/5 via-transparent to-gold/5 rounded-3xl p-8 lg:p-12 border border-navy/10 overflow-hidden">
            {/* Central illustration placeholder */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left side - Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-navy/20 relative overflow-hidden">
                  {/* IMAGEM (fundo) */}
                  <img
                    src="./img-8.jpeg"
                    alt="Desempenho escolar e apoio familiar"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />

                  {/* Overlay escuro opcional */}
                  <div className="absolute inset-0 bg-black/20 z-0" />

                  {/* CONTEÚDO (por cima) */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-sm">
                      {painPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`bg-gradient-to-br ${point.color} backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center text-center`}
                        >
                          <point.icon
                            className={`w-8 h-8 ${point.iconColor} mb-2`}
                          />
                          <span className="text-xs font-medium text-white">
                            {point.title}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Pain points list */}
              <div className="w-full lg:w-1/2 space-y-4">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-gold/30 hover:bg-card transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <point.icon className={`w-6 h-6 ${point.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-navy transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Empathy message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-gold" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              A boa noticia?
            </h3>
          </div>
          <p className="text-muted-foreground text-lg">
            Esses desafios podem ser superados com as estratégias certas e o
            apoio adequado. Nosso evento foi criado exatamente para isso.
          </p>
        </motion.div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-gradient-to-r from-navy via-navy to-navy-light rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id="grid-cta"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-cta)" />
            </svg>
          </div>

          <div className="relative z-10 text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Target className="w-5 h-5 text-gold" />
              <p className="text-lg font-semibold text-white">
                Existe uma solução comprovada
              </p>
            </div>
            <p className="text-white/80 text-sm">
              Descubra como transformar esses desafios em oportunidades de
              crescimento para toda a família
            </p>
          </div>

          <a
            href="#inscricao"
            className="cursor-pointer relative z-10 inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 group whitespace-nowrap"
          >
            Quero participar
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
