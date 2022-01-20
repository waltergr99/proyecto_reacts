import React from "react"
import { useState } from "react"
import Button from 'react-bootstrap/Button'
import {Link } from "react-router-dom"

const ItemCount = ({ stock, initial, onAdd,setCantidad, setMostrar }) => {

    let [contador, setContador] = useState(1)

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
            setContador(1)
        }


    }

    const agregarItem = (e) => {
        onAdd(contador)
        console.log("Aca agrego un item" )
       
        setMostrar(true) 
        
       onAdd(contador)

        
        
  }
    return (
        <>
            

               
                <h4>{contador}</h4>

                    <Button onClick={sumar}>+</Button>
                    <Button onClick={restar}>-</Button>
                    <Link to={`/carrito`}>
                    <Button onClick={onAdd}>Agregar</Button>
                    </Link>
        </>

    )
}

export default ItemCount 