import { Link } from "react-router-dom";
import styles from './style.module.css'

const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to='/'>Home page</Link>
                <Link to='/chat'>Chat</Link>
                <Link to='/test'>atest API</Link>
                {/*<Link to='/smart'>Smart house</Link>*/}
           </nav> 
        </div>
    )
}

export default Header