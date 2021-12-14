import React from 'react';

const Header = ({foo}) => {


 foo()


    return (

        <header id="mian-header" className="header">
      <div>
      <h1>E-Commerce</h1>

      </div>
       
        <span onClick={foo} className= "material-icons">
             shopping_cart
       </span>
       
   
       <div>
      
        </div>
       <nav> 
               <a href="#">link</a>
               <a href="#">link</a>

        </nav>
       </header>

     )

}
export default Header