import SectionLabel from "./SectionLabel";

function PrecisionDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <g fill="none" stroke="#22d3ff" strokeWidth="1.4" strokeLinejoin="round">
        <circle cx="160" cy="100" r="58" strokeOpacity="0.7" />
        <circle cx="160" cy="100" r="40" strokeOpacity="0.5" />
        <circle cx="160" cy="100" r="22" strokeOpacity="0.4" />
        <circle cx="160" cy="100" r="4" fill="#22d3ff" />
        <line x1="100" y1="100" x2="220" y2="100" strokeDasharray="3 4" strokeOpacity="0.4" />
        <line x1="160" y1="40"  x2="160" y2="160" strokeDasharray="3 4" strokeOpacity="0.4" />
        <text x="225" y="100" fill="#9a9a9a" fontSize="8" fontFamily="var(--font-geist-mono)" dy="3">
          ±0.03 mm
        </text>
      </g>
    </svg>
  );
}

function GearsDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <g fill="none" stroke="#22d3ff" strokeWidth="1.4" strokeLinejoin="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x1 = 130 + Math.cos(a) * 36;
          const y1 = 100 + Math.sin(a) * 36;
          const x2 = 130 + Math.cos(a) * 46;
          const y2 = 100 + Math.sin(a) * 46;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        <circle cx="130" cy="100" r="36" />
        <circle cx="130" cy="100" r="14" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8;
          const x1 = 210 + Math.cos(a) * 22;
          const y1 = 60 + Math.sin(a) * 22;
          const x2 = 210 + Math.cos(a) * 30;
          const y2 = 60 + Math.sin(a) * 30;
          return <line key={`s-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        <circle cx="210" cy="60" r="22" />
        <circle cx="210" cy="60" r="8" />
      </g>
    </svg>
  );
}

function HandshakeDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <g fill="none" strokeWidth="1.4" strokeLinejoin="round">
        <polygon points="60,80 90,65 120,80 120,120 90,135 60,120" stroke="#22d3ff" />
        <polyline points="60,80 90,95 120,80" stroke="#22d3ff" />
        <line x1="90" y1="95" x2="90" y2="135" stroke="#22d3ff" />
        <text x="90" y="55" fill="#22d3ff" fontSize="8" textAnchor="middle" fontFamily="var(--font-geist-mono)">
          AJ SYSTEM
        </text>
        <polygon points="200,80 230,65 260,80 260,120 230,135 200,120" stroke="#3a3a3a" />
        <polyline points="200,80 230,95 260,80" stroke="#3a3a3a" />
        <line x1="230" y1="95" x2="230" y2="135" stroke="#3a3a3a" />
        <text x="230" y="55" fill="#9a9a9a" fontSize="8" textAnchor="middle" fontFamily="var(--font-geist-mono)">
          CLIENTE
        </text>
        <line x1="125" y1="100" x2="195" y2="100" stroke="#22d3ff" strokeDasharray="3 3" />
        <circle cx="160" cy="100" r="2.5" fill="#22d3ff" />
      </g>
    </svg>
  );
}

function ShieldDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <g fill="none" stroke="#22d3ff" strokeWidth="1.4" strokeLinejoin="round">
        <path d="M160 40 L210 60 L210 110 Q210 145 160 165 Q110 145 110 110 L110 60 Z" />
        <path d="M138 102 L155 118 L184 86" />
        <text x="160" y="190" fill="#9a9a9a" fontSize="8" textAnchor="middle" fontFamily="var(--font-geist-mono)">
          ISO / SOC 2 / LGPD
        </text>
      </g>
    </svg>
  );
}

const cards = [
  {
    title: "Excelencia operativa",
    body:
      "Procesos medidos, indicadores claros y una cultura de mejora continua. Lo que hacemos se ve en tableros, no en relatos.",
    art: <PrecisionDiagram />,
  },
  {
    title: "Ingeniería propia",
    body:
      "Construimos las plataformas que sostienen nuestras operaciones. No dependemos de cajas negras: cada pieza es auditable.",
    art: <GearsDiagram />,
  },
  {
    title: "Cercanía con el cliente",
    body:
      "Comunicación clara, respuesta rápida y compromiso con el resultado. Acompañamos hasta que el problema queda resuelto.",
    art: <HandshakeDiagram />,
  },
  {
    title: "Confianza y cumplimiento",
    body:
      "Marcos de seguridad, protección de datos y cumplimiento normativo desde el primer día. Sin atajos.",
    art: <ShieldDiagram />,
  },
];

export default function OurDNA() {
  return (
    <section id="dna" className="relative border-b border-[#1f1f1f]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Nuestro ADN</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Precisos. Confiables. Cercanos.
          </h2>
          <p className="mt-5 max-w-2xl text-[#9a9a9a]">
            Cuatro principios atraviesan todas nuestras áreas y definen cómo
            trabajamos con clientes, proveedores y entre nosotros.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#1f1f1f] md:grid-cols-2">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="card-glow group relative flex flex-col gap-6 bg-black p-8 animate-fade-up md:min-h-[340px]"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="relative h-44 w-full overflow-hidden rounded-lg border border-[#1f1f1f] bg-[#080808] dot-bg">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
                  {c.art}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9a9a9a]">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
