import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function HomePage() {
  const nextEvents = events.slice(0, 1);

  return (
    <>
      {/* HERO */}
      <section className="bg-danger text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold mb-3">Dona il sangue. Salva una vita.</h1>
          <p className="lead mb-4">
            Un piccolo gesto può fare la differenza per qualcuno.
          </p>
          <Link to="/donazione" className="btn btn-light btn-lg">
            Diventa donatore
          </Link>
        </div>
      </section>

      {/* PERCHÉ DONARE */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="fa-solid fa-droplet fs-1 text-danger mb-3"></i>
              <h5>Aiuti chi ne ha bisogno</h5>
              <p>
                Il sangue donato è fondamentale per interventi, cure e
                emergenze.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <i className="fa-solid fa-hand-holding-heart fs-1 text-danger mb-3"></i>
              <h5>Gesto di solidarietà</h5>
              <p>Donare significa essere vicini alla comunità.</p>
            </div>

            <div className="col-md-4 mb-4">
              <i className="fa-solid fa-heart fs-1 text-danger mb-3"></i>
              <h5>Fa bene anche a te</h5>
              <p>
                Donare aiuta a monitorare periodicamente il tuo stato di salute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Chi siamo</h2>
          <p className="mb-4">
            La Fratres Gravina in Puglia è un’associazione di volontari
            impegnata nella promozione della donazione di sangue sul territorio.
          </p>
          <Link to="/chi-siamo" className="btn btn-danger">
            Scopri di più
          </Link>
        </div>
      </section>

      {/* PROSSIME DONAZIONI */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Prossimo evento o donazione</h2>

          <div className="row justify-content-center">
            {nextEvents.map((event) => (
              <div key={event.id} className="col-md-4 mb-3">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{event.date}</h5>
                    <p className="card-text">{event.location}</p>
                    <p className="text-muted mb-0">{event.time}</p>
                    <h6 className="card-title fw-bold py-3 text-danger">
                      {event.type.toUpperCase()}
                    </h6>
                    <Link
                      to={`/eventi/${event.id}`}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      Dettagli
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/eventi" className="btn btn-outline-danger mt-3">
            Vedi tutti gli eventi
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-danger text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Vuoi diventare donatore?</h2>
          <p className="mb-4">Contattaci per ricevere tutte le informazioni.</p>
          <Link to="/chi-siamo" className="btn btn-light btn-lg">
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
