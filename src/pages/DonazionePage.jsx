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

          <h5 className="fw-bold text-danger mt-4">Prima della donazione</h5>
          <ul>
            <li>Fare una colazione leggera</li>
            <li>Evitare cibi grassi</li>
            <li>Portare un documento di identità</li>
          </ul>

          <div className="alert alert-danger mt-4">
            <strong>
              Per informazioni dettagliate e prenotazioni contattaci tramite la
              pagina Contatti.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
