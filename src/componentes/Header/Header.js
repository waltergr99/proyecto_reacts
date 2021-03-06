import { Link, NavLink} from "react-router-dom"

import { NavBar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useContexto} from "../Card/Context"



const Header =({ nombre,links}) => {


  const { cantidad_total} = useContexto()
  console.log("Aqui en header hay" + cantidad_total)

    return (

        <header id="main-header" className="header">
      <div id="brand">
        <NavLink to="/">  
        <img className="fox" src="/viking.png" alt="logo" />
      <h1>{nombre}</h1>
        
        </NavLink>

      </div>
       <nav> 
            {links.map((elemento, indice) => {
                  return <NavLink key={elemento.id} to={elemento.href}>{elemento.name}</NavLink>



            })}
            <NavLink to="./carrito"> 
            
            <span className="material-icons">
                        shopping_cart{cantidad_total}
                    </span>
            
              </NavLink>
          </nav>
       </header>

     )

}
export default Header