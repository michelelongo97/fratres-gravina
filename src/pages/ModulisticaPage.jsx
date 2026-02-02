export default function ModulisticaPage() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-danger text-center mb-4">
        Moduli da scaricare e stampare per donazione di sangue e/o tipizzazione
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <p className="lead text-center mb-4">
            <a
              href={import.meta.env.VITE_MODULO}
              target="_blank"
              className="text-black"
            >
              👉🏻ISCRIZIONE AL GRUPPO FRATRES (FORMATO A4 FRONTE-RETRO)
            </a>
          </p>
          <p className="lead text-center mb-4">
            <a
              href={import.meta.env.VITE_MODULO_1}
              target="_blank"
              className="text-black"
            >
              👉🏻MODULO DI ANAMNESI DONAZIONE SANGUE (FORMATO A3)
            </a>
          </p>
          <p className="lead text-center mb-4">
            <a
              href={import.meta.env.VITE_MODULO_2}
              target="_blank"
              className="text-black"
            >
              👉🏻TIPIZZAZIONE (FORMATO A4 FRONTE-RETRO)
            </a>
          </p>

          <div className="mt-4 text-center pt-4">
            <a
              className="btn btn-danger"
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
