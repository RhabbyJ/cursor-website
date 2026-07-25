type Props = {
  className?: string;
};

/** Designed product-system diagram — not a fabricated UI screenshot. */
export function HarnessmateDiagram({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 420"
      role="img"
      aria-label="HarnessMate system diagram: search, mate candidates, and specification path"
    >
      <defs>
        <linearGradient id="hmPanel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#152433" />
          <stop offset="100%" stopColor="#0c1620" />
        </linearGradient>
        <linearGradient id="hmAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8fd4d0" />
          <stop offset="100%" stopColor="#c9a46c" />
        </linearGradient>
        <filter id="hmSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="720" height="420" rx="18" fill="url(#hmPanel)" />
      <rect
        x="1"
        y="1"
        width="718"
        height="418"
        rx="17"
        fill="none"
        stroke="rgba(143,212,208,0.28)"
      />

      <circle cx="560" cy="70" r="90" fill="#8fd4d0" opacity="0.06" filter="url(#hmSoft)" />

      <text x="36" y="48" fill="#8fd4d0" fontSize="12" letterSpacing="2">
        HARNESSMATE
      </text>
      <text x="36" y="78" fill="#e7eef5" fontSize="28" fontFamily="Georgia, serif">
        Mate resolution path
      </text>
      <text x="36" y="104" fill="#9eb0c1" fontSize="13">
        Query → candidate graph → specification lock
      </text>

      <rect x="36" y="140" width="200" height="220" rx="12" fill="#0a121a" stroke="rgba(158,176,193,0.25)" />
      <text x="56" y="172" fill="#9eb0c1" fontSize="11" letterSpacing="1.5">
        SEARCH
      </text>
      <text x="56" y="202" fill="#e7eef5" fontSize="16">
        MIL-DTL series
      </text>
      <rect x="56" y="220" width="160" height="10" rx="5" fill="rgba(143,212,208,0.18)" />
      <rect x="56" y="220" width="96" height="10" rx="5" fill="url(#hmAccent)" />
      <text x="56" y="258" fill="#9eb0c1" fontSize="12">
        Shell size · contacts · keying
      </text>
      <text x="56" y="286" fill="#c9a46c" fontSize="12">
        128 matches
      </text>
      <circle cx="70" cy="320" r="5" fill="#8fd4d0" />
      <circle cx="96" cy="320" r="5" fill="#8fd4d0" opacity="0.55" />
      <circle cx="122" cy="320" r="5" fill="#8fd4d0" opacity="0.3" />

      <path
        d="M246 250 H300"
        stroke="url(#hmAccent)"
        strokeWidth="2"
        strokeDasharray="5 7"
      />

      <rect x="300" y="140" width="180" height="220" rx="12" fill="#0a121a" stroke="rgba(158,176,193,0.25)" />
      <text x="320" y="172" fill="#9eb0c1" fontSize="11" letterSpacing="1.5">
        MATE GRAPH
      </text>
      <circle cx="390" cy="230" r="34" fill="none" stroke="#8fd4d0" strokeWidth="1.5" />
      <circle cx="350" cy="290" r="16" fill="#8fd4d0" fillOpacity="0.35" />
      <circle cx="430" cy="290" r="16" fill="#c9a46c" fillOpacity="0.45" />
      <path d="M370 252 L350 276" stroke="#8fd4d0" strokeWidth="1.5" />
      <path d="M410 252 L430 276" stroke="#c9a46c" strokeWidth="1.5" />
      <text x="320" y="340" fill="#9eb0c1" fontSize="12">
        Compatible pairs ranked
      </text>

      <path
        d="M490 250 H544"
        stroke="url(#hmAccent)"
        strokeWidth="2"
        strokeDasharray="5 7"
      />

      <rect x="544" y="140" width="140" height="220" rx="12" fill="#0a121a" stroke="rgba(201,164,108,0.4)" />
      <text x="564" y="172" fill="#c9a46c" fontSize="11" letterSpacing="1.5">
        SPEC LOCK
      </text>
      <text x="564" y="210" fill="#e7eef5" fontSize="15">
        Selected mate
      </text>
      <text x="564" y="236" fill="#9eb0c1" fontSize="12">
        Torque · plating
      </text>
      <text x="564" y="258" fill="#9eb0c1" fontSize="12">
        Keying · insert
      </text>
      <rect x="564" y="286" width="100" height="32" rx="8" fill="url(#hmAccent)" />
      <text x="580" y="307" fill="#071018" fontSize="12" fontWeight="700">
        Configure
      </text>
    </svg>
  );
}
