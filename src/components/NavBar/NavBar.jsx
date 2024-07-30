//Vinculos
import CartWidget from "./CartWidget";

//Librerias
import { Link } from "react-router-dom";
import { SiIfood } from "react-icons/si";

//Estetica
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <SiIfood size={35} color="rgb(0, 0, 120)" />
        <p>Comida Express</p>
      </Link>

      <ul className="categories">
        <Link to="/category/pizza" className="category">
          <div className="btnWeb">
            <p>Pizza</p>
          </div>
        </Link>

        <Link to="/category/china" className="category">
          <div className="btnWeb">
            <p>China</p>
          </div>
        </Link>

        <Link to="/category/hamburguesa" className="category">
          <div className="btnWeb">
            <p>Hamburguesas</p>
          </div>
        </Link>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
