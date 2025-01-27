'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';
import { Utensils } from 'lucide-react';

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
        duration: 0.5,
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'power4.inOut',
        delay: 2, // Time for loading screen to stay visible
      }).from(
        content,
        {
          duration: 0.5,
          opacity: 0,
          y: 50,
          ease: 'power3.out',
          onComplete: () => setIsLoading(false),
        },
        '-=0.5'
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      >
        <div className="text-center">
          <Utensils className="h-16 w-16 text-background animate-bounce" />
          <h2 className="mt-4 text-2xl font-bold text-background">
            Loading REMENU
          </h2>
        </div>
      </div>
      <div ref={contentRef} className={isLoading ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
}
