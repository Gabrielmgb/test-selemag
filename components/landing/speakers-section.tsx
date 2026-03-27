"use client";

import { motion } from "framer-motion";
import {
  Mic,
  ImageIcon,
  Linkedin,
  Instagram,
  GraduationCap,
  Award,
  Briefcase,
  Sparkles,
  Quote,
} from "lucide-react";
import Image from "next/image";

const speaker = {
  name: "Fernando Siqueira",
  role: "Palestrante",
  transicao: "Tenente-Coronel da Polícia Militar do Distrito Federal",
  formacao: [
    "Mestrado profissional em ciências policiais de segurança e ordem pública/PMESP (Academia do Barro Branco) - 2014",
    "Pesquisa em Influência Social, Liderança e Persuasão PSTO - 2017-2019 (Aluno especial). Psicologia Social, das Organizações e do Trabalho - UnB",
    "Especialista em prevenção criminal e segurança pública - Academia de Polícia Militar de Brasília - APMB - 2015",
    "Especialista em liderança e cultura institucional - Academia de Polícia Militar de Brasília - APMB - 2022",
    "MBA em planejamento, orçamento e gestão/FGV - 2009",
  ],
  experiencia: [
    "Peacekeeper ONU - Sudão do Sul - 2013",
    "Professor de Direito Constitucional (2001/10)",
    "Negociador policial 2 Polícia Militar do Distrito Federal - Turma - 2006",
    "Aprovado no Exame 42 OAB/2025",
  ],
  linkedin: "#",
  instagram: "https://www.instagram.com/fernandosiqueira.oficial?igsh=MjFhYTlwanh4ODE3",
};

export function SpeakersSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-light" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gold/10 blur-2xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/5 blur-xl"
      />

      {/* Geometric Shapes */}
      <div className="absolute top-10 right-20 w-24 h-24 border border-gold/20 rounded-full" />
      <div className="absolute bottom-10 left-20 w-16 h-16 border border-white/10 rotate-45" />
      <div className="absolute top-1/3 left-10 w-2 h-2 bg-gold rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-3 h-3 bg-gold/50 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-6">
            <Mic className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Palestrante</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Conheça Nosso <span className="text-gold">Especialista</span>
          </h2>
          <p className="text-white/70 text-lg">
            Profissional renomado que vai compartilhar conhecimentos
            transformadores para você e sua família.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-[400px_1fr]">
                {/* Image Container */}
                <div className="relative aspect-[4/5] lg:aspect-auto bg-gradient-to-br from-navy-light to-navy overflow-hidden">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-tr-full" />

                  {/* Imagem do Palestrante */}
                  <div className="absolute inset-0">
                    <img
                      src="./fernando-4.jpg"
                      alt="Foto do Palestrante"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Overlay opcional para manter legibilidade */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Quote Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                  >
                    <Quote className="w-5 h-5 text-gold mb-2" />
                    <p className="text-white/90 text-sm italic">
                      "A educação emocional é a base para o sucesso acadêmico e
                      pessoal."
                    </p>
                  </motion.div>

                  {/* Uncomment and add your image:
                  <Image
                    src="/images/fernando-siqueira.jpg"
                    alt="Fernando Siqueira"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-gold" />
                      <span className="text-gold/80 text-sm">
                        Especialista Convidado
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-gold text-base font-medium">
                      {speaker.role}
                    </p>
                  </div>

                  {/* Formacao */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-gold" />
                      </div>
                      <h4 className="font-semibold text-white">
                        Formação Acadêmica
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {speaker.formacao.map((item, index) => (
                        <li
                          key={index}
                          className="text-white/70 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experiencia */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-gold" />
                      </div>
                      <h4 className="font-semibold text-white">
                        Experiência Profissional
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {speaker.experiencia.map((item, index) => (
                        <li
                          key={index}
                          className="text-white/70 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Transicao Badge */}
                  <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-6">
                    <Award className="w-4 h-4 text-gold" />
                    <span className="text-gold text-sm font-medium">
                      {speaker.transicao}
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <span className="text-sm text-white/60">
                      Redes sociais:
                    </span>
                    {/* <a
                      href={speaker.linkedin}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors cursor-pointer border border-white/10 hover:border-gold/30"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white/70 hover:text-gold" />
                    </a> */}
                    <a
                      href={speaker.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors cursor-pointer border border-white/10 hover:border-gold/30"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-white/70 hover:text-gold" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
