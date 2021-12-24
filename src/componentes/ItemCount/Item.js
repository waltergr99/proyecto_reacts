import React from'react'
import useStyles from './Items.styles'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'



const Item = ({ item }) => {
    const styles = useStyles()
    return (
        
                <li className={styles.itemList}>
                <h3 className={styles.title}>{item.description}</h3>
                <p className={styles.price}>Precio : ${item.price}</p>
                <img src={item.pictureUrl} alt="thumbnail" />
                <Button href="./Index" >ver detalle </Button>
                <Link to={`/item/${item.id}`}>
     <button type="button">
          Click Me!
     </button>
 </Link>
            </li>


    )

}
export default Item