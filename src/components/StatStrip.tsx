"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function useCounter(endValue: number, isInView: boolean, duration: number = 2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, endValue, duration]);

  return count;
}

type StatProps = {
  endValue: number;
  label: string;
  prefix?: string;
  suffix?: string;
  isYear?: boolean;
};

function AnimatedStat({ endValue, label, prefix = "", suffix = "", isYear = false }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useCounter(isYear ? endValue - 2000 : endValue, isInView, 2);
  const displayValue = isYear ? (isInView ? (count === 0 ? 1990 : count + 2000) : 1990) : count;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-4">
      <div className="font-mono text-2xl md:text-3xl font-bold mb-1 tracking-tight text-white flex items-center">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-accent-metal font-sans tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

function StaticStat({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="font-mono text-2xl md:text-3xl font-bold mb-1 tracking-tight text-white flex items-center">
        {value}
      </div>
      <div className="text-xs md:text-sm text-accent-metal font-sans tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function StatStrip() {
  return (
    <div className="w-full bg-ink border-t border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800 border-t border-gray-800 md:border-t-0 md:divide-y-0 py-6 md:py-8">
          <AnimatedStat endValue={9} label="Wire Cut Machines" />
          <AnimatedStat endValue={3} label="VMCs" />
          <StaticStat value="ISO 9001:2015" label="Certified Quality" />
          <AnimatedStat endValue={2006} label="Established" isYear={true} />
        </div>
      </div>
    </div>
  );
}
