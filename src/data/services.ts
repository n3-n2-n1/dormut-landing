export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  images: string[];
  technicalSpecs: {
    title: string;
    value: string;
  }[];
}

export const services: ServiceDetail[] = [
  {
    slug: "soldadura",
    title: "Servicios de Soldadura",
    shortDescription: "Ofrecemos servicios profesionales de soldadura para todo tipo de proyectos. Utilizamos técnicas avanzadas y materiales de alta calidad para garantizar uniones fuertes y duraderas, adaptándonos a tus necesidades específicas.",
    longDescription: "Nuestro servicio de soldadura profesional ofrece soluciones integrales para una amplia gama de necesidades industriales y comerciales. Contamos con técnicos certificados y equipamiento de última generación para garantizar la máxima calidad en cada proyecto.",
    features: [
      "Soldadura TIG para trabajos de alta precisión",
      "Soldadura MIG para proyectos de producción",
      "Soldadura por arco para trabajos estructurales",
      "Soldadura de acero inoxidable",
      "Soldadura de aluminio y metales especiales",
      "Inspección y control de calidad"
    ],
    images: [
      "/work/1.png",
      "/work/2.png",
      "/work/3.png"
    ],
    technicalSpecs: [
      { title: "Tipos de soldadura", value: "TIG, MIG, Arco" },
      { title: "Materiales", value: "Acero, Aluminio, Inoxidable" },
      { title: "Certificaciones", value: "ISO 9001, EN 1090" },
      { title: "Capacidad", value: "Hasta 50mm de espesor" }
    ]
  },
  {
    slug: "cnc",
    title: "Corte por CNC",
    shortDescription: "Realizamos cortes precisos utilizando tecnología CNC de última generación. Nuestro servicio garantiza exactitud milimétrica y acabados perfectos en una amplia variedad de materiales, desde metales hasta plásticos.",
    longDescription: "Nuestro servicio de corte por CNC combina tecnología de vanguardia con experiencia técnica para ofrecer resultados excepcionales. Utilizamos máquinas CNC de última generación para garantizar la máxima precisión en cada proyecto.",
    features: [
      "Corte por láser CNC",
      "Corte por plasma CNC",
      "Corte por agua CNC",
      "Corte de metales",
      "Corte de plásticos",
      "Corte de materiales compuestos"
    ],
    images: [
      "/work/4.png",
      "/work/5.png",
      "/work/6.png"
    ],
    technicalSpecs: [
      { title: "Tecnologías", value: "Láser, Plasma, Agua" },
      { title: "Precisión", value: "±0.1mm" },
      { title: "Área de trabajo", value: "3000x1500mm" },
      { title: "Materiales", value: "Metales, Plásticos, Compuestos" }
    ]
  },
  {
    slug: "diseno-fabricacion",
    title: "Diseño y Fabricación",
    shortDescription: "Desarrollamos proyectos completos desde el diseño hasta la fabricación. Nuestro equipo puede crear piezas personalizadas según tus especificaciones, combinando soldadura y CNC para resultados excepcionales.",
    longDescription: "Ofrecemos un servicio integral que abarca desde el diseño conceptual hasta la fabricación final. Nuestro equipo de ingenieros y técnicos trabaja en estrecha colaboración con el cliente para desarrollar soluciones personalizadas que cumplan con los más altos estándares de calidad.",
    features: [
      "Diseño CAD/CAM",
      "Ingeniería inversa",
      "Prototipado rápido",
      "Fabricación personalizada",
      "Control de calidad",
      "Asesoría técnica"
    ],
    images: [
      "/work/7.png",
      "/work/8.png",
      "/work/9.png"
    ],
    technicalSpecs: [
      { title: "Software", value: "SolidWorks, AutoCAD" },
      { title: "Capacidad", value: "Proyectos de cualquier escala" },
      { title: "Tiempo de entrega", value: "Según complejidad" },
      { title: "Documentación", value: "Plano técnico completo" }
    ]
  },
  {
    slug: "reparacion",
    title: "Mantenimiento",
    shortDescription: "Brindamos servicios de reparación y mantenimiento para equipos industriales y piezas metálicas. Nuestra experiencia nos permite diagnosticar y resolver problemas eficientemente, prolongando la vida útil de tus equipos.",
    longDescription: "Nuestro servicio de reparación y mantenimiento está diseñado para mantener tus equipos funcionando al máximo rendimiento. Contamos con técnicos especializados y equipamiento diagnóstico avanzado para identificar y resolver cualquier problema de manera eficiente.",
    features: [
      "Diagnóstico técnico",
      "Reparación de equipos",
      "Mantenimiento preventivo",
      "Mantenimiento correctivo",
      "Inspección de seguridad",
      "Optimización de rendimiento"
    ],
    images: [
      "/work/1.png",
      "/work/2.png",
      "/work/3.png"
    ],
    technicalSpecs: [
      { title: "Tipos de equipos", value: "Industrial, Comercial" },
      { title: "Servicio", value: "In-situ y Taller" },
      { title: "Respuesta", value: "24/7 para emergencias" },
      { title: "Garantía", value: "6 meses en reparaciones" }
    ]
  }
]; 