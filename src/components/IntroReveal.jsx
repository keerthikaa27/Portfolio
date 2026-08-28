import { useEffect, useState } from "react";

export default function IntroReveal() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setVisible(false), reducedMotion ? 1100 : 5000);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-reveal" aria-label="Keerthika Nimmagadda" role="status">
      <div className="intro-reveal__texture" />
      <div className="intro-reveal__content">
        <svg className="intro-reveal__sketch" viewBox="0 0 760 180" aria-hidden="true">
          <path className="intro-reveal__line intro-reveal__line--back" d="M72 116 C214 95 420 144 690 99" />
          <path className="intro-reveal__line" d="M70 112 C216 91 422 140 688 95" />
          <g className="intro-reveal__pencil">
            <path d="M0 0 L25 8 L8 25 Z" />
            <path d="M8 25 L25 8 L92 -59 L75 -76 Z" />
            <path d="M75 -76 L92 -59 L102 -69 L85 -86 Z" />
          </g>
        </svg>
        <h1 className="intro-reveal__name">Keerthika Nimmagadda</h1>
      </div>
    </div>
  );
}
