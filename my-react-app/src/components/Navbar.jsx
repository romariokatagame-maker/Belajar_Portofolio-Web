import { useState } from "react";
import { navigation, portfolioData } from "../data/portfolioData.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Navigasi utama">
        <a
          className="brand"
          href="#beranda"
          aria-label={`${portfolioData.name}, kembali ke beranda`}
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            {portfolioData.initials}
          </span>
          <span className="brand-name">Romario Katagame</span>
        </a>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
        <div
          className={`nav-links${menuOpen ? " nav-links--open" : ""}`}
          id="primary-navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#kontak"
            onClick={closeMenu}
          >
            Mari terhubung <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
