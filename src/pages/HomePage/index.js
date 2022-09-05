import beers from '../../assets/beers.png'
import newbeer from '../../assets/new-beer.png'
import randombeer from '../../assets/random-beer.png'
import styles from './style.module.css'
import { Link } from "react-router-dom";


function HomePage(){

    return(

        <>
        <div className={styles.ccontainer}>
        <Link to='/InfoPages/beers'  >
            <div className={styles.card}>
                <img  src={beers} className={styles.img} alt="..."></img>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia nisi ipsum, ut fringilla tortor interdum ac. Sed molestie varius quam, sed dictum nulla sodales nec. Vivamus mollis velit et quam finibus sollicitudin. Nullam cursus diam et felis tincidunt, eu posuere neque feugiat. Duis ultrices in magna sed egestas.</p>
            
            </div>
         </Link> 
         <Link to='/InfoPages/randombeer'  >      
            <div className={styles.card}>
                    <img  src={randombeer} className={styles.img} alt="..."></img>
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia nisi ipsum, ut fringilla tortor interdum ac. Sed molestie varius quam, sed dictum nulla sodales nec. Vivamus mollis velit et quam finibus sollicitudin. Nullam cursus diam et felis tincidunt, eu posuere neque feugiat. Duis ultrices in magna sed egestas.</p>
            
            </div>
            </Link> 
            <Link to='/InfoPages/newbeer'  >   
            <div className={styles.card}>
                    <img  src={newbeer} className={styles.img} alt="..."></img>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia nisi ipsum, ut fringilla tortor interdum ac. Sed molestie varius quam, sed dictum nulla sodales nec. Vivamus mollis velit et quam finibus sollicitudin. Nullam cursus diam et felis tincidunt, eu posuere neque feugiat. Duis ultrices in magna sed egestas.</p>
            
            </div>
            </Link> 
        </div>
        </>
    )
}


export default HomePage;