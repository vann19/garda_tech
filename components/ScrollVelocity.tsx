'use client';
import { useRef, useLayoutEffect, useState, RefObject, CSSProperties } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';
import './ScrollVelocity.css';

function useElementWidth(ref: RefObject<HTMLElement | null>): number {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);
  return width;
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: { input: [number, number]; output: [number, number] };
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: CSSProperties;
  scrollerStyle?: CSSProperties;
  className?: string;
}

interface ScrollVelocityProps {
  scrollContainerRef?: RefObject<HTMLElement | null>;
  texts?: string[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: { input: [number, number]; output: [number, number] };
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: CSSProperties;
  scrollerStyle?: CSSProperties;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = 'parallax',
  scrollerClassName = 'scroller',
  parallaxStyle,
  scrollerStyle
}: ScrollVelocityProps) => {
  function VelocityText({ children, baseVelocity = velocity, ...props }: VelocityTextProps) {
    const baseX = useMotionValue(0);
    const scrollOptions = props.scrollContainerRef ? { container: props.scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: props.damping ?? 50, stiffness: props.stiffness ?? 400 });
    const velocityFactor = useTransform(smoothVelocity, props.velocityMapping?.input || [0, 1000], props.velocityMapping?.output || [0, 5], { clamp: false });

    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min: number, max: number, v: number): number {
      const range = max - min;
      return (((v - min) % range) + range) % range + min;
    }

    const x = useTransform(baseX, v => copyWidth === 0 ? '0px' : `${wrap(-copyWidth, 0, v)}px`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((_t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className={props.parallaxClassName} style={props.parallaxStyle}>
        <motion.div className={props.scrollerClassName} style={{ x, ...props.scrollerStyle }}>
          {Array.from({ length: props.numCopies ?? numCopies }).map((_, i) => (
            <span className={props.className} key={i} ref={i === 0 ? copyRef : null}>
              {children}&nbsp;
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
