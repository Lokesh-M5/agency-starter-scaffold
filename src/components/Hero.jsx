import "./Hero.css";

export default function Hero() {
  return (
    <section className="arc-hero">

      <div className="arc-nav">
        <div className="logo">ARC</div>

        <button className="menu-btn">
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="hero-content">

        <h1>
          Arc is an Events and Brand Experience Agency.
          For over 20 years, we've been creating lasting memories.
          Experience has taught us how to make everything run smoothly,
          exceptionally well.
          But above all, it has given us the sensitivity to help each
          brand find its own unique voice.
          <span>
            {" "}
            We immerse ourselves in their essence and transform it into
            experiences that truly connect.
          </span>
        </h1>

      </div>

      <div className="hero-bottom">

        <div className="hero-left">

          <p>
            Welcome! We're Arc, and creating unique experiences is our
            passion. Want to know what makes us different? Then don't
            hesitate to take a look.
          </p>

          <button className="arc-btn">
            Get to know us
            <span>↗</span>
          </button>

        </div>

        <div className="hero-video">

          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
            alt=""
          />

          <div className="play-button">
            ▶
          </div>

          <h3>Arc Showreel</h3>

        </div>

      </div>

    </section>
  );
}