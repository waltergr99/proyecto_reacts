import {Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

import { NavLink } from "react-router-dom"

import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import { useContexto } from "./componentes/Card/Context"
import "./carrito.scss"



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
                          <div>
                            
                          {item.description} 
                          

                          </div>
                          <div> 

                          - S/{item.price}.00 - 

                          </div>
                          <div> 


                          Cantidad {item.cantidad} 
                          </div>
                          <div> 


                          Subtotal: S/{item.price * item.cantidad}.00 -

                          </div>
                        <div> 

                        <div>


                          Referencial :

                        </div>
                          
                           <img src={item.img}  alt="thumbnail"/>
                        </div>
                          <Button onClick={()=>removeItem(item.id,item.cantidad,item.price)}>borrar</Button>
                      </li>
                      )
                  })}
              </ul>
              <h1>Total: S/{precio_total}.00</h1></>
          ) :<><p>No hay productos en el carrito</p>
              <NavLink to="/home"><Button>Volver a comprar</Button></NavLink>
             </> 
              
          }
          <NavLink to="/"><Button  onClick={finalizarCompra}>Terminar comprar</Button></NavLink>
    </div> 
    )

}



   


export default Carrito