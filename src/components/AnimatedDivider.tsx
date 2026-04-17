import { useFadeIn } from '../hooks/useFadeIn';

interface AnimatedDividerProps {
  color?: string;
}

export default function AnimatedDivider({
  color = '#8b5cf6',
}: AnimatedDividerProps) {
  const { ref, isVisible } = useFadeIn(0.3);

  return (
    <div
      ref={ref}
      style={{ padding: '0 32px', maxWidth: 1024, margin: '0 auto' }}
    >
      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}
