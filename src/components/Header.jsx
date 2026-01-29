import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/">
          Fratres Gravina
        </NavLink>

        <div>
          <NavLink className="nav-link text-white" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link text-white" to="/chi-siamo">
            Chi siamo
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
