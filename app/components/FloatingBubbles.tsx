import React, { useEffect, useRef } from 'react';

const BUBBLE_COLORS = [
  'rgba(56,189,248,0.5)', // blue
  'rgba(168,85,247,0.5)', // purple
  'rgba(244,114,182,0.5)', // pink
  'rgba(14,165,233,0.5)', // cyan
  'rgba(255,255,255,0.3)', // white
];

const NUM_BUBBLES = 18;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const FloatingBubbles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up on unmount
    return () => {};
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {Array.from({ length: NUM_BUBBLES }).map((_, i) => {
        const size = randomBetween(24, 64); // px
        const left = randomBetween(0, 100); // %
        const delay = randomBetween(0, 8); // s
        const duration = randomBetween(12, 24); // s
        const color = BUBBLE_COLORS[i % BUBBLE_COLORS.length];
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: `${left}%`,
              bottom: `-${size}px`,
              width: size,
              height: size,
              background: color,
              borderRadius: '50%',
              filter: 'blur(1px)',
              opacity: 0.7,
              animation: `bubble-float ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style jsx global>{`
        @keyframes bubble-float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-110vh) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBubbles; 