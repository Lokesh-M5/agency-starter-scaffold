import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loader = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".bg-word", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
    })

      .from(
        ".loader-top",
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.8"
      )

      .from(
        ".loader-title",
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.4"
      )

      .from(
        ".loader-subtitle",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.8"
      )

      .from(
        ".loader-loading",
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      )

      .to(".progress-fill", {
        width: "100%",
        duration: 2.2,
        ease: "power2.inOut",
      })

      .to(".invert", {
        scaleY: 1,
        duration: 0.55,
        ease: "power2.inOut",
      })

      .to(loader.current, {
        opacity: 0,
        duration: 0.4,
        pointerEvents: "none",
      });
  }, []);

  return (
    <div className="loader" ref={loader}>
        <h1>ARC Studio</h1>
    </div>
  );
}