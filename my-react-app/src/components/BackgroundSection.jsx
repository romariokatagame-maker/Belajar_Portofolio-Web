import { portfolioData } from "../data/portfolioData.js";

function BackgroundSection() {
  return (
    <section className="section background-section" id="perjalanan">
      <div className="page-shell background-layout">
        <div className="background-intro">
          <div className="section-label">
            <span className="section-index">04 /</span>
            <span>Pendidikan & pengalaman</span>
          </div>
          <h2 className="section-title">
            Pengalaman yang
            <br />
            membentuk <em>cara saya.</em>
          </h2>
          <p>
            Setiap bab memberi perspektif baru—dari manajemen dan keselamatan
            operasional hingga membangun produk digital.
          </p>
          <span className="background-ornament" aria-hidden="true">
            RK
          </span>
        </div>
        <ol className="timeline">
          {portfolioData.timeline.map((item) => (
            <li className="timeline-item" key={item.marker}>
              <span className="timeline-marker" aria-hidden="true">
                {item.marker}
              </span>
              <div className="timeline-copy">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="timeline-place">{item.place}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default BackgroundSection;
