import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import { getDocs, query, collection , where } from "firebase/firestore"
import { db } from "./firebase";


console.log(db)
const onAdd = ()=>{
    console.log("Producto agregado")
}


const Itemlistcontainer = ({productoss},{gretting}) => {

    let [lista, setLista] = useState([])
    let { nombre } = useParams();
    console.log(nombre);

   
    useEffect(()=>{

        const productosCollection = collection(db, "productos")
        setTimeout(()=>{
            if (nombre) {

            const consulta = query(productosCollection,where("categoria","==",nombre),where("price",">",0))
             getDocs(consulta)
                .then(({ docs }) => {
                    console.log(docs)
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                    console.log(lista)
                  
 })
                .catch((error) => {
                    console.log(error)
                })

        } else {

            getDocs(productosCollection)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })
        }},500)
    },[nombre]);


    return (
        <>

            <main>
                
               <p className="grett"> {gretting} </p>
                
            </main>
            <ItemList lista={lista}/>
      

        </>
    )
}

export default Itemlistcontainer