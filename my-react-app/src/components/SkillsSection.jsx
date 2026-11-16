import { portfolioData } from "../data/portfolioData.js";

function SkillsSection() {
  return (
    <section className="section skills-section" id="keahlian">
      <div className="page-shell">
        <div className="section-heading-row">
          <div>
            <div className="section-label">
              <span className="section-index">02 /</span>
              <span>Keahlian</span>
            </div>
            <h2 className="section-title">
              Alat yang saya
              <br />
              <em>gunakan setiap hari.</em>
            </h2>
          </div>
          <p className="section-aside">
            Teknologi yang dipilih untuk membuat produk yang berguna, terawat,
            dan siap berkembang.
          </p>
        </div>
        <div className="skills-grid">
          {portfolioData.skills.map((group, index) => (
            <article className="skill-card" key={group.category}>
              <div className="skill-card-top">
                <span className="skill-number">0{index + 1}</span>
                <span className="skill-spark" aria-hidden="true">
                  ✳
                </span>
              </div>
              <h3>{group.category}</h3>
              <p>{group.description}</p>
              <ul className="skill-tags">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
