import Header from "./componentes/Header/Header"
import NavBar from "./componentes/NavBar/NavBar"
import Itemlistcontainer from "./componentes/ItemCount/ItemListContainer";
import Carrito from "./Carrito"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import ItemDetailContainer from "./componentes/ItemCount/ItemDetailContainer";
import "./App.scss"

function App() {
   
    let [show, setShow] = useState(false)

    const links = [
        { href: "/", name: "inicio", id: 1 },
        { href: "#", name: "Productos", id: 2 },
        { href: "#", name: "Contactos", id: 3 },
        { href: "#", name: "Carrito", id: 4 }
    ]

    const foo = () => {
        console.log("soy foo")
    }

    const productos = [
        {
            id: 1,
            src: 's',
            alt: 'Casacas, modelos exclusivos',
            nombre: 'Artículo 1',
            stock: 10,
            precio: 52
        },
        {
            id: 2,
            src: 's',
            alt: 'Casacas, modelos exclusivos',
            nombre: 'Artículo 2',
            precio: 82
        },
        {
            id: 3,
            src: 's',
            alt: 'Casacas, modelos exclusivos',
            nombre: 'Artículo 3',
            precio: 99
        },
    ];

   
    return (
        <>
            <BrowserRouter>  
        
            <Header nombre={"VIKING STORE"} edad={1} links={links} foo={foo}/>
               <main> 
               
           
           
           <Routes>  
          
           <Route path="/carrito" element={<Carrito />} />
           <Route path="/" element={<Itemlistcontainer greeting="Welcome" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
            </main>
            </BrowserRouter>
          
        </>
    )
}

export default App