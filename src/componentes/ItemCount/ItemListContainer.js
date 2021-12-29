import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList";

import {useParams} from "react-router-dom"

const productosIniciales = [
    {
        id: 1, title: 'Pantalones', description: 'Razgados y sin razgar',price: 'S/.70.00',pictureUrl: 'clasico_azul.PNG',
        
    },
    {
        id: 2,title: 'Jogger', description: 'Bolsillos chinos',price: 'S/.75.00',pictureUrl: 'celeste_hielo.PNG',
        
    },
    {
        id: 3,title: "Short",description: "razgados y sin razgar", price: "S/.55.00",pictureUrl: "Jeans_blanco.PNG"
        
    }
    
]

const ItemListContainer = ({productoss},{gretting}) => {

    let [lista, setLista] = useState([])
    const { id } = useParams()

    
    useEffect(()=>{
        if (!id){
            
            
        }else{
            
           


        }
        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                    if (!id){
                res(productosIniciales)
                
            }else{
            
                res(productoss.filter(prod=>prod.title===id))
            
            };
            },2000)
        })
        promesa
        .then((productos)=>{

            if(id){


         }else{ 

            setLista(productos)
         }
        })

        .catch(() => {
            console.log("Todo mal")
        })
     
    },[id])

    return (
        <div>
               <p className="grett"> {gretting} </p>
            <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer
