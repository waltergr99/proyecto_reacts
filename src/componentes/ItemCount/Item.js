import React from'react'
import useStyles from './Items.styles'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'



const Item = ({ item }) => {
    const styles = useStyles()
    return (
        
                <li className={styles.itemList}>
                
                <h3 className={styles.title}>{item.description}</h3>
                <p className={styles.price}>Precio : {item.price}</p>
                <p className={styles.price}>Stock : {item.stock}</p>
               
                <img src={item.img} alt="thumbnail" />

                
                <Link to={`/producto/${item.id}`} className='verdt'>
     <Button type="button">
          Adquirir
     </Button>
 </Link>
            </li>


    )

}
export default Item