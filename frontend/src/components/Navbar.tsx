import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Áreas", href: "#areas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Liderazgo", href: "#liderazgo" },
  { label: "ADN", href: "#dna" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1f1f1f]/60 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-square.png"
            alt="AJ System"
            width={28}
            height={28}
            priority
            className="h-7 w-7"
          />
          <span className="text-sm font-semibold tracking-wide text-white">
            AJ <span className="text-[#9a9a9a]">SYSTEM</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[#9a9a9a] transition-colors hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md border border-[#2a2a2a] bg-[#111] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#1a1a1a] md:inline-flex"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
