import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();

  // Chiusura del menu ad ogni cambio pagina
  useEffect(() => {
    const navbar = document.getElementById("fratresNavbar");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
      <div className="container">
        {/* LOGO */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <img
            src="/images/logos/logo-transp.png"
            alt="Fratres Gravina in Puglia"
            height="100"
            className="header-logo"
          />
        </NavLink>

        {/* HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#fratresNavbar"
          aria-controls="fratresNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="fratresNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
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
              <NavLink className="nav-link" to="/modulistica">
                Modulistica
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
