import { Children, createContext, useContext, useState } from "react";


const contexto = createContext()


export const { Provider} = contexto

export const useContexto = () => {
    return useContext(contexto)

}

const CustomProvider = ({children}) => {
    const [precio_total,setPrecioTotal] = useState(0)
    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])

    const addItem = (item,cantidad) => {

        const id = item.idd
        if (isInCart(id)) {


            const copia_producto = {...item}
            let match = copia_producto.find((p) => p.idd === item.idd)
            match.cantidad = match.cantidad + cantidad
            setCarrito(copia_producto)

        }else {

             const producto_con_cantidad = {
                 
                ...item,
                cantidad
    }
        setCarrito([...carrito,producto_con_cantidad])
}
        setCantidadTotal(cantidad_total + cantidad)
        setPrecioTotal(precio_total + (item.price * cantidad))
      
    }

    //BORRAR DEL CARRITO

    const removeItem = (id,cantidad,precio) => {
        let carritoFiltrado = carrito.filter(e => (e.idd) !== id)
        setCarrito(carritoFiltrado)
        console.log("carrito filtrado" + carritoFiltrado)
        setPrecioTotal(precio_total - (precio * cantidad))
    }

    //LIMPIAR CARRITO

    const clear = () => { 
        
        setCarrito([])
        setCantidadTotal(0)
    
    }

    const isInCart = (id) => {
        return carrito.some((p) => p.idd === id)
    }

    //VALOR DEL CONTEXTO

    const valorDelContexto = {
        cantidad_total , 
        precio_total,
        carrito , 
        addItem , 
        removeItem ,
        clear
    }

/*
    const totalDelCarrito = (item,cantidad,precio) => {

        const copia_producto = [...carrito]
    }
    */
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider


/*export const useContexto = () =>{
    return useContext(contexto)
}*/