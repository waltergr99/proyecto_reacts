import React from "react"
import { useState } from "react"
import Button from 'react-bootstrap/Button'
import {Link } from "react-router-dom"

const ItemCount = ({ stock, initial, onAdd,links,setCantidad, setMostrar }) => {

    let [contador, setContador] = useState(1)

    const sumar = () => {


        if ((contador) < stock) {
            setContador(contador + 1)
        } else {

        }

    }

    const restar = () => {
        if ((contador) > 1) {
            setContador(contador - 1)
        } else {
            setContador(1)
        }


    }

    const agregarItem = () => {
        console.log("Aca agrego un item" )
        setContador(initial) 
       onAdd(contador)
  }
    return (
        <>
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