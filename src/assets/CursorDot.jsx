import React, { useEffect, useRef } from 'react';

export default function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Only show on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    let x = 0, y = 0;
    dot.classList.add('cursor-dot--visible');

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.left = x + 'px';
      dot.style.top  = y + 'px';
    };

    const onEnter = () => dot.classList.add('cursor-dot--hover');
    const onLeave = () => dot.classList.remove('cursor-dot--hover');

    window.addEventListener('mousemove', onMove, { passive: true });

    const hoverTargets = 'a, button, [role="button"], .tool-chip, .project-card, .fyp-card';
    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
