import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.from(".loader-content", {
      opacity: 0,
      y: 40,
      duration: 0.8,
    });

    tl.to(
      ".scan-light",
      {
        x: window.innerWidth + 700,
        duration: 2.8,
      },
      0.2
    );

    tl.to(
      loaderRef.current,
      {
        opacity: 0,
        duration: 0.8,
      },
      "+=0.2"
    );
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      {/* Background Text */}
      <div className="loader-background">
        <span>Arc Studio</span>
        <span>Arc Studio</span>
        <span>Arc Studio</span>
        <span>Arc Studio</span>
      </div>

      {/* Moving Light */}
      <div className="scan-light"></div>

      {/* Content */}
      <div className="loader-content">
        <p className="loader-small">
          CREATIVE DIGITAL STUDIO
        </p>

        <div className="title-wrapper">
          <h1 className="loader-title loader-title-gradient">
            Arc Studio
          </h1>
        </div>

        <p className="loader-sub">
          DESIGN • DEVELOPMENT • BRANDING
        </p>
      </div>

      {/* Loading */}
      <div className="loader-loading">
        <span>LOADING</span>

        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}