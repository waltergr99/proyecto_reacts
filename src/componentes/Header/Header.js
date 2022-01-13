import { Link, NavLink} from "react-router-dom"

import { NavBar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useContexto } from "../Card/Context"



const Header =({ nombre,links}) => {
  const { cantidad_total } = useContexto()
      console.log("AQUI EN HEADER HAY "+ cantidad_total)

    return (

        <header id="main-header" className="header">
      <div id="brand">
        <NavLink to="/">  
        <img  src="/viking.png" alt="logo" />


      <h1>{nombre}</h1>
        
        </NavLink>

      </div>
       <nav> 
            {links.map((elemento, indice) => {
                  return <NavLink key={elemento.id} to={elemento.href}>{elemento.name}</NavLink>



            })}
            <NavLink to="/carrito"> 
            
            <span className="material-icons">
                        shopping_cart
                    </span>
            {cantidad_total}
              </NavLink>
                  

          </nav>
       </header>

     )

}
export default Header