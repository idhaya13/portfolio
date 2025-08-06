import React, { useEffect, useRef } from 'react';

const ScrollZoom3D = ({ items = [] }) => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let autoScrollTimeout = null;

    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const container = containerRef.current;
      if (!scrollContainer || !container) return;

      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const scrollPercentage = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);

      // Auto scroll back to top when nearing the end
      if (scrollPercentage >= 0.98) {
        clearTimeout(autoScrollTimeout);
        autoScrollTimeout = setTimeout(() => {
          scrollContainer.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }, 500);
      }

      const gridItems = container.querySelectorAll('.grid-item');
      gridItems.forEach((item, index) => {
        const animationRanges = [
          [0.0, 0.15], [0.05, 0.2], [0.1, 0.25], [0.15, 0.3],
          [0.2, 0.35], [0.25, 0.4], [0.3, 0.45], [0.35, 0.5],
          [0.4, 0.55], [0.45, 0.6], [0.1, 0.6], [0.5, 0.65],
          [0.55, 0.7], [0.6, 0.75], [0.65, 0.8], [0.7, 0.85],
          [0.75, 0.9], [0.8, 0.95], [0.12, 0.27], [0.17, 0.32],
          [0.22, 0.37], [0.27, 0.42], [0.32, 0.47], [0.37, 0.52],
        ];

        const range = animationRanges[index] || [Math.random() * 0.7, Math.random() * 0.7 + 0.15];
        const [start, end] = range;

        if (scrollPercentage >= start && scrollPercentage <= end) {
          const localProgress = (scrollPercentage - start) / (end - start);
          let opacity, transform, filter;

          if (localProgress <= 0.5) {
            const t = localProgress * 2;
            const z = -1000 + (1000 * t);
            opacity = t;
            filter = `blur(${5 - (5 * t)}px)`;
            transform = `translateZ(${z}px)`;
          } else {
            const t = (localProgress - 0.5) * 2;
            const z = 0 + (1000 * t);
            opacity = 1 - t;
            filter = `blur(${5 * t}px)`;
            transform = `translateZ(${z}px)`;
          }

          item.style.opacity = opacity;
          item.style.transform = transform;
          item.style.filter = filter;
        } else if (scrollPercentage < start) {
          item.style.opacity = '0';
          item.style.transform = 'translateZ(-1000px)';
          item.style.filter = 'blur(5px)';
        } else if (scrollPercentage > end) {
          item.style.opacity = '0';
          item.style.transform = 'translateZ(1000px)';
          item.style.filter = 'blur(5px)';
        }
      });
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
      clearTimeout(autoScrollTimeout);
    };
  }, []);

  const defaultItems = [
    'React', 'Python', 'Django', 'JavaScript', 'Node.js', 'MongoDB',
    'PostgreSQL', 'AWS', 'Docker', 'Git', { text: 'Full Stack', special: true },
    'TypeScript', 'Redux', 'Express', 'CSS3', 'HTML5'
  ];

  const gridItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-950 to-black">
      <section
        ref={scrollContainerRef}
        className="h-screen overflow-y-scroll"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="relative" style={{ height: '300vh' }}>
          <div
            ref={containerRef}
            className="sticky top-0 w-full"
            style={{
              height: '100vh',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              display: 'grid',
              gridTemplate: 'repeat(4, 25vh) / repeat(4, 25vw)',
              placeItems: 'center',
              overflow: 'hidden',
              backgroundColor: 'transparent',
              zIndex: 10,
            }}
          >
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="grid-item"
                style={{
                  transformStyle: 'preserve-3d',
                  fontSize: typeof item === 'object' && item.special ? '15vmin' : '5vmin',
                  fontWeight: typeof item === 'object' && item.special ? 'bold' : 'lighter',
                  whiteSpace: 'nowrap',
                  color: 'white',
                  willChange: 'transform, opacity, filter',
                  opacity: 0,
                  transform: 'translateZ(-1000px)',
                  filter: 'blur(5px)',
                  textAlign: 'center',
                  transition: 'none',
                  ...(typeof item === 'object' && item.special
                    ? {
                        gridRow: '2 / span 2',
                        gridColumn: '2 / span 2',
                        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }
                    : {}),
                }}
              >
                {typeof item === 'object' ? item.text : item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollZoom3D;
