
import { useState , useEffect } from "react"
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import {db} from "./firebase"
import {getDocs, query, collection, where} from "firebase/firestore"
import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount"


console.log(db)
const onAdd = () => {


    console.log("Producto agregado")
}

const ItemListContainer = ({productoss},{gretting}) => {

    let [lista, setLista] = useState([])
    let { id } = useParams()
    console.log(id);
    
    useEffect(()=>{
        const productosCollection = collection(db, "productos")
        setTimeout(() => { if (id){


            const consulta = query(productosCollection,
                
                where ("casacas","==",id),
                
                where("price",">",50))
            getDocs(consulta)
            .then(({docs}) => {

                setLista(docs.map((doc) =>({id: doc.id, ...doc.data()})))

            })
            .catch((error) => {
                console.log(error)

            })
        }else{

           getDocs(productosCollection)
                .then(( {docs}) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))

                }) 
                .catch((error) => {
                    console.log(error)

                })

           
        }},500)
        /*
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
     */
    },[id])

    return (
        <div>
               <p> {gretting} </p>
            <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer
