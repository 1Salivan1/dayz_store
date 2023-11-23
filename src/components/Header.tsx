import { Link } from "react-router-dom";
import "../style/header.css";

function Header() {
  return (
    <nav className="nav">
      <Link className="nav__item" to="/">
        Рынок
      </Link>
      <Link className="nav__item" to="/sellers">
        Топ продавцов
      </Link>
    </nav>
  );
}

export default Header;
