import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { useContexto } from "./componentes/Card/Context"


const Carrito = () => {
  const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto()


  return (


    <>
      Soy Carrito
      {carrito.length > 0 ? (
        <ul>
          {carrito.map((item, indice) => {
            return <li key={indice}>{item.description} - ${item.price}</li>
          })}
        </ul>
      ) : <p>No hay productos en el carrito</p>}

      <p className={carrito.length > 0 ? "rojo" : "negro"} >si tengo cosas en el carrito soy rojo, sino negro</p>
    </>

  )
}


export default Carrito