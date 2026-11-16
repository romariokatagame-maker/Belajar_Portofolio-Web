import { portfolioData } from "../data/portfolioData.js";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="footer-brand" href="#beranda">
          {portfolioData.initials}
        </a>
        <p>
          Dibuat dengan rasa ingin tahu dan tujuan.
          <span> © {new Date().getFullYear()} {portfolioData.name}</span>
        </p>
        <a className="back-to-top" href="#beranda">
          Kembali ke atas <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
