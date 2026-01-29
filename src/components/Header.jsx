import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
      <div className="container">
        {/* LOGO / NOME */}
        <NavLink className="navbar-brand fw-bold" to="/">
          Fratres Gravina | Donatori di sangue
        </NavLink>

        {/* HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#fratresNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="fratresNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/chi-siamo">
                Chi siamo
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/donazione">
                Donazione
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/eventi">
                Eventi
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contatti">
                Contatti
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://portale-donatori.sanita.regione.puglia.it/home"
                target="_blank"
                rel="noreferrer"
              >
                Prenota una donazione
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
