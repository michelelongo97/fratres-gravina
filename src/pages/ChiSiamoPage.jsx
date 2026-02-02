import { useState } from "react";

export default function ChiSiamoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Compila tutti i campi");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("Messaggio inviato correttamente");
      } else {
        alert("Errore nell'invio del messaggio");
      }
    } catch (error) {
      alert("Errore di rete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      {/* CHI SIAMO */}
      <h2 className="fw-bold text-danger text-center mb-4">Chi siamo</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <p className="lead text-center mb-4">
            La Fratres Gravina in Puglia è un’associazione di volontari
            impegnata nella promozione della donazione di sangue come gesto
            gratuito, anonimo e responsabile.
          </p>

          <p>
            L’associazione opera sul territorio con l’obiettivo di
            sensibilizzare i cittadini sull’importanza della donazione,
            collaborando con le strutture sanitarie locali per garantire la
            disponibilità di sangue ed emocomponenti.
          </p>

          <p>
            La nostra attività si basa esclusivamente sul volontariato e sulla
            solidarietà. Ogni giorno promuoviamo valori fondamentali come
            altruismo, responsabilità civile e attenzione verso il prossimo.
          </p>

          <p>
            Diventare donatore significa compiere un gesto semplice ma
            fondamentale, capace di salvare vite umane.
          </p>

          <div className="alert alert-danger mt-4 text-center">
            <strong>
              Donare il sangue è un atto d’amore verso chi ne ha bisogno.
            </strong>
          </div>
        </div>
      </div>

      {/* CONTATTI */}
      <h2 className="fw-bold text-center mb-4 text-danger pt-3">Contattaci</h2>

      <div className="row g-4">
        {/* FORM */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm h-100">
            <h4 className="mb-3">Scrivi alla Fratres</h4>

            <form onSubmit={handleSubmit}>
              <input
                className="form-control mb-3"
                name="name"
                placeholder="Nome e cognome"
                onChange={handleChange}
                value={formData.name}
              />

              <input
                className="form-control mb-3"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />

              <textarea
                className="form-control mb-3"
                name="message"
                rows="5"
                placeholder="Messaggio"
                onChange={handleChange}
                value={formData.message}
              />

              <button className="btn btn-danger w-100" disabled={loading}>
                {loading ? "Invio in corso..." : "Invia messaggio"}
              </button>
            </form>
          </div>
        </div>

        {/* INFO */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm h-100">
            <h4 className="mb-3">Contatti associazione</h4>

            <p>
              📍 <strong>Sede:</strong> Via Aspromonte, S.C. (ex mattatoio
              comunale), Gravina in Puglia (BA), 70024
            </p>

            <p>
              ✉️ <strong>Email:</strong> {import.meta.env.VITE_EMAIL}
            </p>

            <p>
              📞 <strong>Telefono:</strong> {import.meta.env.VITE_PHONE_NUMBER}
            </p>

            <hr />

            <p className="fw-bold mb-2">Seguici sui social</p>
            <div className="flex">
              <a
                href={import.meta.env.VITE_SOCIAL_FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="text-danger fs-4 me-3"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href={import.meta.env.VITE_SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-danger fs-4"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <hr />

            <p className="text-muted mb-0">
              Per informazioni su donazione, requisiti o giornate di raccolta
              sangue, contattaci liberamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
