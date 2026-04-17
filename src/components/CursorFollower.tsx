import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${target.current.x - 4}px, ${target.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    const id = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(id);
    };
  }, []);

  const base: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    borderRadius: '50%',
  };

  return (
    <>
      <div
        ref={dotRef}
        className="hidden md:block"
        style={{ ...base, width: 8, height: 8, backgroundColor: '#8b5cf6' }}
      />
      <div
        ref={ringRef}
        className="hidden md:block"
        style={{
          ...base,
          width: 40,
          height: 40,
          border: '1.5px solid rgba(139,92,246,0.4)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  );
}
