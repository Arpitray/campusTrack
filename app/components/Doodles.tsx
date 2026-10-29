// Hand-drawn line marks. All decorative: hidden from assistive technology.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

export function Logo(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      {/* QR corner marks around a tick */}
      <path d="M5 15 V6.5 Q5.5 5 7 5.2 H15" stroke="#38352f" strokeWidth="2.6" />
      <path d="M33 5.4 H41.2 Q43 5.6 42.8 7.4 V15.5" stroke="#38352f" strokeWidth="2.6" />
      <path d="M5.3 33 V41 Q5.6 43 7.5 42.7 H15" stroke="#38352f" strokeWidth="2.6" />
      <path d="M13 25.5 L20.5 33 L36.5 14.5" stroke="#9e3a2e" strokeWidth="3.4" />
      <path d="M36 38 h5 M38.6 35.4 v5.4" stroke="#344c69" strokeWidth="2.2" />
    </svg>
  );
}

export function Star(props: P) {
  return (
    <svg viewBox="0 0 80 80" {...base} strokeWidth="2" {...props}>
      <path d="M40 6 L45 30 L70 18 L52 38 L76 48 L50 50 L56 74 L40 55 L22 72 L28 50 L4 44 L28 36 L12 16 L36 28 Z" />
    </svg>
  );
}

export function Underline(props: P) {
  return (
    <svg viewBox="0 0 600 30" preserveAspectRatio="none" {...base} {...props}>
      <path d="M4 22 C 120 8, 260 6, 596 10" strokeWidth="3" />
      <path d="M28 27 C 180 17, 380 15, 594 16" strokeWidth="2.4" />
    </svg>
  );
}

export function CurlArrow(props: P) {
  return (
    <svg viewBox="0 0 170 110" {...base} strokeWidth="2.4" {...props}>
      <path d="M164 70 C 140 92, 100 106, 92 82 C 84 58, 118 30, 108 14 C 98 0, 66 18, 66 46 C 66 70, 40 78, 10 82" />
      <path d="M22 66 L8 82 L28 90" />
    </svg>
  );
}

export function ShortArrow(props: P) {
  return (
    <svg viewBox="0 0 64 26" {...base} strokeWidth="2" {...props}>
      <path d="M3 15 C 18 9, 38 9, 58 13" />
      <path d="M48 5 L59 13 L47 21" />
    </svg>
  );
}

export function SideArrow(props: P) {
  return (
    <svg viewBox="0 0 44 32" {...base} strokeWidth="2" {...props}>
      <path d="M40 4 C 30 6, 14 10, 6 24" />
      <path d="M4 13 L5.5 25.5 L17 22" />
    </svg>
  );
}

export function Bracket(props: P) {
  return (
    <svg viewBox="0 0 1000 22" preserveAspectRatio="none" {...base} strokeWidth="2.2" {...props}>
      <path d="M4 4 V18 M4 12 C 200 10, 520 7, 996 9 M996 3 V20" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function Rule(props: P) {
  return (
    <svg viewBox="0 0 1000 10" preserveAspectRatio="none" {...base} strokeWidth="1.5" {...props}>
      <path d="M2 6 C 160 3, 340 8, 520 5 S 860 3, 998 6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function Check(props: P) {
  return (
    <svg viewBox="0 0 32 32" {...base} strokeWidth="2.6" {...props}>
      <path d="M5 17 L12.5 24.5 L27 7" />
    </svg>
  );
}

export function Question(props: P) {
  return (
    <svg viewBox="0 0 32 32" {...base} strokeWidth="2" {...props}>
      <path d="M16 3 C 8 3, 3 9, 3.5 16.5 C 4 24, 9.5 29, 16.5 28.6 C 24 28.2, 29 22.5, 28.4 15 C 27.8 7.6, 22.5 3, 15 3.6" />
      <path d="M12 12.5 C 12 9.5, 14 8.4, 16.2 8.4 C 18.6 8.4, 20.4 10, 20.2 12.3 C 20 14.6, 16.5 15.4, 16.3 18.6" />
      <path d="M16.3 22.6 v0.4" strokeWidth="2.8" />
    </svg>
  );
}

export function Plus(props: P) {
  return (
    <svg viewBox="0 0 32 32" {...base} strokeWidth="2.4" {...props}>
      <path d="M16 5 C 15.6 12, 16.3 20, 15.8 27 M5 16.2 C 12 15.6, 20 16.4, 27 15.8" />
    </svg>
  );
}

export function NumberCircle(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M30 4 C 14 2, 4 14, 4.5 29 C 5 43, 16 52.5, 30 51.5 C 44 50.5, 52.5 40, 51.5 26 C 50.5 13, 41 4.5, 26 5.5" />
    </svg>
  );
}

export function QRSticker(props: P) {
  // a slightly wobbly QR, drawn not generated
  return (
    <svg viewBox="0 0 60 60" {...base} strokeWidth="1.8" {...props}>
      <path d="M3 4 Q3 3 4.5 3 H55.5 Q57 3.2 56.8 5 V55 Q56.6 57 55 56.8 H5 Q3 57 3.2 55 Z" />
      <rect x="9" y="9" width="13" height="13" rx="1.5" />
      <rect x="38" y="9" width="13" height="13" rx="1.5" />
      <rect x="9" y="38" width="13" height="13" rx="1.5" />
      <path d="M13.5 13.5 h4 v4 h-4z M42.5 13.5 h4 v4 h-4z M13.5 42.5 h4 v4 h-4z" fill="currentColor" stroke="none" />
      <path d="M28 10 v6 M30 20 h4 M27 26 h7 v4 M38 28 h6 M48 27 v6 M28 36 v6 M33 34 h6 v5 M44 38 v4 h6 M33 46 v5 h5 M44 48 h7 v3 M10 28 h5 M19 30 v4" />
    </svg>
  );
}

export function Projector(props: P) {
  return (
    <svg viewBox="0 0 120 90" {...base} strokeWidth="2" {...props}>
      <path d="M12 38 C 11 33, 14 30, 19 30 L98 29 C 104 29, 107 32, 107 37 L106 60 C 106 65, 103 67, 98 67 L20 68 C 15 68, 12 65, 12.5 60 Z" />
      <path d="M32 48 m-11 0 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0" />
      <path d="M32 48 m-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0" />
      <path d="M58 42 h30 M58 50 h22" />
      <path d="M24 68 l-3 9 M95 67 l3 9" />
      <path d="M44 28 C 52 16, 70 10, 92 8 M48 28 C 58 20, 76 16, 100 18" stroke="#344c69" strokeWidth="1.5" strokeDasharray="3 5" />
      <path d="M88 38 l3 -3" />
    </svg>
  );
}

export function Phone(props: P) {
  return (
    <svg viewBox="0 0 80 80" {...base} strokeWidth="2" {...props}>
      <path d="M24 6 C 21 6, 19 8, 19 11 L18.5 69 C 18.5 72, 20.5 74, 23.5 74 L56 74.5 C 59 74.5, 61 72.5, 61 69.5 L61.5 11 C 61.5 8, 59.5 6, 56.5 6 Z" />
      <path d="M35 11 h10" />
      <path d="M29 26 h7 v7 h-7z M44 26 h7 v7 h-7z M29 41 h7 v7 h-7z M44 42 h4 M48 46 v2 M44 48 h2" stroke="#9e3a2e" strokeWidth="1.6" />
      <path d="M36 64 h8" />
    </svg>
  );
}

export function Dashboard(props: P) {
  return (
    <svg viewBox="0 0 80 80" {...base} strokeWidth="2" {...props}>
      <path d="M8 14 C 8 11, 10 10, 13 10 L68 9.5 C 71 9.5, 72.5 11, 72.5 14 L72 55 C 72 58, 70.5 59.5, 67.5 59.5 L13 60 C 10 60, 8.5 58.5, 8.5 55.5 Z" />
      <path d="M32 60 l-3 10 M48 60 l3 10 M24 71 h32" />
      <path d="M16 48 L28 36 L38 42 L52 24 L64 30" stroke="#9e3a2e" />
      <path d="M16 20 h14 M16 26 h9" />
    </svg>
  );
}

export function Wrench(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M36 6 C 29 5, 24 11, 25.5 18 L7.5 36 C 5 38.5, 5 42.5, 7.6 45 L10.8 48 C 13.4 50.6, 17.2 50.4, 19.6 48 L37.6 30 C 44.5 32, 50.5 26.5, 49.6 19.5 L43 26 L36.5 25 L35 18.5 L41.5 12 C 40 8, 38 6.4, 36 6 Z" />
      <path d="M12.5 43.5 l0.4 0.4" strokeWidth="3" />
    </svg>
  );
}

export function Calendar(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M8 14 C 8 11.5, 9.5 10, 12 10 L44.5 9.5 C 47 9.5, 48.5 11, 48.5 13.5 L48 45 C 48 47.5, 46.5 49, 44 49 L12.5 49.5 C 10 49.5, 8.5 48, 8.5 45.5 Z" />
      <path d="M8.5 21 C 22 20, 36 21.5, 48 20.5 M18 5 v10 M38 5 v10" />
      <path d="M17 31 h4 M27 31 h4 M37 31 h4 M17 40 h4" />
      <path d="M33 37 m-5 0 a6 5 0 1 0 12 1 a6 5.5 0 1 0 -11 -2" stroke="#9e3a2e" />
    </svg>
  );
}

export function Pin(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M28 50 C 18 38, 12 29, 12.5 21.5 C 13 12.5, 20 6.5, 28.5 6.6 C 37 6.8, 43.5 13, 43.4 21.6 C 43.3 29.6, 37 38, 28 50 Z" />
      <path d="M28 21 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0" />
    </svg>
  );
}

export function Clipboard(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M14 10 C 11.5 10, 10 11.5, 10 14 L10.5 47 C 10.5 49.5, 12 51, 14.5 51 L42 50.5 C 44.5 50.5, 46 49, 46 46.5 L45.5 14 C 45.5 11.5, 44 10, 41.5 10" />
      <path d="M20 6.5 h16 v8 h-16z" />
      <path d="M17 26 l3 3 l5 -6 M30 27 h10 M17 38 l3 3 l5 -6 M30 39 h9" />
    </svg>
  );
}

export function Chart(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M8 7 C 8.5 20, 7.5 36, 8.4 48.5 C 22 48, 36 49, 49 48.4" />
      <path d="M15 40 v-10 M24 40 v-18 M33 40 v-12 M42 40 v-24" strokeWidth="4" />
    </svg>
  );
}

export function Bell(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M14 39 C 16 35, 16.5 30, 16.5 24 C 16.5 16, 21 11, 28 11 C 35 11, 39.5 16, 39.5 24 C 39.5 30, 40 35, 42.5 39 Z" />
      <path d="M10.5 39.5 C 22 38.8, 34 39.2, 45.5 39" />
      <path d="M23.5 44 C 24.5 48, 31.5 48, 32.5 44 M28 6.5 v4" />
    </svg>
  );
}

export function Magnifier(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M24 8 C 15 8, 8.5 14.5, 8.6 23.5 C 8.7 32.4, 15.4 38.5, 24.2 38.4 C 33 38.3, 39.2 32, 39 23 C 38.8 14.2, 32.5 8.1, 23 8.6" />
      <path d="M35.5 35.5 L48 48" strokeWidth="3.4" />
    </svg>
  );
}

export function Users(props: P) {
  return (
    <svg viewBox="0 0 220 130" {...base} strokeWidth="2" {...props}>
      <ellipse cx="44" cy="30" rx="15" ry="17" />
      <path d="M18 92 L28 62 C 36 58, 52 58, 60 62 L70 92 Z" />
      <ellipse cx="110" cy="22" rx="15" ry="17" />
      <path d="M84 82 L94 52 C 102 48, 118 48, 126 52 L136 82 Z" />
      <ellipse cx="176" cy="44" rx="15" ry="17" />
      <path d="M150 104 L160 74 C 168 70, 184 70, 192 74 L202 104 Z" />
      <path d="M64 24 C 74 18, 82 16, 90 18 M84 12 L91 18 L83 23" stroke="#344c69" />
      <path d="M132 26 C 144 26, 152 30, 158 38 M150 38 L159 39 L159 30" stroke="#344c69" />
      <path d="M160 118 C 130 128, 90 126, 64 112 M74 108 L62 112 L70 122" stroke="#344c69" />
    </svg>
  );
}

export function Building(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M6 22 L28 8 L50 22" />
      <path d="M9 22.5 C 22 21.8, 36 22.4, 47 22" />
      <path d="M13 26 v17 M22 26 v17 M34 26 v17 M43 26 v17" />
      <path d="M6 47 C 20 46, 36 47.5, 50 46.6" />
    </svg>
  );
}

export function Shield(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M28 5 C 22 9, 15 11, 9 11 C 9 30, 14 42, 28 50 C 42 42, 47 30, 47 11 C 41 11, 34 9, 28 5 Z" />
      <path d="M19 27 L25.5 33.5 L37 20" stroke="#9e3a2e" />
    </svg>
  );
}

export function Sparkle(props: P) {
  return (
    <svg viewBox="0 0 56 56" {...base} strokeWidth="2" {...props}>
      <path d="M26 6 C 27 18, 30 23, 44 26 C 30 28, 27 33, 26 48 C 24.5 33, 21 28, 8 26.5 C 21 24, 24.5 19, 26 6 Z" />
      <path d="M44 6 v8 M40 10 h8" stroke="#9e3a2e" />
    </svg>
  );
}

export function Speech(props: P) {
  return (
    <svg viewBox="0 0 800 300" preserveAspectRatio="none" {...base} strokeWidth="2" {...props}>
      <path
        d="M40 18 C 220 8, 560 10, 760 20 C 784 22, 792 36, 791 60 C 789 130, 793 190, 788 230 C 786 250, 772 258, 750 258 L 250 262 L 196 296 L 204 262 L 44 262 C 20 262, 9 250, 10 226 C 12 160, 7 100, 11 52 C 13 30, 22 19, 40 18 Z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Face({ variant = 0, ...props }: P & { variant?: number }) {
  const hair = [
    "M30 46 C 30 26, 46 18, 62 20 C 78 22, 92 32, 90 52 C 84 40, 72 34, 58 34 C 46 34, 36 40, 30 46 Z",
    "M28 56 C 26 30, 44 16, 62 18 C 82 20, 94 36, 92 60 C 96 80, 92 100, 88 112 M28 56 C 24 80, 28 100, 32 112 M30 44 C 44 40, 56 32, 64 24 C 70 34, 82 40, 92 44",
    "M30 50 C 28 28, 46 16, 62 18 C 80 20, 94 34, 90 54 C 92 70, 94 88, 98 104 M30 50 C 28 70, 26 88, 22 104 M34 40 C 48 38, 62 30, 70 22",
  ][variant % 3];
  return (
    <svg viewBox="0 0 120 130" {...base} strokeWidth="2" {...props}>
      <path d="M60 30 C 42 30, 32 44, 33 62 C 34 82, 46 94, 60 94 C 75 94, 87 82, 87 62 C 87 44, 77 30, 60 30 Z" />
      <path d={hair} />
      <path d="M48 60 v3 M72 60 v3" strokeWidth="3" />
      <path d="M52 76 C 56 80, 64 80, 68 76" stroke="#9e3a2e" />
      <path d="M22 130 C 24 112, 40 102, 60 102 C 80 102, 96 112, 98 130" />
    </svg>
  );
}
