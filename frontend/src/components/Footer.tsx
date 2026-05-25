import ContactForm from "./ContactForm";
import { AREAS } from "./areas/data";

const social = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

const company = [
  { label: "Áreas", href: "#areas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Liderazgo", href: "#liderazgo" },
  { label: "Nuestro ADN", href: "#dna" },
];

function GridWordmark() {
  return (
    <svg viewBox="0 0 1200 220" className="h-32 w-full text-[#1f1f1f] md:h-44" aria-label="AJ SYSTEM">
      <defs>
        <pattern id="gridmask" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="none" />
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#2a2a2a" strokeWidth="0.5" />
        </pattern>
        <mask id="textmask">
          <rect width="1200" height="220" fill="black" />
          <text
            x="600"
            y="170"
            textAnchor="middle"
            fontSize="200"
            fontWeight="700"
            fontFamily="var(--font-geist-sans), sans-serif"
            letterSpacing="0.05em"
            fill="white"
          >
            AJ SYSTEM
          </text>
        </mask>
      </defs>
      <rect width="1200" height="220" fill="url(#gridmask)" mask="url(#textmask)" />
      <text
        x="600"
        y="170"
        textAnchor="middle"
        fontSize="200"
        fontWeight="700"
        fontFamily="var(--font-geist-sans), sans-serif"
        letterSpacing="0.05em"
        fill="none"
        stroke="#2a2a2a"
        strokeWidth="1.2"
      >
        AJ SYSTEM
      </text>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-[#1f1f1f] bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <h3 className="max-w-md text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Una sola operación.
              <br />
              Seis áreas alineadas.
            </h3>
            <p className="mt-4 max-w-md text-sm text-[#9a9a9a]">
              Si tu organización necesita estructura técnica, operativa y
              administrativa que funcione como un solo equipo, conversemos.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <span
                  key={a.id}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] bg-[#0a0a0a] px-3 py-1 text-xs text-[#cfcfcf]"
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: a.accent }} />
                  {a.name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#1f1f1f] bg-[#080808] p-6 md:p-8">
            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#6b6b6b]">
              Contáctanos
            </p>
            <h4 className="mb-5 text-xl font-semibold text-white">
              Cuéntanos lo que necesitas.
            </h4>
            <ContactForm />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-[#1f1f1f] pt-10 md:grid-cols-4">
          <div className="col-span-2">
            <p className="text-sm font-semibold text-white">AJ System</p>
            <p className="mt-1 text-sm text-[#9a9a9a]">
              Tecnología, operaciones y servicios.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Empresa</p>
            <ul className="mt-3 space-y-2">
              {company.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#9a9a9a] transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Síguenos</p>
            <ul className="mt-3 space-y-2">
              {social.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#9a9a9a] transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 -mx-6">
          <GridWordmark />
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#1f1f1f] pt-6 text-xs text-[#6b6b6b] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AJ System. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
