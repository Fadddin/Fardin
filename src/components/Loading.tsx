'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';
import { Loader } from 'lucide-react';

interface LoadingScreenProps {
  children: ReactNode;
}

export function LoadingScreen({ children }: LoadingScreenProps) {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingScreen = loadingRef.current;
    const content = contentRef.current;

    const tl = gsap.timeline();

    if (loadingScreen && content) {
      tl.to(loadingScreen, {
        duration: 1,
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'power4.inOut',
        delay: 2, // Duration for the loading screen
      }).fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          onComplete: () => setIsLoading(false),
        },
        '-=0.8'
      );
    }

    return () => {
      tl.kill(); // Clean up animation to avoid memory leaks
    };
  }, []);

  return (
    <>
      <div
        ref={loadingRef}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A] ${
          isLoading ? '' : 'hidden'
        }`}
      >
        <div className="text-center">
          <Loader className="h-16 w-16 text-[#E2FB30] animate-spin" />
          <h2 className="mt-4 text-2xl font-bold font-mono text-[#E2FB30]">
            Loading FardinKhan.in
          </h2>
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`transition-opacity duration-500 ${isLoading ? 'hidden' : 'block'}`}
      >
        {children}
      </div>
    </>
  );
}
