import { useState , useEffect } from "react"
import ItemDetail from "./ItemDetail"


  const products = 
    {
        id: 1,
        title: 'DETALLES PRODUCTOS',
        description: 'Razgados y sin razgar',
        price: 'MAS INFORMACION AL INTERNO',
        pictureUrl: 'url',
        
    }


const ItemDetailContainer = () => {

        let [lista,setLista] = useState([])
    
        useEffect(()=>{
    
            const promesa = new Promise((res,rej)=>{
                setTimeout(()=>{
                    res(products)
                },2000)
            })
            
            promesa
            .then((productos)=>{
                console.log("Todo bien")
                setLista(productos)
            })
            .catch(()=>{
                console.log("Todo mal")
            })
    
    
    },[])
    return (
       <div>
           <ItemDetail lista={lista}/>
           
       </div> 
    )
}

export default ItemDetailContainer
