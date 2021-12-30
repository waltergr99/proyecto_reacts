import { useState, useEffect } from 'react'
import Header from "./componentes/Header/Header"
import Itemlistcontainer from "./componentes/ItemCount/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemCount/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import Home from "./componentes/NavBar/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import Carrito from "./Carrito"
import productoss from "./productoss.json"


function App() {

    let [show, setShow] = useState(false)

    const links = [
        { href: "/Home", name: "inicio", id: 1 },
        { href: "productos", name: "Productos", id: 2 },
        { href: "/categoria/pantalones", name: "Pantalones", id: 3 },
        { href: "/categoria/casacas", name: "Casacas", id: 4 },
        { href: "/carrito", name: "Carrito", id: 5 }
    ]

    const foo = () => {
        console.log("soy foo")
    }

    /*const productos = [
        {
            id: 1,
            title: 'Pantalones',
            description: 'Razgados y sin razgar',
            price: 'S/.70.00',
            pictureUrl: 'clasico_azul.PNG',

        },
        {
            id: 2,
            title: 'Jogger',
            description: 'Bolsillos chinos',
            price: 'S/.75.00',
            pictureUrl: 'celeste_hielo.PNG',

        },
        {
            id: 3,
            title: 'Short',
            description: 'razgados y sin razgar',
            price: 'S/.55.00',
            pictureUrl: 'Jeans_blanco.PNG',

        }

    ];*/


    return (
        <>
            <BrowserRouter>

                <Header nombre={"VIKING STORE"} edad={1} links={links} foo={foo} />
                <main>



                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/productos" element={<Itemlistcontainer gretting={"Hola mundo, este es mi proyecto de e-commerce"} links={links} productoss={productoss}/>} />
                        <Route path="/categoria/:nombre" element={<Itemlistcontainer  greeting={"Bienvenido!"} productoss={productoss} />} />  
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/producto/:idd" element={<ItemDetailContainer productoss={productoss}/>} />
                    </Routes>
                </main>
            </BrowserRouter>

        </>
    )
}

export default App