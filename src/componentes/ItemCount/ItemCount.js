import React from "react"
import { useState } from "react"
import Button from 'react-bootstrap/Button'

const ItemCount = ({ stock, initial, onAdd, links }) => {

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

                    <Button onClick={sumar}>+</Button>
                    <Button onClick={restar}>-</Button>
                    <Button onClick={onAdd}>Agregar</Button>

        </>

    )
}

export default ItemCount