import SectionLabel from "./SectionLabel";
import { AREAS } from "./areas/data";

type Lead = {
  name: string;
  role: string;
  areaId: string;
  bio: string;
};

const LEADS: Lead[] = [
  {
    name: "Adrián Jiménez",
    role: "Director General",
    areaId: "gerencia",
    bio:
      "Conduce la estrategia y la mesa directiva. +15 años en operaciones y dirección general en empresas de servicios y tecnología.",
  },
  {
    name: "Camila Restrepo",
    role: "VP de Ingeniería",
    areaId: "ingenieria",
    bio:
      "Lidera la plataforma técnica y el equipo de desarrollo. Arquitectura distribuida, integración con OEMs y automatización.",
  },
  {
    name: "Esteban Morales",
    role: "Jefe de Logística",
    areaId: "logistica",
    bio:
      "Diseña la operación de flota, almacén y última milla. Optimización con datos reales y SLA por ruta.",
  },
  {
    name: "Lucía Gallego",
    role: "Líder de Soporte",
    areaId: "soporte",
    bio:
      "Construye la mesa de servicio 24/7 y los procesos de incidentes. Trazabilidad por ticket y mejora continua.",
  },
  {
    name: "Mauricio Vélez",
    role: "Jefe Jurídico",
    areaId: "juridica",
    bio:
      "Acompaña contratos, cumplimiento normativo y protección de datos. Estructura legal de toda la operación.",
  },
  {
    name: "Sofía Aragón",
    role: "Jefa de Contabilidad",
    areaId: "contabilidad",
    bio:
      "Cierre mensual, reportes financieros y obligaciones tributarias. Visibilidad financiera para la dirección.",
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-label="LinkedIn">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3.5 9.75h2.96V21H3.5V9.75zM9.5 9.75h2.84v1.54h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.54 1.97 3.54 4.53V21h-2.95v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9.5V9.75z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="liderazgo" className="relative border-b border-[#1f1f1f]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <SectionLabel
            icon={
              <svg viewBox="0 0 10 10" className="h-full w-full" fill="currentColor">
                <circle cx="5" cy="3.5" r="2" />
                <path d="M1 9c0-2 2-3 4-3s4 1 4 3" />
              </svg>
            }
          >
            Liderazgo
          </SectionLabel>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Las personas detrás
            <br />
            de cada área
          </h2>
          <p className="mt-5 max-w-2xl text-[#9a9a9a]">
            Un equipo con responsabilidad clara por cada disciplina y con la
            autonomía para mover la operación adelante.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#1f1f1f] md:grid-cols-2 lg:grid-cols-3">
          {LEADS.map((p, i) => {
            const area = AREAS.find((a) => a.id === p.areaId)!;
            return (
              <article
                key={p.name}
                className="area-scope group relative flex flex-col gap-5 bg-black p-7 animate-fade-up"
                style={
                  {
                    "--area": area.accent,
                    "--area-dim": area.accentDim,
                    animationDelay: `${i * 70}ms`,
                  } as React.CSSProperties
                }
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: area.accentDim }}
                />

                <header className="relative flex items-center gap-3">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full border border-[#1f1f1f] bg-[#0a0a0a] transition-colors duration-500 group-hover:border-[var(--area-dim)]"
                    style={{ color: area.accent }}
                  >
                    <area.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{p.name}</h3>
                    <p className="mt-0.5 text-xs text-[#9a9a9a]">
                      {p.role} ·{" "}
                      <span style={{ color: area.accent }}>{area.name}</span>
                    </p>
                  </div>
                </header>

                <p className="relative text-sm leading-relaxed text-[#9a9a9a]">
                  {p.bio}
                </p>

                <a
                  href="#"
                  aria-label={`${p.name} en LinkedIn`}
                  className="relative mt-auto inline-flex h-7 w-7 items-center justify-center rounded border border-[#2a2a2a] text-[#9a9a9a] transition-colors hover:border-white/30 hover:text-white"
                >
                  <LinkedInIcon />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
