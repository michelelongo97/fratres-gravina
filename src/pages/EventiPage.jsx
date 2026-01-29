export default function EventiPage() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-danger text-center mb-4">
        Eventi e giornate di donazione
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <p className="lead text-center mb-4">
            Consulta il calendario delle prossime giornate di donazione
            organizzate dalla Fratres Gravina in Puglia.
          </p>

          {/* EVENTO */}
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Domenica 20 Ottobre 2026</h5>
              <p className="card-text mb-1">
                📍 Centro Trasfusionale – Ospedale di Gravina
              </p>
              <p className="card-text text-muted mb-0">⏰ 08:00 – 12:00</p>
            </div>
          </div>

          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Domenica 17 Novembre 2026</h5>
              <p className="card-text mb-1">
                📍 Centro Trasfusionale – Ospedale di Gravina
              </p>
              <p className="card-text text-muted mb-0">⏰ 08:00 – 12:00</p>
            </div>
          </div>

          <div className="alert alert-danger text-center mt-4">
            Le date possono subire variazioni. Segui i nostri canali social per
            rimanere aggiornato.
          </div>
        </div>
      </div>
    </div>
  );
}
