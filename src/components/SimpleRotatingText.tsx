import { useState, useEffect } from 'react';

interface SimpleRotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function SimpleRotatingText({
  texts,
  interval = 2500,
  className = '',
  style,
}: SimpleRotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % texts.length);
        setVisible(true);
      }, 300);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span
      className={className}
      style={{
        ...style,
        display: 'inline-block',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-10px)',
      }}
    >
      {texts[index]}
    </span>
  );
}
