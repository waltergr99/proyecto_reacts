import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

 

const ItemDetailContainer = ({productoss}) => {

        let [lista,setLista] = useState([])
        let { idd } = useParams();
        console.log(idd);
        
    const getItem = () =>{
            const promesa = new Promise((res)=>{
                setTimeout(()=>{
                    res(productoss.find(prod=>prod.id===idd));
                },2000);
            });
            
            promesa
            .then((prod)=>{
            
                setLista(prod);
           
            })
    
    
    } 
    useEffect(() => getItem(),[idd])


    return (
       <div>
           <ItemDetail lista={lista}/>
           
       </div> 
    )
}

export default ItemDetailContainer
