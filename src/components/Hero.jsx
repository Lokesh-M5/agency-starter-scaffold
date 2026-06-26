export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg-text">
          <span>ARC</span>
          <span>STUDIO</span>
      </div>

      <div className="container hero-layout">

          <div className="hero-content">

              <span className="hero-small fade-up">
                  DIGITAL DESIGN AGENCY
              </span>

              <h1 className="hero-title fade-up">
                  Building
                  <br />
                  Digital
                  <br />
                  Experiences
              </h1>

              <p className="hero-description fade-up">
                  We create premium digital products,
                  websites and visual experiences using
                  thoughtful design and cutting-edge
                  technology.
              </p>

              <button className="hero-btn fade-up">
                  <span></span>
                  View Projects
              </button>

          </div>

          <div className="hero-image fade-up">

              <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop"
                  alt=""
              />

              <div className="project-card">

                  <span>FEATURED PROJECT</span>

                  <h3>Luxury Architecture</h3>

                  <p>
                      UI / UX • Branding
                  </p>

              </div>

          </div>

      </div>

      <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
      </div>

  </section>
  );
}