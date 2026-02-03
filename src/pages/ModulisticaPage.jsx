export default function ModulisticaPage() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-danger text-center mb-3">Modulistica</h2>

      <p className="text-center text-muted mb-5">
        Scarica, stampa e compila i moduli necessari per la donazione di sangue
        e la tipizzazione.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* MODULO 1 */}
          <div className="card shadow-sm mb-3">
            <div className="card-body d-flex align-items-center justify-content-between flex-column flex-md-row text-center text-md-start">
              <div>
                <h5 className="mb-1">
                  <i className="fa-solid fa-file-pdf text-danger me-2"></i>
                  Iscrizione al gruppo Fratres
                </h5>
                <small className="text-muted">Formato A4 fronte-retro</small>
              </div>

              <a
                href={import.meta.env.VITE_MODULO}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-danger mt-3 mt-md-0"
              >
                Scarica PDF
              </a>
            </div>
          </div>

          {/* MODULO 2 */}
          <div className="card shadow-sm mb-3">
            <div className="card-body d-flex align-items-center justify-content-between flex-column flex-md-row text-center text-md-start">
              <div>
                <h5 className="mb-1">
                  <i className="fa-solid fa-file-pdf text-danger me-2"></i>
                  Anamnesi donazione sangue
                </h5>
                <small className="text-muted">Formato A3</small>
              </div>

              <a
                href={import.meta.env.VITE_MODULO_1}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-danger mt-3 mt-md-0"
              >
                Scarica PDF
              </a>
            </div>
          </div>

          {/* MODULO 3 */}
          <div className="card shadow-sm mb-4">
            <div className="card-body d-flex align-items-center justify-content-between flex-column flex-md-row text-center text-md-start">
              <div>
                <h5 className="mb-1">
                  <i className="fa-solid fa-file-pdf text-danger me-2"></i>
                  Tipizzazione
                </h5>
                <small className="text-muted">Formato A4 fronte-retro</small>
              </div>

              <a
                href={import.meta.env.VITE_MODULO_2}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-danger mt-3 mt-md-0"
              >
                Scarica PDF
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-5">
            <p className="fw-bold mb-3">Hai già compilato i moduli?</p>
            <a
              className="btn btn-danger btn-lg"
              href="https://portale-donatori.sanita.regione.puglia.it/home"
              target="_blank"
              rel="noreferrer"
            >
              Prenota una donazione
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
