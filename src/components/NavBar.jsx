import { Link, useLocation } from "react-router-dom";
// remember to implement css separately

export default function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <ul>
      <li className="nav-item">
        <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}>
          Resumé
        </Link>
      </li>
    </ul>
  );
}
