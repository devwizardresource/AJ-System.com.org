type Props = {
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function SectionLabel({ icon, children }: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#2a2a2a] bg-[#111] px-3 py-1.5 text-xs font-medium text-[#ededed]">
      <span className="inline-flex h-2.5 w-2.5 items-center justify-center text-[#22d3ff]">
        {icon ?? (
          <svg
            viewBox="0 0 10 10"
            className="h-full w-full"
            fill="currentColor"
            aria-hidden
          >
            <rect x="0" y="0" width="10" height="10" rx="1" />
          </svg>
        )}
      </span>
      <span className="tracking-wide">{children}</span>
    </div>
  );
}
