import { Link } from "react-router-dom"
import classes from './MainNavigationBar.module.css'
function NavigationBar() {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.ul}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
            </ul>
        </nav>
    </header>
}

export default NavigationBar