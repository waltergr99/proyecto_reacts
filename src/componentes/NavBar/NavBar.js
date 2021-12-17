


import React from 'react'
import { Nav,Navbar,NavDropdown } from 'react-bootstrap'


const  NavBar = () => 


{

 return <>

<Navbar bg="dark" variant="dark"
     
sticky="top" > 
<Navbar.Brand >  

 VIKING 
 STORE 
 
 </Navbar.Brand>  

<Nav> 
<NavDropdown titlo="Products">

</NavDropdown>

<Nav.Link href="./viking.png">Logo</Nav.Link>

<Nav.Link href="./CartWidget">Blog</Nav.Link>
<Nav.Link href="about">Sobre de </Nav.Link>
<Nav.Link href="contacto" > Carrito <span className= "material-icons">  shopping_cart </span>
 </Nav.Link>

</Nav>
<i class="bi bi-arrow-down-square"></i>
</Navbar>
 <h2> OFERTAS DE TEMPORADA </h2>
 
 </>
}
<div>aaaaaaaaaaaaa</div>


export default NavBar 