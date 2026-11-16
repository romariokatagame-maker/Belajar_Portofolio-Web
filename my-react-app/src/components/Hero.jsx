import { portfolioData } from "../data/portfolioData.js";
import portrait from "../assets/romario-portrait.svg";

function Hero() {
  return (
    <section className="hero-section page-shell" id="beranda">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Portofolio · {portfolioData.location}
        </p>
        <h1>
          Merancang web
          <br />
          <span className="hero-title-accent">dengan tujuan.</span>
        </h1>
        <p className="hero-lead">
          Halo, saya <strong>{portfolioData.name}</strong> — seorang{" "}
          <strong>{portfolioData.role}</strong> yang percaya bahwa pengalaman
          manajemen dan teknologi dapat membangun solusi digital yang lebih
          bermakna.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#proyek">
            Lihat proyek <span aria-hidden="true">↗</span>
          </a>
          <a className="button button--text" href="#kontak">
            Hubungi saya <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span className="availability-dot" aria-hidden="true" />
          Terbuka untuk kolaborasi dan peluang baru
        </div>
      </div>

      <div className="hero-art" aria-label="Ilustrasi potret Romario Katagame">
        <div className="portrait-frame">
          <img
            src={portrait}
            alt="Ilustrasi potret bergaya editorial"
            width="440"
            height="540"
          />
          <span className="portrait-caption">Membangun, dengan maksud.</span>
        </div>
        <span className="hero-stamp" aria-hidden="true">
          <span>IDE</span>
          <span>→</span>
          <span>DAMPAK</span>
        </span>
        <span className="hero-art-note" aria-hidden="true">
          Est. with intention
        </span>
      </div>
      <a className="scroll-cue" href="#tentang">
        <span className="scroll-cue-line" />
        Gulir untuk mengenal saya
      </a>
    </section>
  );
}

export default Hero;
