import logo from './viking.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import { Nav,Navbar,NavDropdown } from 'react-bootstrap'
import Header from './Header';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
     
     
       <NavBar  />
        
  
       <Header/>
       <Button variant="primary">Primary</Button>{' '}

     
    </div>
    
  );
}

export default App;
