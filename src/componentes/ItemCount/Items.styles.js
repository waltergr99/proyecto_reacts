import _default from "react-bootstrap/esm/Accordion";
import { alignPropType } from "react-bootstrap/esm/types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexWrap: "wrap"
    
  },
  itemList: {
    margin:{
      
        backgroundColor: "white",
      top:100,
        bottom:350,
        left:10,
        right:5,
        boder:90,
    },
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    width: 450,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
  
  },
  title: {
    margin : _default,
    width: 450,
    height: 390,
    fontSize: 35,
    
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
   
  }
  
});

export default useStyles