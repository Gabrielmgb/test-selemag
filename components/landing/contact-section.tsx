"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, Clock, MapPin, Send, Headphones, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const whatsappNumber = "556133261922"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre o evento de Competências Emocionais para Alta Performance Estudantil.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const benefits = [
    "Resposta rápida",
    "Atendimento personalizado",
    "Tire todas as dúvidas",
    "Sem compromisso"
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-navy/5 to-background overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Gradientes decorativos */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/10 rounded-full blur-3xl" />
        
        {/* Formas flutuantes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 border border-gold/20 rounded-2xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-20 h-20 border border-navy/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-20 w-8 h-8 bg-gold/20 rounded-full blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
            <Headphones className="w-4 h-4" />
            Suporte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fale{" "}
            <span className="text-navy relative">
              Conosco
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gold rounded-full"
              />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar. Entre em contato e tire todas as suas dúvidas sobre o evento.
          </p>
        </motion.div>

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
            {/* Gradiente decorativo no topo */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-navy" />
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* Lado esquerdo - Info */}
              <div className="p-8 lg:p-12 bg-navy text-white relative overflow-hidden">
                {/* Pattern decorativo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-60 h-60 border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Estamos aqui para ajudar
                  </h3>
                  <p className="text-white/80 mb-8">
                    Tire suas dúvidas, faça sua inscrição ou saiba mais sobre o evento. Responderemos o mais rápido possível.
                  </p>
                  
                  {/* Beneficios */}
                  <div className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-gold" />
                        </div>
                        <span className="text-white/90">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Horario */}
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Clock className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-sm text-white/70">Horário de atendimento</p>
                      <p className="font-medium">Seg a Sex, 8h as 18h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Lado direito - Contatos */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* WhatsApp - Principal */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-7 rounded-2xl shadow-lg shadow-green-600/20 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-6 h-6 mr-3" />
                        Falar pelo WhatsApp
                        <Send className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-2">
                      Resposta em até 2 horas
                    </p>
                  </motion.div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-4 text-muted-foreground">ou entre em contato por</span>
                    </div>
                  </div>
                  
                  {/* Telefone e Email */}
                  <div className="grid gap-4">
                    <motion.a
                      href="tel:+556133261922"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex items-center gap-4 p-4 bg-secondary/50 hover:bg-secondary rounded-xl border border-border transition-all hover:border-gold/30 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Telefone</p>
                        <p className="font-semibold text-foreground text-lg">(61) 3326-1922</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:contato@selemag.com.br"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="flex items-center gap-4 p-4 bg-secondary/50 hover:bg-secondary rounded-xl border border-border transition-all hover:border-gold/30 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Mail className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">E-mail</p>
                        <p className="font-semibold text-foreground text-lg">contato@selemag.com.br</p>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Endereco */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-muted-foreground">
              Asa Norte, Brasília - DF
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
