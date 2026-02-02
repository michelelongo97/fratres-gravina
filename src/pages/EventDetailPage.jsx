import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetailPage() {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));

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
    <div className="container py-5">
      <Link to="/eventi" className="btn btn-outline-danger mb-4">
        ← Torna agli eventi
      </Link>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="fw-bold text-danger mb-3">{event.title}</h2>

          <img src={event.image} alt="event" className="imgs-height" />

          <p className="mb-2">
            <i className="fa-solid fa-calendar-days me-2 text-danger"></i>
            <strong>Data:</strong> {event.date}
          </p>

          <p className="mb-2">
            <i className="fa-solid fa-clock me-2 text-danger"></i>
            <strong>Orario:</strong> {event.time}
          </p>

          <p className="mb-2">
            <i className="fa-solid fa-location-dot me-2 text-danger"></i>
            <strong>Luogo:</strong> {event.location}
          </p>

          {event.description && <p className="mt-4">{event.description}</p>}
        </div>
      </div>
    </div>
  );
}
