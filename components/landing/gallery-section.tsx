"use client"

import { motion } from "framer-motion"
import { ImageIcon, Camera, Users, Calendar, Heart } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    label: "Palestras Inspiradoras",
    description: "Momentos de transformação",
    icon: Users,
    image: "./img-19.jpg",
    size: "lg:col-span-2 lg:row-span-2",
    minHeight: "min-h-[280px] lg:min-h-[400px]"
  },
  {
    id: 2,
    label: "Familias Unidas",
    description: "Conexao e aprendizado",
    icon: Heart,
    image: "./img-14.jpeg",
    size: "lg:col-span-1 lg:row-span-1",
    minHeight: "min-h-[180px] lg:min-h-[190px]"
  },
  {
    id: 3,
    label: "Dinamicas em Grupo",
    description: "Interação e crescimento",
    icon: Users,
    image: "./img-18.jpeg",
    size: "lg:col-span-1 lg:row-span-1",
    minHeight: "min-h-[180px] lg:min-h-[190px]"
  },
  {
    id: 4,
    label: "Workshops Práticos",
    description: "Ferramentas para o sucesso",
    icon: Calendar,
    image: "./img-13.jpeg",
    size: "lg:col-span-1 lg:row-span-1",
    minHeight: "min-h-[180px] lg:min-h-[190px]"
  },
  {
    id: 5,
    label: "Networking",
    description: "Conexões que transformam",
    icon: Users,
    image: "./img-1.jpeg",
    size: "lg:col-span-1 lg:row-span-1",
    minHeight: "min-h-[180px] lg:min-h-[190px]"
  },
  // {
  //   id: 6,
  //   label: "Momentos Especiais",
  //   description: "Memórias inesquecíveis",
  //   icon: Heart,
  //   image: "/img-13.jpeg",
  //   size: "lg:col-span-2 lg:row-span-1",
  //   minHeight: "min-h-[180px] lg:min-h-[190px]"
  // }
]

const stats = [
  { value: "500+", label: "Famílias Impactadas" },
  { value: "20+", label: "Eventos Realizados" },
  { value: "98%", label: "Satisfação" }
]

export function GallerySection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 mb-6">
            <Camera className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold">Galeria de Momentos</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Registros de <span className="text-navy">Eventos Anteriores</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Veja momentos especiais de nossos eventos e a transformação que proporcionamos às famílias participantes.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-card rounded-2xl border border-border shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-navy">{stat.value}</p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {galleryImages.map((image, index) => {
            const IconComponent = image.icon

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${image.size} relative group`}
              >
                <div className={`relative w-full h-full ${image.minHeight} rounded-2xl lg:rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all`}>

                  {/* IMAGEM */}
                  <img
                    src={image.image}
                    alt={image.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* CONTEÚDO */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4 backdrop-blur">
                        <IconComponent className="w-7 h-7 text-gold/90" />
                      </div>
                      <p className="text-white font-semibold">{image.label}</p>
                      <p className="text-white/70 text-sm">{image.description}</p>
                    </div>
                  </div>

                  {/* HOVER */}
                  <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-gold" />
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ✅ VIDEO SECTION RESTAURADA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-navy to-navy-light border border-gold/20 p-8 lg:p-12">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* VIDEO */}
              <div className="w-full flex justify-center">
                <div className="w-full max-w-[320px] lg:max-w-[360px]">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-gold/20 bg-black shadow-xl">

                    <video
                      src="./convite-selemag.mp4"
                      poster="./video-img.png"
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      playsInline
                      controlsList="nofullscreen"
                      disablePictureInPicture
                    />

                  </div>
                </div>
              </div>

              {/* TEXTO */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Veja a Transformação em Ação
                </h3>

                <p className="text-white/70 mb-6">
                  Assista ao vídeo da nossa CEO e sinta a energia transformadora que proporcionamos às famílias.
                </p>

                <div className="flex gap-4 justify-center lg:justify-start text-white/60 text-sm">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold" />
                    Depoimentos reais
                  </span>

                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-gold" />
                    Histórias inspiradoras
                  </span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}