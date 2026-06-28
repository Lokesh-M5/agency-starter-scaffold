import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ArcHero() {
  const headingRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current || !videoRef.current) return;

    // HERO TEXT

    gsap.from(headingRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
      },
    });

    // HERO VIDEO

    gsap.fromTo(
      videoRef.current,
      {
        x: 250,
        scale: 0.8,
        opacity: 0,
      },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 90%",
          end: "center center",
          scrub: 1.5,
        },
      }
    );

    // OTHER BLOCKS

    const blocks = gsap.utils.toArray(".arc-block");

    blocks.slice(1).forEach((block) => {
      const media = block.querySelector(".arc-media");
      const copy = block.querySelector(".arc-copy");

      if (!media || !copy) return;

      gsap.from(copy, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
        },
      });

      gsap.from(media, {
        opacity: 0,
        x: block.classList.contains("reverse") ? -150 : 150,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="arc-story">
      {/* HERO SECTION */}

      <div className="arc-block">
        <div className="arc-copy">
          <h1 ref={headingRef}>
            Arc is an Events and Brand Experience Agency.
            For over 20 years, we've been creating lasting
            memories. Experience has taught us how to make
            everything run smoothly, exceptionally well.
            But above all, it has given us the sensitivity
            to help each brand find its own unique voice.
          </h1>
        </div>

        <div className="arc-media">
          <video
            ref={videoRef}
            className="arc-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/IMG_4624.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* MOTUL SECTION */}

      <div className="arc-block reverse">
        <div className="arc-media">
          <img
            src="/motul-india.jpeg"
            alt="Motul Promotional Photoshoot"
            className="arc-image"
          />
        </div>

        <div className="arc-copy">
          <h2>Motul Promotional Photoshoot</h2>

          <p>
            We collaborated with Motul to create a visually
            striking promotional campaign that captured the
            essence of performance, precision, and passion.
            Through carefully crafted compositions, dynamic
            product photography, and cinematic storytelling,
            we transformed a photoshoot into a powerful
            brand experience for automotive enthusiasts.
          </p>
        </div>
      </div>

      {/* URBANNOOK SECTION */}

      <div className="arc-block">
        <div className="arc-copy">
          <h2>Urbannook Product Reel</h2>

          <p>
            For Urbannook, we developed a social-first
            promotional reel showcasing the brand's products
            through cinematic visuals, smooth transitions,
            and engaging storytelling. Designed specifically
            for modern digital platforms, the reel highlights
            product quality while creating an immersive
            lifestyle-focused viewing experience.
          </p>
        </div>

        <div className="arc-media">
          <video
            className="arc-reel"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/urbannook-reel.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}