import React from "react"
import { useState } from "react"
import Button from 'react-bootstrap/Button'
import {Link } from "react-router-dom"

const ItemCount = ({ stock, initial, onAdd,setCantidad, setMostrar }) => {

    let [contador, setContador] = useState(initial)

    const sumar = () => {


        if ((contador) < stock) {
            setContador(contador + 1)
        } else {

        }

    }

    const restar = () => {
        if ((contador) > 0) {
            setContador(contador - 1)
        } else {
            setContador(0)
        }


    }
 /*
    const agregarItem = (e) => {
        onAdd(contador)
        console.log("Aca agrego un item" + contador + " UNIDADES AL CARRITO")
        e.target.disabled = true
        setMostrar(true) 
        
        setTimeout(() => {

        }, 3000);
        */
        const agregarItem = () => {
            console.log("Aca agrego un item con onAdd")
            setContador(initial)
            onAdd(contador)
        }
  
    return (
        <>
            

                <h4>Producto: Ropa</h4>
                
                <h4>Stock: {stock}</h4>
                <h4>{contador}</h4>

                    <Button onClick={sumar}>+</Button>
                    <Button onClick={restar}>-</Button>
                    <Link to={`/carrito`}>
                    <Button onClick={agregarItem}>Agregar</Button>
                    </Link>
                   
        </>

    )
}

export default ItemCount 

/*return (
    <>
    <div id="fichaContador">       
    <div id="contadorProducto">
    <span class="material-icons" onClick={sumar}>+</span>
    <p>{contador}</p>
    <span class="material-icons" onClick={restar}>-</span>
    
   <Link to={`/carrito`}><button onClick={agregarItem}>AGREGAR</button></Link>
    </div>
    </div>
    </>
)
}

export default ItemCount */