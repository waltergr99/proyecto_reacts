
import Button from 'react-bootstrap/Button'


const Home = () => {
  const hacerClick = () => {
    console.log("HOLA DESDE EL CLICK")
}

  return (
    
    <div>

      <h1> A CONFIRMADO LA COMPRA </h1>    
       
      
     <Button onClick={hacerClick}>Finalizar</Button>
      
      
    

    </div> 
    )

}

export default Home