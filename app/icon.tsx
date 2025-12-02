import { ImageResponse } from 'next/og';

export const size = { width: 96, height: 96 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F2F6B 0%, #0FB5BA 100%)',
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0FB5BA" />
              <stop offset="50%" stopColor="#0F2F6B" />
              <stop offset="100%" stopColor="#0FB5BA" />
            </linearGradient>
            <linearGradient id="symGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8F4F8" />
              <stop offset="100%" stopColor="#B8D4E0" />
            </linearGradient>
          </defs>
          <circle cx="256" cy="256" r="240" fill="url(#ringGrad)" />
          <circle cx="256" cy="256" r="200" fill="#1a1a2e" />
          <rect x="180" y="240" width="200" height="20" rx="10" fill="url(#symGrad)" />
          <g transform="translate(180, 256)">
            <circle cx="0" cy="0" r="50" fill="url(#symGrad)" />
            <rect x="-4" y="-30" width="8" height="60" fill="#0F2F6B" rx="4" />
            <rect x="-30" y="-4" width="60" height="8" fill="#0F2F6B" rx="4" />
          </g>
          <g transform="translate(380, 256)">
            <rect x="0" y="-15" width="25" height="10" fill="url(#symGrad)" rx="5" />
            <rect x="0" y="5" width="25" height="10" fill="url(#symGrad)" rx="5" />
            <rect x="15" y="-8" width="10" height="16" fill="url(#symGrad)" rx="5" />
          </g>
          <line x1="256" y1="180" x2="256" y2="300" stroke="url(#symGrad)" strokeWidth="12" strokeLinecap="round" />
          <circle cx="256" cy="180" r="12" fill="url(#symGrad)" />
          <path d="M 256 180 Q 240 160 230 170 Q 240 180 256 190" fill="url(#symGrad)" opacity="0.9" />
          <path d="M 256 180 Q 272 160 282 170 Q 272 180 256 190" fill="url(#symGrad)" opacity="0.9" />
          <path d="M 256 200 Q 240 220 250 240 Q 260 220 256 200" stroke="url(#symGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M 256 200 Q 272 220 262 240 Q 252 220 256 200" stroke="url(#symGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <circle cx="240" cy="240" r="8" fill="url(#symGrad)" />
          <circle cx="272" cy="240" r="8" fill="url(#symGrad)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

