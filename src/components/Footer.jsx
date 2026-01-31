export default function Footer() {
  return (
    <footer className="bg-danger text-white">
      <div className="container py-4">
        <div className="row">
          {/* DATI ASSOCIAZIONE */}
          <div className="col-md-6 mb-3 text-center text-md-start pt-3">
            <h5 className="fw-bold">Fratres Gravina in Puglia</h5>
            <p className="mb-1">Associazione Donatori di Sangue</p>
            <p className="mb-1">CF: 91051860723</p>
            <p className="mb-1">
              📍 Via Aspromonte, S.C. (ex mattatoio comunale),
              <br /> Gravina in Puglia (BA), 70024
            </p>
            <p className="mb-1">📧 {import.meta.env.VITE_EMAIL}</p>
            <p className="mb-1">📧 {import.meta.env.VITE_EMAIL_PEC}</p>
            <p className="mb-0">📞 {import.meta.env.VITE_PHONE_NUMBER}</p>
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
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href={import.meta.env.VITE_SOCIAL_INSTAGRAM}
              className="text-white fs-4 me-3"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              className="text-white fs-4"
              aria-label="WhatsApp"
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
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
