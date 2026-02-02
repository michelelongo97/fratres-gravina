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
            La Fratres Gravina in Puglia è un’associazione di ispirazione
            cristiana, i volontari sono impegnati nella promozione della
            donazione di sangue, emoderivati, cellule staminali ed organi come
            gesto gratuito, anonimo e responsabile attivandosi nella cultura del
            dono.
          </p>

          <p>
            L’associazione opera sul territorio con l’obiettivo di
            sensibilizzare i cittadini sull’importanza della donazione,
            collaborando con le strutture sanitarie locali, aziende, scuole,
            collettività ed in qualsiasi luogo di aggregazione per garantire la
            disponibilità di sangue ed emocomponenti.
          </p>

          <p>
            La nostra attività si basa esclusivamente sul volontariato, sulla
            solidarietà e sulla gioia della condivisione. Ogni giorno
            promuoviamo valori fondamentali come altruismo, responsabilità
            civile e attenzione verso il prossimo.
          </p>

          <p>
            Diventare donatore significa compiere un gesto semplice ma
            fondamentale, capace di salvare vite umane.
          </p>

          <div className="alert alert-danger mt-4 text-center">
            <strong>
              Donare è un atto concreto d’amore verso chi ne ha bisogno.
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
              📍 <strong>Sede:</strong> Via Aspromonte, S.N.C. (EX MATTATOIO
              COMUNALE), Gravina in Puglia (BA), 70024
            </p>

            <p>
              ✉️ <strong>Email:</strong> {import.meta.env.VITE_EMAIL}
            </p>

            <p>
              📞 <strong>Telefono / WhatsApp:</strong>{" "}
              <a
                href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`}
                className="text-black text-decoration-none"
              >
                {import.meta.env.VITE_PHONE_NUMBER}
              </a>
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
                <i className="fa-brands fa-facebook social-icon"></i>
              </a>
              <a
                href={import.meta.env.VITE_SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-danger fs-4 me-3"
              >
                <i className="fa-brands fa-instagram social-icon"></i>
              </a>
              <a
                className="text-danger fs-4 me-3"
                aria-label="WhatsApp"
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp social-icon"></i>
              </a>
            </div>
            <hr />

            <p className="text-muted mb-0">
              Per informazioni su donazione, requisiti o giornate di raccolta
              sangue, contattaci liberamente.
            </p>
          </div>
        </div>
        <div className="mt-4 text-center ">
          <p className="pt-2">
            Oppure puoi prenotare direttamente la donzione sul portale donatori
            regione Puglia:
          </p>
          <div className="pt-1">
            <a
              className="btn btn-danger"
              href="https://portale-donatori.sanita.regione.puglia.it/home"
              target="_blank"
              rel="noreferrer"
            >
              Portale Regione Puglia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
