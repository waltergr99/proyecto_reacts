import { collection, doc, getDoc } from "firebase/firestore"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import {db} from "./firebase"
import ItemDetail from "./ItemDetail"
import ItemList from "./ItemList";

const ItemDetailContainer = ( {productoss} ) => {

    let [lista,setLista] = useState([null])
    let { idd } = useParams();
    console.log(idd);

        /*
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
    */
    useEffect(() => {

        const productosCollection = collection(db, "productos")

        const refDoc = doc(productosCollection, idd)
        getDoc(refDoc)
            .then((resultado)=>{
                setLista(resultado.data())

            })
            .catch((error) =>{

            })
    /*
    
   
   getItem(),
   */ 
},[idd])

    return (
       <div>
           <ItemDetail lista={lista}/>
           
       </div> 
    )
}

export default ItemDetailContainer
