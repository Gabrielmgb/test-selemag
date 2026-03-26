import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-serif'
})

const poppins = Poppins({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-sans'
})

const siteConfig = {
  name: 'SELEMAG',
  title: 'Competências Emocionais para Alta Performance Estudantil',
  description: 'Evento exclusivo em Brasília sobre alta performance estudantil. Aprenda estratégias práticas para melhorar o desempenho escolar através de competências emocionais e apoio familiar. Vagas limitadas.',
  url: 'https://selemag.com.br',
  locale: 'pt_BR',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'educação',
    'alta performance',
    'estudantes',
    'competências emocionais',
    'SELEMAG',
    'Brasília',
    'evento educacional',
    'desempenho escolar',
    'apoio familiar',
    'inteligência emocional',
    'sucesso acadêmico',
    'metodologia de estudo',
    'foco nos estudos',
    'Águas Claras',
    'Distrito Federal',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.title} - ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
    creator: '@selemag',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: 'education',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a5f' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a5f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Competências Emocionais para Alta Performance Estudantil',
    description: metadata.description,
    startDate: '2026-04-11T14:00:00-03:00',
    endDate: '2026-04-11T18:00:00-03:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Águas Claras',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Águas Claras',
        addressRegion: 'DF',
        addressCountry: 'BR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Grupo SELEMAG',
      url: 'https://selemag.com.br',
    },
    performer: {
      '@type': 'Person',
      name: 'Fernando Siqueira',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'BRL',
      validFrom: '2026-01-01',
    },
  }

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
