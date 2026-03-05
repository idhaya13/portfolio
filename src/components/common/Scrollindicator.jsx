import React, { useEffect, useRef, useState } from 'react';

const ScrollIndicator = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Target your scroll container from App.jsx
    const scrollContainer = document.querySelector('.scroll-smooth');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: scrollContainer || null, // Use custom scroll container if found
        threshold: 1.0, // Fully in view before showing
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`w-6 h-6 rounded-full bg-blue-500 mx-auto mt-4 transition-all duration-700 ease-in-out
        ${isVisible ? 'scale-100 opacity-100 animate-bounce' : 'scale-0 opacity-0'}`}
    />
  );
};

export default ScrollIndicator;

