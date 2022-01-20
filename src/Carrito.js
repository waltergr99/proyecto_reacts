import {Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

import { NavLink } from "react-router-dom"

import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import { useContexto } from "./componentes/Card/Context"

const Carrito = () => {
    
  const { carrito, removeItem , clear, precio_total } = useContexto()
  console.log("este es carrito con items"+carrito)
  const finalizarCompra = () => {
      console.log("Guardando la compra en la db...")
      clear()
      }
           
       
    return (
      <div>
          Soy Carrito
          {carrito.length > 0 ? (
              <>
              <ul>
                  {carrito.map((item, indice) => {
                      return (
                      <li key={indice}>
                          {item.description} - S/{item.price}.00 - Cantidad {item.cantidad} Subtotal: S/{item.price * item.cantidad}.00 -
                          <button onClick={()=>removeItem(item.id,item.cantidad,item.price)}>borrar</button>
                      </li>
                      )
                  })}
              </ul>
              <h1>Total: S/{precio_total}.00</h1></>
          ) :<><p>No hay productos en el carrito</p>
              <NavLink to="/home"><button>Volver a comprar</button></NavLink>
             </> 
              
          }
          <NavLink to="/"><button  onClick={finalizarCompra}>Terminar comprar</button></NavLink>
    </div> 
    )

}



   


export default Carrito