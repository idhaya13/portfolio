import React, { useEffect, useRef, useState } from 'react';

const ScrollIndicator = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current && ref.current.parentElement) {
      observer.observe(ref.current.parentElement);
    }

    return () => {
      if (ref.current && ref.current.parentElement) {
        observer.unobserve(ref.current.parentElement);
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

