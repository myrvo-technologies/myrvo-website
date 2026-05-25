// MYRVO icon set — clean 24x24 stroked SVGs, single export.
// Usage: <Icon name="lightbulb" size={20} />

const PATHS = {
  // Features
  lightbulb: (
    <>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.9.7 1.4 1.7 1.4 2.8V18h5.2v-.5c0-1.1.5-2.1 1.4-2.8A7 7 0 0 0 12 2z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v7c0 5 3.5 8.7 8 10 4.5-1.3 8-5 8-10V5l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </>
  ),
  // Stats
  check: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.9-.9.9-2.5 0-3.4-.9-.9-2.5-.9-3.4 0z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-5.4 12.5 12.5 0 0 1 7.5-5.6c.4 2.2 0 5.2-1.5 7.5A22 22 0 0 1 15 12l-3 3z" />
      <path d="M9 12H4l4-4 3 1" />
      <path d="M12 15v5l4-4-1-3" />
    </>
  ),
  // Services
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  palette: (
    <>
      <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.4-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2.5a5.5 5.5 0 0 0 5.5-5.5C23 6.8 18 2 12 2z" />
      <circle cx="6.5" cy="11.5" r="1.5" />
      <circle cx="9.5" cy="7.5" r="1.5" />
      <circle cx="14.5" cy="7.5" r="1.5" />
      <circle cx="17.5" cy="11.5" r="1.5" />
    </>
  ),
  headset: (
    <>
      <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
      <path d="M21 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2zM3 14v3a2 2 0 0 0 2 2h1v-7H5a2 2 0 0 0-2 2z" />
    </>
  ),
  cloud: (
    <>
      <path d="M18 10h-1.3A8 8 0 1 0 4 16.2 5 5 0 0 0 9 19h9a4.5 4.5 0 0 0 0-9z" />
    </>
  ),
  robot: (
    <>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M12 8V4M9 4h6" />
      <circle cx="9" cy="14" r="1.2" />
      <circle cx="15" cy="14" r="1.2" />
      <path d="M9 18h6" />
    </>
  ),
  // UI
  menu: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18M6 6l12 12" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </>
  ),
  // Socials
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  twitter: (
    <>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  // Contact
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </>
  ),
  mapPin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

export default function Icon({ name, size = 24, strokeWidth = 1.75, ...rest }) {
  const paths = PATHS[name];
  if (!paths) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths}
    </svg>
  );
}
