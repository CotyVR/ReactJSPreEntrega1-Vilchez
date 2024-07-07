import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"
import { SiIfood } from "react-icons/si";


const NavBar = () => {
    return (
      <nav className="navbar">
        <Link to ="/" className="brand">
            <SiIfood size={35} color='rgb(0, 0, 120)' />
            <p>Comida Express</p>
        </Link>
  

        <ul className="categories">
            <div className="btnWeb">
                <Link to ="/category/pizza" className="category">
                    <p>Pizza</p>
                </Link>
            </div>
   
          
            <div className="btnWeb">
                <Link to ="/category/china" className="category">
                    <p>China</p>
                </Link>
            </div>
  
            <div className="btnWeb">
                <Link to ="/category/hamburguesa" className="category">
                    <p>Hamburguesas</p> 
                </Link>
            </div>
        </ul>
 
        <CartWidget />
      </nav>
    );
};
  
export default NavBar