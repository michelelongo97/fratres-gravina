import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetailPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  const currentIndex = events.findIndex((e) => e.id === Number(id));

  const nextEvent =
    currentIndex !== -1 && currentIndex < events.length - 1
      ? events[currentIndex + 1]
      : null;

  if (!event) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold">Evento non trovato</h2>
        <Link to="/eventi" className="btn btn-danger mt-3">
          Torna agli eventi
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* HERO IMMAGINE */}
      <section className="bg-light">
        <img
          src={event.image}
          alt={event.title}
          className="w-100 object-fit-cover imgs-height"
        />
      </section>

      {/* CONTENUTO */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* BREADCRUMB */}
            <div className="mb-4 small">
              <Link to="/" className="text-decoration-none text-muted">
                <i className="fa-solid fa-house me-1"></i> Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/eventi" className="text-decoration-none text-muted">
                Eventi
              </Link>
              <span className="mx-2">/</span>
              <span className="fw-bold text-danger">{event.title}</span>
            </div>

            {/* TITOLO */}
            <h1 className="fw-bold text-danger mb-4 text-center">
              {event.title}
            </h1>

            {/* INFO EVENTO */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="row text-center text-md-start">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <i className="fa-solid fa-calendar-days text-danger me-2"></i>
                    <strong>Data</strong>
                    <p className="mb-0">{event.date}</p>
                  </div>

                  <div className="col-md-4 mb-3 mb-md-0">
                    <i className="fa-solid fa-location-dot text-danger me-2"></i>
                    <strong>Luogo</strong>
                    <p className="mb-0">{event.location}</p>
                  </div>

                  <div className="col-md-4">
                    <i className="fa-solid fa-clock text-danger me-2"></i>
                    <strong>Orario</strong>
                    <p className="mb-0">{event.time}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* DESCRIZIONE */}
            <p className="lead text-center mb-5">{event.description}</p>

            {/* CTA */}
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-5">
              <a
                href="https://portale-donatori.sanita.regione.puglia.it/home"
                target="_blank"
                rel="noreferrer"
                className="btn btn-danger btn-lg"
              >
                Prenota una donazione
              </a>

              <Link to="/eventi" className="btn btn-outline-danger btn-lg">
                Torna agli eventi
              </Link>

              <Link to="/" className="btn btn-outline-secondary btn-lg">
                Torna alla Home
              </Link>
            </div>

            {/* PROSSIMO EVENTO */}
            {nextEvent && (
              <div className="card shadow-sm bg-light">
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-3">Prossimo evento</h5>

                  <p className="mb-1 fw-bold">{nextEvent.title}</p>
                  <p className="mb-1 text-muted">{nextEvent.date}</p>
                  <p className="text-muted">{nextEvent.location}</p>

                  <Link
                    to={`/eventi/${nextEvent.id}`}
                    className="btn btn-outline-danger mt-3"
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
