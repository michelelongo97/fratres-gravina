export default function DonazionePage() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-danger text-center mb-4">
        Donazione di sangue
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <p className="lead text-center mb-4">
            Donare il sangue è un gesto volontario, gratuito e sicuro.
          </p>

          <p>
            Donando sangue non solo aiuti chi ne ha bisogno, ma controlli anche
            la tua salute. Un doppio atto d’amore ❤️ <br />
            N.B. Ricordati di portare con te Documento di riconoscimento e
            tesserino sanitario.{" "}
          </p>
          <h5 className="fw-bold text-danger"> 👉 Prima della donazione</h5>
          <ul>
            <li>
              Fai una colazione leggera (tè, caffè, fette biscottate, succo)
            </li>
            <li>Bevi acqua</li>

            <li>
              {" "}
              <strong>NO latte e derivati, yogurt, uova.</strong>
            </li>
          </ul>
          <h5 className="fw-bold text-danger">👉 Dopo la donazione </h5>
          <ul>
            {" "}
            <li>Bevi di più durante la giornata</li>{" "}
            <li>Evita sforzi intensi per qualche ora</li>{" "}
            <li>Concediti uno spuntino 🍎</li>
          </ul>

          <section>
            <h5 className="fw-bold text-danger mt-4">Chi può donare</h5>
            <ul>
              <li>Età compresa tra 18 e 65 anni</li>
              <li>Peso minimo 50 kg</li>
              <li>Buono stato di salute</li>
              <li>Stile di vita sano</li>
            </ul>

            <h5 className="fw-bold text-danger mt-4">
              Ogni quanto si può donare
            </h5>
            <ul>
              <li>Uomini: ogni 90 giorni</li>
              <li>Donne: ogni 180 giorni</li>
            </ul>
          </section>
          <p>
            💖 Ti aspettiamo! Donare è semplice, sicuro e fa bene a te stesso e
            al cuore.
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
