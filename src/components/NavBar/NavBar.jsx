import "./NavBar.css"
import CartWidget from "./CartWidget.jsx"
import { SiIfood } from "react-icons/si";


function NavBar() {
    return (
        <nav className="navbar">
            <div className="brand">
                <SiIfood size={35} color='rgb(0, 0, 120)' />
                <p>Comida Express</p>
            </div>

            <ul className="opc">
                <li className="btnWeb">Pizza</li>
                <li className="btnWeb">China</li>
                <li className="btnWeb">Coreana</li>
                <li className="btnWeb">Hamburguesa</li>
                <li className="btnWeb">Vegetariana</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar