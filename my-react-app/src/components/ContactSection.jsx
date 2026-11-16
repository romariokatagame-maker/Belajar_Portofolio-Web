import { useState } from "react";
import { portfolioData } from "../data/portfolioData.js";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!portfolioData.contact.email) {
      setStatus(
        "Form ini belum terhubung ke layanan pengiriman. Tambahkan alamat email aktif di src/data/portfolioData.js untuk mengaktifkan tombol kirim.",
      );
      return;
    }

    const subject = encodeURIComponent(
      `Pesan portofolio dari ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
    setStatus("Aplikasi email Anda sedang dibuka untuk mengirim pesan.");
  }

  return (
    <section className="section contact-section" id="kontak">
      <div className="page-shell">
        <div className="section-label">
          <span className="section-index">05 /</span>
          <span>Kontak</span>
        </div>
        <div className="contact-layout">
          <div className="contact-copy">
            <h2 className="section-title">
              Ada ide?
              <br />
              Mari kita <em>bicarakan.</em>
            </h2>
            <p>
              Punya proyek menarik atau ingin bertukar pikiran? Saya senang
              mendengar cerita dan kebutuhan Anda.
            </p>
            <div className="contact-links">
              <a
                href={portfolioData.contact.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              {portfolioData.contact.linkedinUrl ? (
                <a
                  href={portfolioData.contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="contact-link-pending">LinkedIn · segera</span>
              )}
              {portfolioData.contact.email ? (
                <a href={`mailto:${portfolioData.contact.email}`}>
                  Email <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="contact-link-pending">Email · segera</span>
              )}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Nama</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Nama Anda"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="nama@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="contact-message">Ceritakan kebutuhan Anda</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Saya ingin berdiskusi tentang..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button className="button button--primary contact-submit" type="submit">
              Siapkan pesan <span aria-hidden="true">↗</span>
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
