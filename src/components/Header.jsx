import NavBar from "./NavBar";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <h1>Tania Shirkey</h1>
      <h4 className="position">Junior Frontend Developer</h4>
      <NavBar />
      <div className="header-divider"></div>
    </header>
  );
}
