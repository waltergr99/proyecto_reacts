import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexWrap: "wrap"
    
  },
  itemList: {
    margin:{
      
        
      top:50,
        bottom:350,
        left:10,
        right:5,
        boder:100,
    },
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    width: 450,
    height: 250,
    backgroundColor: '#507b88',
    borderRadius: 10,
  
  },
  title: {
    fontSize: 20
  },
  price: {
    fontSize: 12,
    fontWeight: "bold"
  }
  
});

export default useStyles