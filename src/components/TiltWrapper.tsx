import { useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from 'motion/react';

interface TiltWrapperProps {
  children: ReactNode;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  style?: React.CSSProperties;
  className?: string;
}

const springConfig: SpringOptions = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltWrapper({
  children,
  rotateAmplitude = 8,
  scaleOnHover = 1.02,
  style,
  className,
}: TiltWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const scale = useSpring(1, springConfig);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleEnter() {
    scale.set(scaleOnHover);
  }

  function handleLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ perspective: 800, ...style }}
      className={className}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
