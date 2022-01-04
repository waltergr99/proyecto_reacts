import {Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'


const Carrito = () => {
    
        const hacerClick = () => {
          console.log("HOLA DESDE EL CLICK")
      }
           
           return (
    
    <div>

      <h1> HOLA , PARA CONFIRMAR LA COMPRA DELE CLICK </h1>    
      <Link to={`/Home`}> 
     <Button onClick={hacerClick}>click</Button>
     </Link>
    </div> 
    )

}



   


export default Carrito