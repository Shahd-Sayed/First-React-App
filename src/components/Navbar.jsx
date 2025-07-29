import logo from "../assets/Group.svg";
import "../Layouts/Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="container">
        <img src={logo} alt="logo" />
        <h1>ReactFacts</h1>
      </nav>
    </header>
  );
}
