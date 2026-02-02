import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-danger text-white">
      <div className="container py-4">
        <div className="row">
          {/* DATI ASSOCIAZIONE */}
          <div className="col-md-6 mb-3 text-center text-md-start pt-3 footer-contact">
            <h5 className="fw-bold">Fratres Gravina in Puglia</h5>
            <p className="mb-1">Associazione Donatori di Sangue</p>
            <p className="mb-1">CF: 91051860723</p>
            <p className="mb-1">
              📍 Via Aspromonte, S.N.C. (EX MATTATOIO COMUNALE),
              <br /> Gravina in Puglia (BA), 70024
            </p>
            <p className="mb-1">
              📧{" "}
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL}`}
                className="text-white text-decoration-none"
              >
                {import.meta.env.VITE_EMAIL}
              </a>
            </p>

            <p className="mb-1">
              📧{" "}
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL_PEC}`}
                className="text-white text-decoration-none"
              >
                {import.meta.env.VITE_EMAIL_PEC}
              </a>
            </p>

            <p className="mb-0">
              📞{" "}
              <a
                href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`}
                className="text-white text-decoration-none"
              >
                {import.meta.env.VITE_PHONE_NUMBER}
              </a>
            </p>
          </div>

          {/* SOCIAL */}
          <div className="col-md-6 text-center text-md-end pt-3">
            <h5 className="fw-bold">Seguici sui social</h5>

            <a
              href={import.meta.env.VITE_SOCIAL_FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4 me-3"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook social-icon"></i>
            </a>

            <a
              href={import.meta.env.VITE_SOCIAL_INSTAGRAM}
              className="text-white fs-4 me-3"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram social-icon"></i>
            </a>

            <a
              className="text-white fs-4"
              aria-label="WhatsApp"
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp social-icon"></i>
            </a>
            <div>
              <h5 className="fw-bold pt-4 bigfont">DONA IL TUO 5XMILLE</h5>
              <p>
                Codice Fiscale: <span className="bigfont">91051860723</span>
              </p>
            </div>
          </div>
        </div>

        {/* POLICY */}
        <div className="text-center pt-4 footer-contact">
          <small>
            <Link
              to="/privacy-policy"
              className="text-white text-decoration-none link-hover"
            >
              Privacy Policy
            </Link>
            {" | "}
            <Link
              to="/cookie-policy"
              className="text-white text-decoration-none link-hover"
            >
              Cookie Policy
            </Link>
          </small>
        </div>

        <hr className="border-light" />

        <div className="text-center small">
          © {new Date().getFullYear()} Fratres Gravina in Puglia – Tutti i
          diritti riservati
        </div>
      </div>
    </footer>
  );
}
