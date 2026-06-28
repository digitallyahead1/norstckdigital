import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}
export function CountUp({
  to,
  suffix = '',
  prefix = '',
  duration = 2,
  className = ''
}: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${Math.round(value)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, to, duration, prefix, suffix]);
  return (
    <span ref={nodeRef} className={className}>
      {prefix}0{suffix}
    </span>);

}