import './App.css'
import comida from "./img/comida.jpg"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <img width={150} src={ comida } alt=""/>
    </div>
  )
}

export default App
