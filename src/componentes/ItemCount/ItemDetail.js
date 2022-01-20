
import ItemCount from "./ItemCount"
import useStyles from "./Items.styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useContexto } from "../Card/Context"

const ItemDetail = ({ lista }) => {

    const { addItem } = useContexto()

    const onAdd = (cantidad) => {
        addItem (lista, cantidad)
       

    }
   
        return (
            <>

                
                    <h3>DETALLE</h3>
                    <h3>ID: {lista.id}</h3>
                    <img src={lista.img}  />
                    <h3 >Descripcion: {lista.description}</h3>
                    <h3 >Precio: {lista.price}</h3>
                    <h3>Stock : {lista.stock}</h3>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </>
        )
}
export default ItemDetail


