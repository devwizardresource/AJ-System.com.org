import SectionLabel from "./SectionLabel";
import { AREAS } from "./areas/data";

type Service = {
  areaId: string;
  title: string;
  blurb: string;
};

const SERVICES: Service[] = [
  {
    areaId: "ingenieria",
    title: "Plataforma de integración",
    blurb:
      "Conectamos ERPs, OEMs y sistemas heredados con APIs modernas y observabilidad nativa.",
  },
  {
    areaId: "logistica",
    title: "Control de flota y rutas",
    blurb:
      "Visibilidad en tiempo real sobre vehículos, paradas y consumo. Optimización por ventana y costo.",
  },
  {
    areaId: "soporte",
    title: "Mesa de soporte 24/7",
    blurb:
      "Atención multicanal con SLA medibles, escalamientos automáticos y trazabilidad por ticket.",
  },
  {
    areaId: "juridica",
    title: "Contratos y cumplimiento",
    blurb:
      "Gestión de contratos, datos personales y auditorías regulatorias con flujos firmados digitalmente.",
  },
  {
    areaId: "contabilidad",
    title: "Cierre y reportes financieros",
    blurb:
      "Cierre mensual con conciliación automática, tableros gerenciales y obligaciones tributarias al día.",
  },
  {
    areaId: "gerencia",
    title: "Tablero ejecutivo",
    blurb:
      "Una sola pantalla con OKRs por área, alertas tempranas y reportes que se preparan solos.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative border-b border-[#1f1f1f]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Lo que entregamos
          </h2>
          <p className="mt-5 max-w-2xl text-[#9a9a9a]">
            Soluciones operativas y tecnológicas pensadas para empresas que
            necesitan precisión, trazabilidad y velocidad. Cada servicio nace
            del área que mejor lo conoce.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#1f1f1f] md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const area = AREAS.find((a) => a.id === s.areaId)!;
            return (
              <article
                key={s.title}
                className="area-scope group relative overflow-hidden bg-black p-7 transition-colors duration-500 hover:bg-[#070707] animate-fade-up"
                style={
                  {
                    "--area": area.accent,
                    "--area-dim": area.accentDim,
                    "--area-soft": area.accentSoft,
                    animationDelay: `${i * 60}ms`,
                  } as React.CSSProperties
                }
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: area.accentDim }}
                />

                <header className="relative flex items-center justify-between">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] transition-colors duration-500 group-hover:border-[var(--area-dim)]"
                    style={{ color: area.accent }}
                  >
                    <area.Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#9a9a9a]">
                    {area.name}
                  </span>
                </header>

                <h3 className="relative mt-6 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[#9a9a9a]">
                  {s.blurb}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-xs font-medium text-[#9a9a9a] transition-colors duration-500 group-hover:text-white">
                  Ver detalle
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
