import { events } from "../data/events";

export default function Eventi() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-danger text-center mb-4">
        Eventi e giornate di donazione
      </h2>

      {events.map((event) => (
        <div key={event.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="fw-bold">{event.title}</h5>
            <p className="mb-1">📅 {event.date}</p>
            <p className="mb-1">📍 {event.location}</p>
            <p className="text-muted mb-0">⏰ {event.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
