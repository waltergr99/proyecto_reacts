import Header from "./componentes/Header/Header"
import NavBar from "./componentes/NavBar/NavBar"
import Itemlistcontainer from "./componentes/ItemCount/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
   

    const links = [
        { href: "#", name: "inicio", id: 1 },
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
            
            <NavBar />
            <Header nombre={"E-Commerce"} edad={1} links={links} foo={foo}>
                <p>Hola</p>
                <p>Hola</p>
            </Header>
            <Itemlistcontainer gretting={"Hola mundo, este es mi proyecto "} links={links}/>

        </>
    )
}

export default App