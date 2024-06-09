import "./ItemListContainer.scss"
import comida from "../../img/comida.jpg"

const ItemListContainer = ({bienvenida}) =>{
    return(
        <div className="ItemListContainer">
                <h1>{bienvenida}</h1>
               <img width={150} src={ comida } alt=""/>
        </div>
    )
}
export default ItemListContainer