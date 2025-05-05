// src/app/layout.tsx
import { Montserrat } from 'next/font/google';
import Navbar from './Navbar';
import './globals.css';
import Script from 'next/script';
import { Metadata } from 'next';

// Configurar fuentes
const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});

// Metadatos completos para SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://nidodecuidados.com'),
  title: {
    default: 'Nido de Cuidados | Apoyo integral en tu camino a la maternidad',
    template: '%s | Nido de Cuidados',
  },
  description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente. Servicios de acompañamiento prenatal, parto, postparto y lactancia en Bogotá.',
  keywords: [
    'maternidad',
    'embarazo',
    'parto humanizado',
    'doula Bogotá',
    'lactancia materna',
    'cuidados postparto',
    'curso prenatal',
    'acompañamiento maternal',
    'salud maternal',
    'cuidado del bebé',
    'maternidad consciente',
    'parto respetado',
    'apoyo embarazo Bogotá',
    'clases prenatales',
    'preparación para el parto'
  ],
  authors: [{ name: 'Nido de Cuidados' }],
  creator: 'Nido de Cuidados',
  publisher: 'Nido de Cuidados',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Nido de Cuidados | Apoyo integral en tu camino a la maternidad',
    description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente.',
    url: 'https://nidodecuidados.com',
    siteName: 'Nido de Cuidados',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nido de Cuidados - Acompañamiento Maternal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nido de Cuidados | Apoyo integral en tu camino a la maternidad',
    description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente.',
    creator: '@nidodecuidados',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  category: 'health',
  alternates: {
    canonical: 'https://nidodecuidados.com',
  },
  other: {
    'theme-color': '#00927c',
    'msapplication-TileColor': '#00927c',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="es" 
      className={`${montserrat.variable} scroll-smooth`} 
      suppressHydrationWarning
    >
      <body className={montserrat.className} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {/* Font Awesome */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="afterInteractive"
        />
        
        {/* Schema.org JSON-LD */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Nido de Cuidados",
              "description": "Acompañamiento integral para mamás y bebés",
              "url": "https://nidodecuidados.com",
              "logo": "https://nidodecuidados.com/images/logo.png",
              "image": "https://nidodecuidados.com/images/og-image.jpg",
              "telephone": "+573332358135",
              "email": "gerencia@nidodecuidados.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 116 b # 84 a -30 Barrio Gran Granada",
                "addressLocality": "Bogotá",
                "addressRegion": "Bogotá D.C.",
                "postalCode": "111111",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 4.722658641465412,
                "longitude": -74.13111292432356
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://facebook.com/nidodecuidados",
                "https://instagram.com/nidodecuidados",
                "https://linkedin.com/company/nidodecuidados"
              ],
              "priceRange": "$$"
            })
          }}
        />
        
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}