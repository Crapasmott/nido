// src/app/prenatal/layout.jsx
// ¡NO INCLUIR 'use client' AQUÍ!

export const metadata = {
    title: 'Curso Prenatal Personalizado | Preparación al Parto en Bogotá',
    description: 'Clases personalizadas de preparación al parto, modalidad virtual, presencial o híbrida.',
    keywords: [
      'curso prenatal Bogotá',
      'clases prenatales',
      'preparación al parto'
    ],
    openGraph: {
      title: 'Curso Prenatal Personalizado',
      description: 'Te guiamos para que te conectes con tu cuerpo y tu bebé',
      images: ['/images/presencial.jpg']
    }
  };
  
  export default function Layout({ children }) {
    return (
      <>
        {/* Datos estructurados para la página de curso prenatal */}
        <script
          async
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalService",
              "name": "Curso Prenatal Personalizado - Nido de Cuidados",
              "description": "Curso integral de preparación al parto con enfoque personalizado para futuras madres y sus familias.",
              "provider": {
                "@type": "MedicalBusiness",
                "name": "Nido de Cuidados",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Calle 116 b # 84 a -30 Barrio Gran Granada",
                  "addressLocality": "Bogotá",
                  "addressRegion": "Bogotá D.C.",
                  "postalCode": "111111",
                  "addressCountry": "CO"
                },
                "telephone": "+573332358135",
                "url": "https://nidodecuidados.com"
              },
              "about": {
                "@type": "Thing",
                "name": "Preparación al parto"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Mamás embarazadas y sus familias"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "COP",
                "availability": "https://schema.org/InStock",
                "url": "https://nidodecuidados.com/prenatal"
              },
              "image": "https://nidodecuidados.com/images/presencial.jpg",
              "teaches": [
                "Reconocimiento del cuerpo y emociones durante el embarazo",
                "Nutrición durante la gestación y lactancia",
                "Cuidado del piso pélvico",
                "Proceso de parto",
                "Lactancia materna",
                "Cuidados postparto",
                "Cuidados del recién nacido",
                "Vínculo afectivo con el bebé",
                "Rutinas familiares saludables"
              ]
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          async
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuáles son las modalidades del curso prenatal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ofrecemos tres modalidades: Virtual (sesiones por Zoom con material descargable), Presencial (clases en nuestro centro con material físico) e Híbrida (combinación de ambas según tu conveniencia)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿En qué momento del embarazo es recomendable iniciar el curso?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lo ideal es comenzar el curso entre las semanas 28-32 de embarazo, aunque puedes iniciar en cualquier momento de la gestación."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué incluye el curso prenatal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El curso incluye 9 módulos que abarcan desde reconocimiento del cuerpo y emociones, nutrición, preparación física, trabajo de parto, lactancia, cuidados postparto hasta el bienestar familiar."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Puedo descargar el material del curso?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, ofrecemos material descargable en PDF que incluye el programa detallado, recursos adicionales, calendario de sesiones y material de apoyo."
                  }
                }
              ]
            })
          }}
        />
        
        {children}
      </>
    );
  }