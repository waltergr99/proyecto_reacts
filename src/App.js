import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import Header from './componentes/Header/Header';
import Button from 'react-bootstrap/Button';
import ItemListContainer from "./componentes/ItemCount/ItemListContainer"


function App() {

  const foo = (a) => {
 console.log("soy foo")

  }

  return (
  
  <>
   
     
       <NavBar  />
       <Header foo={foo}/>
       <Button variant="primary">Primary</Button>{' '}
       <ItemListContainer gretting="Hola mundo, este es mi proyecto de e-commerce"/>
    </>
    
  )
}

export default App;
