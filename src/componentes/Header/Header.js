import { Link, NavLink} from "react-router-dom"

import { NavBar, Container, Nav, NavDropdown } from "react-bootstrap"

const Header =({ nombre,links}) => {

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
            <NavLink to="./ItemCount/Item"> 
            
            <span className="material-icons">
                        shopping_cart
                    </span>
            
              </NavLink>
          </nav>
       </header>

     )

}
export default Header