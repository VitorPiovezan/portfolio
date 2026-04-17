import { ReactNode } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
}: FadeInProps) {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
