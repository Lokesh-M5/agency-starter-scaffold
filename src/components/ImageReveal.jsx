import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal() {
  const image = useRef();

  useEffect(() => {
    gsap.fromTo(
      image.current,
      {
        scale: 1.3,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: image.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="image-section">
      <div className="container">

        <div className="image-wrapper">

          <img
            ref={image}
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400"
            alt="Creative Team"
          />

        </div>

      </div>
    </section>
  );
}