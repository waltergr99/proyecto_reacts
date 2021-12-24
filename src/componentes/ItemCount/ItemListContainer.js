import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";


const onAdd = ()=>{

    console.log("Producto agregado")
}
const products = [
    {
        id: 1,
        title: 'Pantalones',
        description: 'Razgados y sin razgar',
        price: 'S/.70.00',
        pictureUrl: 'url',
        
    },
    {
        id: 2,
        title: 'Jogger',
        description: 'Bolsillos chinos',
        price: 'S/.75.00',
        pictureUrl: 'url',
        
    },
    {
        id: 3,
        title: 'Short',
        description: 'razgados y sin razgar',
        price: 'S/.55.00',
        pictureUrl: 'url',
        
    },
    
];

const ItemListContainer = ({gretting}) => {

    let [lista, setLista] = useState([])
    
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
        <>

            <main>
                
               <p className="grett"> {gretting} </p>
                
                <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>

            </main>

            <ItemList lista={lista}/>
            <ItemDetailContainer/>

        </>
    )
}

export default ItemListContainer
