'use client';

interface BlinkingMetricProps {
  value: string;
  positive?: boolean;
  blink?: boolean;
  className?: string;
}

export default function BlinkingMetric({
  value,
  positive = true,
  blink = true,
  className = '',
}: BlinkingMetricProps) {
  const color = positive ? '#00D964' : '#D90429';

  return (
    <span
      className={`font-mono text-sm tabular-nums ${blink ? 'blink' : ''} ${className}`}
      style={{ color, fontFamily: "'Space Mono', monospace" }}
    >
      {value}
    </span>
  );
}
