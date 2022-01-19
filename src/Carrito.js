import {NavLink} from "react-router-dom"
import { useContexto } from "./componentes/Card/Context"
import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import {db} from "./componentes/ItemCount/firebase"



const Carrito = () => {
  const { carrito, removeItem, clear,precio_total } = useContexto()
  console.log("este es un carrito de items " + carrito)
  const finalizarCompra = () => {
    console.log("Guardando la compra en la db...")
   /*
  }

    const ventasCollection = collection(db, "ventas")
    addDoc(ventasCollection, {
      buyer : {
        
        item
      
      }



*/

    
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

              {item.description} - {item.price}.00
              <div> 

              Cantidad : {item.cantidad} 

              </div>
              <div> 


            
              </div>

              <button onClick={()=>removeItem(item.id,item.cantidad,item.price)}>borrar</button>
              </li>
          )

          })}
        </ul>
        <h1>Total:{precio_total}</h1></>
      ) :<> <p>No hay productos en el carrito</p>
      <NavLink to="/productos"><button>Volver a comprar</button></NavLink>
    </>
    }
    <NavLink to="/"><button onClick={finalizarCompra}>Terminar comprar</button></NavLink>
{}
    </div>
  )
}


export default Carrito