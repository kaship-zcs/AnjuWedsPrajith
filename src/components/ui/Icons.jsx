/* Minimalist inline SVG icons — all 20×20 viewBox, strokeWidth 1.5, no fill */

export const IconMapPin = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 1.5C7.51 1.5 5.5 3.51 5.5 6c0 3.75 4.5 8.5 4.5 8.5S14.5 9.75 14.5 6c0-2.49-2.01-4.5-4.5-4.5z" />
    <circle cx="10" cy="6" r="1.5" />
  </svg>
)

export const IconCalendar = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="14" height="13" rx="2" />
    <path d="M3 8h14M7 2v4M13 2v4" />
  </svg>
)

export const IconMessageCircle = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 10c0 3.866-3.134 7-7 7a6.97 6.97 0 01-3.5-.937L3 17l.937-3.5A6.97 6.97 0 013 10c0-3.866 3.134-7 7-7s7 3.134 7 7z" />
  </svg>
)

export const IconMusic = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 17V5l9-2v12" />
    <circle cx="5.5" cy="17" r="2.5" />
    <circle cx="14.5" cy="15" r="2.5" />
  </svg>
)

export const IconMusicOff = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 17V5l9-2v12" />
    <circle cx="5.5" cy="17" r="2.5" />
    <circle cx="14.5" cy="15" r="2.5" />
    <line x1="2" y1="2" x2="18" y2="18" />
  </svg>
)

export const IconFlame = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2s-5 5-5 9a5 5 0 0010 0C15 7 10 2 10 2z" />
    <path d="M10 13a2 2 0 000 4" />
  </svg>
)

export const IconBlossom = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="10" cy="10" r="2.5" />
    <path d="M10 1v4M10 15v4M1 10h4M15 10h4M3.22 3.22l2.83 2.83M13.95 13.95l2.83 2.83M3.22 16.78l2.83-2.83M13.95 6.05l2.83-2.83" />
  </svg>
)

export const IconLotus = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21c0 0-7-5-7-10a7 7 0 0114 0c0 5-7 10-7 10z" />
    <path d="M12 21c0 0 4-4 4-9" />
    <path d="M12 21c0 0-4-4-4-9" />
    <path d="M12 10v11" />
  </svg>
)

export const IconOm = ({ size = 20, color = 'currentColor' }) => (
  /* Simplified Om-like glyph using path */
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12c0-3.866 3.134-7 7-7s7 3.134 7 7" />
    <path d="M5 12c0 2.5 2 4.5 4.5 4.5S14 15 14 12.5" />
    <path d="M14 12.5c0 2.5 2 4.5 4.5 4.5" />
    <path d="M15.5 4.5c1 0 1.5.5 1.5 1.5" />
  </svg>
)

export const IconCheck = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="2,8 6,12 14,4" />
  </svg>
)

export const IconX = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="3" y1="3" x2="13" y2="13" />
    <line x1="13" y1="3" x2="3" y2="13" />
  </svg>
)
