import { useState, createContext, useEffect } from 'react'
import Header from "./componentes/Header/Header"
import Itemlistcontainer from "./componentes/ItemCount/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemCount/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import Home from "./componentes/NavBar/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import Carrito from "./Carrito"
import productoss from "./productoss.json"
import CustomProvider from './componentes/Card/Context';


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


    return (

        <CustomProvider>
            <BrowserRouter>

                <Header nombre={"VIKING STORE"} edad={1} links={links} foo={foo} />
                <main>
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/productos" element={<Itemlistcontainer gretting={"Hola mundo, este es mi proyecto de e-commerce"} links={links} productoss={productoss} />} />
                        <Route path="/categoria/:nombre" element={<Itemlistcontainer greeting={"Bienvenido!"} productoss={productoss} />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/producto/:idd" element={<ItemDetailContainer productoss={productoss} />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App