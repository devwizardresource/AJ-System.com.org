import {
  ContabilidadIcon,
  GerenciaIcon,
  IngenieriaIcon,
  JuridicaIcon,
  LogisticaIcon,
  SoporteIcon,
} from "./icons";

export type Area = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  accentDim: string;
  accentSoft: string;
  Icon: (p: { className?: string }) => React.ReactElement;
  highlights: string[];
};

export const AREAS: Area[] = [
  {
    id: "gerencia",
    name: "Gerencia",
    tagline: "Visión, dirección y gobierno corporativo.",
    description:
      "Define la estrategia, alinea los objetivos de cada área y conduce la organización con criterios de impacto medibles y decisiones basadas en datos.",
    accent: "#22d3ff",
    accentDim: "rgba(34, 211, 255, 0.18)",
    accentSoft: "rgba(34, 211, 255, 0.06)",
    Icon: GerenciaIcon,
    highlights: ["Estrategia", "OKRs trimestrales", "Reportes ejecutivos"],
  },
  {
    id: "ingenieria",
    name: "Ingeniería",
    tagline: "Plataformas, integración y automatización.",
    description:
      "Diseña, construye y mantiene los sistemas que sostienen la operación: arquitectura de software, integración con OEMs y automatización de procesos críticos.",
    accent: "#3a8dff",
    accentDim: "rgba(58, 141, 255, 0.20)",
    accentSoft: "rgba(58, 141, 255, 0.07)",
    Icon: IngenieriaIcon,
    highlights: ["APIs & servicios", "DevOps", "IoT / Edge"],
  },
  {
    id: "logistica",
    name: "Logística",
    tagline: "Cadena de suministro, planeación y despacho.",
    description:
      "Coordina inventarios, rutas y proveedores. Optimiza tiempos y costos extremo a extremo con visibilidad en tiempo real sobre cada movimiento.",
    accent: "#00d18f",
    accentDim: "rgba(0, 209, 143, 0.20)",
    accentSoft: "rgba(0, 209, 143, 0.06)",
    Icon: LogisticaIcon,
    highlights: ["Rutas optimizadas", "Almacén & WMS", "Trazabilidad"],
  },
  {
    id: "soporte",
    name: "Soporte Técnico",
    tagline: "Servicio 24/7, SLA y resolución en sitio.",
    description:
      "Atiende, diagnostica y resuelve incidentes con niveles de servicio acordados. Despliegue en sitio, atención remota y mantenimiento preventivo.",
    accent: "#ffb020",
    accentDim: "rgba(255, 176, 32, 0.22)",
    accentSoft: "rgba(255, 176, 32, 0.07)",
    Icon: SoporteIcon,
    highlights: ["Mesa de ayuda", "SLA medibles", "Mantenimiento preventivo"],
  },
  {
    id: "juridica",
    name: "Jurídica",
    tagline: "Contratos, cumplimiento y protección legal.",
    description:
      "Acompaña cada decisión con marco legal sólido: contratos, regulación, datos personales y resolución de controversias.",
    accent: "#9a6cff",
    accentDim: "rgba(154, 108, 255, 0.22)",
    accentSoft: "rgba(154, 108, 255, 0.07)",
    Icon: JuridicaIcon,
    highlights: ["Contratos", "Cumplimiento", "Datos personales"],
  },
  {
    id: "contabilidad",
    name: "Contabilidad",
    tagline: "Finanzas, tributación y control interno.",
    description:
      "Cierre mensual confiable, indicadores financieros, presupuesto y obligaciones tributarias al día. Visibilidad completa para la toma de decisiones.",
    accent: "#00c4cc",
    accentDim: "rgba(0, 196, 204, 0.22)",
    accentSoft: "rgba(0, 196, 204, 0.06)",
    Icon: ContabilidadIcon,
    highlights: ["Cierre mensual", "Reportes IFRS", "Tributación"],
  },
];
