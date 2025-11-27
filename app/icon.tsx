import { ImageResponse } from 'next/og';

export const size = {
  width: 96,
  height: 96,
};

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
          background: 'linear-gradient(135deg, #0f2f6b 0%, #0fb5ba 100%)',
          borderRadius: 32,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0f2f6b',
            fontSize: 28,
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          MK
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

