import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav-menu">
      <li className="nav-item">
        <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
          <p>About Me</p>
        </Link>
      </li>
      <li className="nav-item" id="portfolio-tab">
        <Link
          to="/Portfolio"
          className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}>
          <p>Portfolio</p>
        </Link>
      </li>
      <li className="nav-item" id="contact-tab">
        <Link
          to="/Contact"
          className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>
          <p>Contact</p>
        </Link>
      </li>
      <li className="nav-item" id="resume-tab">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}>
          <p>Resumé</p>
        </Link>
      </li>
    </nav>
  );
}
