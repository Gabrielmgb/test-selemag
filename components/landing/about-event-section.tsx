"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  Heart,
  Lightbulb,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Users,
    title: "Especialistas Renomados",
    description:
      "Evento conduzido por profissionais com vasta experiência em educação e desenvolvimento humano.",
  },
  {
    icon: Heart,
    title: "Competências Emocionais",
    description:
      "Aprenda a desenvolver inteligência emocional para lidar com desafios acadêmicos.",
  },
  {
    icon: BookOpen,
    title: "Relação Pais e Filhos",
    description:
      "Fortaleça os laços familiares e torne-se um parceiro ativo no sucesso escolar.",
  },
  {
    icon: Lightbulb,
    title: "Estratégias Práticas",
    description:
      "Técnicas aplicáveis no dia a dia para resultados imediatos e duradouros.",
  },
];

export function AboutEventSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Event Details Card with Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl shadow-navy/5">
              {/* Image Placeholder */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-muted to-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="./img-11.jpeg"
                    alt="Local do Evento"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Uncomment and add your image:
                <Image
                  src="/images/local-evento.jpg"
                  alt="Local do Evento - Águas Claras"
                  fill
                  className="object-cover"
                />
                */}
              </div>

              <div className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-gold text-sm font-medium">
                    Evento Presencial
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Informações do Evento
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data</p>
                      <p className="font-semibold text-foreground">
                        11 de Abril de 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Horário</p>
                      <p className="font-semibold text-foreground">
                        14h (Horário de Brasília)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Local</p>
                      <p className="font-semibold text-foreground">
                        Águas Claras, Quadra 103
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Brasília - DF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              Sobre o Evento
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Um encontro transformador para{" "}
              <span className="text-navy">famílias comprometidas</span> com a
              excelência
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Este evento foi cuidadosamente planejado para proporcionar uma
              experiência completa de aprendizado e transformação. Você terá
              acesso a conhecimentos exclusivos e ferramentas práticas para
              aplicar imediatamente.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
