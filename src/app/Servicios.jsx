'use client';
import { motion } from 'framer-motion';

export default function Servicios() {
  const servicios = [
    {
      id: 'prenatal',
      titulo: 'Preparación al Parto',
      descripcion: 'Brindamos sesiones personalizadas para preparar a las futuras madres, sus parejas y familias para el parto.',
      imagen: '/images/services_img_1.png',
      enlace: '/prenatal'
    },
    {
      id: 'postparto',
      titulo: 'Cuidado Postparto',
      descripcion: 'Proporcionamos un servicio de acompañamiento postparto, apoyando a la madre en la recuperación física y emocional.',
      imagen: '/images/services_img_2.png',
      enlace: '/cuidados-postparto'
    },
    {
      id: 'lactancia',
      titulo: 'Asesoría en Lactancia',
      descripcion: 'Incluye orientación sobre la importancia de la lactancia materna, técnicas de agarre, posiciones cómodas etc.',
      imagen: '/images/services_img_3.png',
      enlace: '/asesoria-lactancia'
    },
    {
      id: 'anticoncepcion',
      titulo: 'Asesoría en Anticoncepción',
      descripcion: 'La maternidad es un viaje único y personal, y cada mujer merece orientación profesional para tomar decisiones.',
      imagen: '/images/services_img_4.png',
      enlace: '/anticoncepcion'
    }
  ];

  // Variantes para la animación de la tarjeta (movimiento hacia arriba)
  const cardVariants = {
    hover: {
      y: -15, // Mover hacia arriba 15px
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00927c] uppercase font-medium tracking-wider mb-2 inline-block">NUESTROS SERVICIOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apoyo Integral en tu Camino a la Maternidad
          </h2>
          <p className="text-gray-600 mb-10">
            Nido de Cuidados es un espacio dedicado a brindar un apoyo cálido y continuo a la mujer en
            cada etapa de su viaje hacia la maternidad.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio) => (
            <motion.div 
              key={servicio.id} 
              className="flex flex-col"
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Imagen con bordes redondeados */}
              <div className="mb-4" style={{ 
                width: '100%', 
                height: '280px', 
                borderRadius: '28px', 
                overflow: 'hidden'
              }}>
                <img 
                  src={servicio.imagen} 
                  alt={servicio.titulo} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{servicio.titulo}</h3>
              <p className="text-gray-600 mb-5 text-sm">{servicio.descripcion}</p>
              
              {/* Botón con flecha y esquinas específicamente redondeadas */}
              <a href={servicio.enlace} className="inline-block">
                <div 
                  className="w-12 h-12 bg-[#e1ccad] flex items-center justify-center"
                  style={{ 
                    borderRadius: '18px 0 18px 0' 
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}