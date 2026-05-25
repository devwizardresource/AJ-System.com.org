type IconProps = { className?: string };

export function GerenciaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 40V18l16-8 16 8v22" />
      <path d="M16 40V26h16v14" />
      <path d="M22 40v-6h4v6" />
      <path d="M20 22h8" />
      <circle cx="24" cy="14" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IngenieriaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="14" width="20" height="20" rx="2" />
      <rect x="20" y="20" width="8" height="8" rx="1" />
      <path d="M19 14V8M24 14V8M29 14V8M19 40v-6M24 40v-6M29 40v-6" />
      <path d="M14 19H8M14 24H8M14 29H8M40 19h-6M40 24h-6M40 29h-6" />
    </svg>
  );
}

export function LogisticaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 30V14h22v16" />
      <path d="M26 20h10l6 7v3H26" />
      <circle cx="13" cy="34" r="3.5" />
      <circle cx="34" cy="34" r="3.5" />
      <path d="M16.5 34h14" />
      <path d="M4 30h5.5" />
    </svg>
  );
}

export function SoporteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 28v-4a14 14 0 0 1 28 0v4" />
      <rect x="6" y="28" width="8" height="10" rx="2" />
      <rect x="34" y="28" width="8" height="10" rx="2" />
      <path d="M38 38v2a4 4 0 0 1-4 4h-6" />
      <circle cx="26" cy="44" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function JuridicaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 8v32" />
      <path d="M14 40h20" />
      <path d="M10 16h28" />
      <path d="M10 16l-4 8h8z" />
      <path d="M38 16l-4 8h8z" />
      <circle cx="24" cy="10" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function ContabilidadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="6" width="28" height="36" rx="3" />
      <rect x="15" y="11" width="18" height="6" rx="1" />
      <circle cx="17" cy="23" r="1.4" fill="currentColor" />
      <circle cx="24" cy="23" r="1.4" fill="currentColor" />
      <circle cx="31" cy="23" r="1.4" fill="currentColor" />
      <circle cx="17" cy="30" r="1.4" fill="currentColor" />
      <circle cx="24" cy="30" r="1.4" fill="currentColor" />
      <circle cx="31" cy="30" r="1.4" fill="currentColor" />
      <rect x="15" y="35" width="18" height="3" rx="1" />
    </svg>
  );
}
