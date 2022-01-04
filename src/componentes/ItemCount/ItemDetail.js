
import ItemCount from "./ItemCount"
import useStyles  from "./Items.styles";
import { useState  } from "react";

import React from "react"


const ItemDetail = ({ lista }) => {
    
    const styles = useStyles()
    let [cantidad,setCantidad] = useState("")
    let [mostrar, setMostrar] = useState(false)
    const onAdd =() => {
        console.log("cantidad de unidades" + cantidad)

    }

   

    if (mostrar === false) {
    return (
        
            <article className={styles.detailtitle}>
                <h3 >{lista.title} </h3>
                <h3 >Categoria: {lista.description}</h3>
                <h3 >Descripcion: {lista.price}</h3>
                <ItemCount stock={5} initial={1} onAdd={onAdd} setCantidad={setCantidad} setMostrar={setMostrar} />
            </article>
        
    )
    }else{
        return (

            <div> 

            <h1>Detalle</h1>
            <p>${lista.productoss}</p>
            <p>${lista.precio}</p>
            <h2>Tu producto ha sido ingresado. Ingresaste {cantidad} unidades </h2>




            </div>





        )




    }
}
export default ItemDetail 


