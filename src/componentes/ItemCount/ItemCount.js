import React from "react"
import { useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {

    let [contador, setContador] = useState(0)

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

    const agregarItem = () => {
        console.log("Aca agrego un item")
  
  }
    return (
        <>
            
                <h4>Producto: Ropa</h4>
                
                <h4>Stock: {stock}</h4>
                <h4>{contador}</h4>
                    <button onClick={sumar}>SUMAR</button>
                
                    <button onClick={restar}>RESTAR</button>
               
                <button onClick={agregarItem}>Agregar</button>

        </>

    )
}

export default ItemCount