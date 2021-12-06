


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
<Nav.Link href="blog">Blog</Nav.Link>
<Nav.Link href="about">Sobre de </Nav.Link>
<Nav.Link href="contacto">Contacto</Nav.Link>

</Nav>

</Navbar>
 <h2> OFERTAS DE TEMPORADA </h2>
 </>
}

export default NavBar 



