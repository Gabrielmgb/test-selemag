"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ImageIcon,
  Users,
  Award,
  Star,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Event Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-5 py-2.5 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
              </span>
              <span className="text-gold text-sm font-semibold tracking-wide">
                Evento Presencial - Vagas Limitadas
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
            >
              <span className="text-balance block">Competências</span>
              <span className="text-balance block">Emocionais para</span>
              <span className="text-gold block mt-2">Alta Performance</span>
              <span className="text-balance block">Estudantil</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/85 mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Alta performance não é só estudar mais. É ter direção, estratégia
              e o apoio certo dentro de casa.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base text-primary-foreground/60 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Descubra como transformar o potencial do seu filho em resultados
              extraordinários através de um evento exclusivo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                className="cursor-pointer bg-gold hover:bg-gold/90 text-navy font-bold text-lg px-10 py-7 rounded-full shadow-xl shadow-gold/25 transition-all duration-300 hover:scale-105 hover:shadow-gold/40"
                onClick={() =>
                  document
                    .getElementById("inscricao")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Garantir minha vaga
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="cursor-pointer border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-7 rounded-full transition-all duration-300"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba mais
              </Button> */}
            </motion.div>

            {/* Event Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
            >
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-4 text-center">
                <Calendar className="h-5 w-5 text-gold mx-auto mb-2" />
                <p className="text-primary-foreground font-semibold text-sm">
                  11 Abril
                </p>
                <p className="text-primary-foreground/50 text-xs">2026</p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-4 text-center">
                <Clock className="h-5 w-5 text-gold mx-auto mb-2" />
                <p className="text-primary-foreground font-semibold text-sm">
                  14h00
                </p>
                <p className="text-primary-foreground/50 text-xs">Sábado</p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-4 text-center">
                <MapPin className="h-5 w-5 text-gold mx-auto mb-2" />
                <p className="text-primary-foreground font-semibold text-sm">
                  Aguas Claras
                </p>
                <p className="text-primary-foreground/50 text-xs">DF</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative max-w-xl mx-auto">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-black/30">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10" />

                {/* Hero Image */}
                <div className="w-full h-full relative overflow-hidden">
                  {/* IMAGEM */}
                  <img
                    src="./img-10.jpeg"
                    alt="Evento de Alta Performance Estudantil"
                    className="w-full h-full object-cover"
                  />

                  {/* OVERLAY (mantém o estilo escuro elegante) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/60 to-navy/70" />
                </div>

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="bg-navy/80 backdrop-blur-md rounded-2xl p-4 border border-gold/20">
                    <p className="text-gold font-semibold text-sm mb-1">
                      Grupo SELEMAG
                    </p>
                    <p className="text-primary-foreground/80 text-xs">
                      Transformando a educação através de competências
                      emocionais
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-3 rounded-3xl border border-gold/10 -z-10" />
              <div className="absolute -inset-6 rounded-3xl border border-gold/5 -z-20" />

              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 top-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-xl">500+</p>
                    <p className="text-muted-foreground text-xs">
                      Famílias transformadas
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 top-1/2 bg-card rounded-2xl p-4 shadow-xl border border-border hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-xl">20+</p>
                    <p className="text-muted-foreground text-xs">
                      Anos de experiência
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* <motion.div
                animate={{ y: [-5, 10, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gold rounded-2xl px-6 py-4 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-navy/20 border-2 border-gold flex items-center justify-center">
                      <Star className="w-4 h-4 text-navy" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-navy/20 border-2 border-gold flex items-center justify-center">
                      <Star className="w-4 h-4 text-navy" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-navy/20 border-2 border-gold flex items-center justify-center">
                      <Star className="w-4 h-4 text-navy" />
                    </div>
                  </div>
                  <div>
                    <p className="text-navy font-bold text-sm">98% Satisfação</p>
                    <p className="text-navy/70 text-xs">dos participantes</p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/40 text-xs font-medium tracking-wider uppercase">
            Role para baixo
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
