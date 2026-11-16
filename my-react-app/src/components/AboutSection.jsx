import { portfolioData } from "../data/portfolioData.js";

function AboutSection() {
  return (
    <section className="section section--paper" id="tentang">
      <div className="page-shell about-layout">
        <div className="section-label">
          <span className="section-index">01 /</span>
          <span>Tentang saya</span>
        </div>
        <div className="about-content">
          <h2 className="section-title">
            Dari keselamatan
            <br />
            kerja ke <em>solusi digital.</em>
          </h2>
          <div className="about-columns">
            <p className="about-intro">{portfolioData.about}</p>
            <div className="about-side">
              <p>{portfolioData.workApproach}</p>
              <div className="education-note">
                <span className="education-note-mark" aria-hidden="true">
                  ✳
                </span>
                <p>{portfolioData.educationSummary}</p>
              </div>
            </div>
          </div>
          <div className="about-values">
            <span>Disiplin operasional</span>
            <span>Berpikir sistematis</span>
            <span>Fokus pada pengguna</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
