import React from "react";

export function WhatsAppLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.892.527 3.66 1.444 5.168L2.1 21.9l4.892-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
        fill="#25D366"
      />
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function FacebookLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M15.08 12.07h-2.12v7.71h-3.19v-7.71H8.05V9.36h1.72V7.58c0-1.42.68-3.64 3.64-3.64l2.67.01v2.92h-1.94c-.32 0-.76.16-.76.83v1.66h2.75l-.45 2.71z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function InstagramLogo({ className = "w-5 h-5" }: { className?: string }) {
  const gradientId = "ig-brand-gradient";
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`${gradientId}-radial`} cx="20%" cy="105%" r="120%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="70%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="22" height="22" x="1" y="1" rx="6" fill={`url(#${gradientId}-radial)`} />
      <rect width="14" height="14" x="5" y="5" rx="4" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="16.2" cy="7.8" r="1" fill="#FFFFFF" />
    </svg>
  );
}

export function JustdialLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Rounded Container */}
      <rect width="32" height="32" rx="7" fill="#0076D7" />
      {/* Orange Accent Bar / Swoosh */}
      <path
        d="M4 23.5C8 26.5 24 26.5 28 23.5"
        stroke="#FF6F00"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Stylized 'J' */}
      <path
        d="M13.5 10v7c0 2-1 3.5-3.2 3.5-1.5 0-2.8-.7-3.3-1.6l1.6-1.3c.3.5.8.9 1.7.9 1 0 1.4-.6 1.4-1.5V10h1.8z"
        fill="#FFFFFF"
      />
      {/* Stylized 'D' */}
      <path
        d="M16 10h3.8c3 0 5 1.8 5 4.5s-2 4.5-5 4.5H16V10zm2 7.2h1.6c1.8 0 3-1 3-2.7s-1.2-2.7-3-2.7H18v5.4z"
        fill="#FF9E1B"
      />
    </svg>
  );
}

export function GoogleMapsLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#EA4335"
      />
      <circle cx="12" cy="9" r="3" fill="#A50E0E" />
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 2.22 1.25 4.8 2.68 7.37L12 9V2z"
        fill="#4285F4"
      />
      <path
        d="M12 2v7l4.32 7.37C17.75 13.8 19 11.22 19 9c0-3.87-3.13-7-7-7z"
        fill="#FBBC04"
      />
      <path
        d="M7.68 16.37L12 22l4.32-5.63C15.2 14.8 13.6 12.5 12 9c-1.6 3.5-3.2 5.8-4.32 7.37z"
        fill="#34A853"
      />
      <circle cx="12" cy="9" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}
