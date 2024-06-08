import "./NavBar.css"
import logo from "../img/logo.jpg"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="brand">
                <img width={200} src= { logo } alt="" />
            </div>
            <ul>
                <li>Pizza</li>
                <li>China</li>
                <li>Coreana</li>
                <li>Hamburguesa</li>
                <li>Vegetariana</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar