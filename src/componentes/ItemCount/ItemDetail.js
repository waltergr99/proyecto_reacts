
import ItemCount from "./ItemCount"
import useStyles  from "./Items.styles";
import { useState  } from "react";

import React from "react"
import { useContexto } from "../Card/Context";


const ItemDetail = ({ lista }) => {
    
    const styles = useStyles()
    /*
    let [cantidad,setCantidad] = useState("")
    */

    let [mostrar, setMostrar] = useState(false)
    
    const { addItem} = useContexto()

    /*const onAdd =() => {
        console.log("cantidad de unidades" + cantidad)

    }

   */

    const onAdd = (cantidad) => {
        
        console.log("cantidad de unidades " + cantidad)
        addItem(lista,cantidad)
    }

    if (mostrar === false) {
    return (
        
            <article className={styles.detailtitle}>
                <h3 >{lista.title} </h3>
                <h3 >Categoria: {lista.description}</h3>
                <h3 >Descripcion: {lista.price}</h3>
                <ItemCount stock={5} initial={1} onAdd={onAdd}  />
            </article>
        
    )
    }else{

        return (

            <div> 

            <h1>Detalle</h1>
            <p>${lista.productoss}</p>
            <p>${lista.precio}</p>
            <h2>Tu producto ha sido ingresado. Ingresaste unidades </h2>




            </div>





        )




    }
}
export default ItemDetail 


