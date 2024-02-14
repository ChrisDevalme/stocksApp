import { Link } from "react-router-dom"
import styles from "./Nav.module.scss"

export default function Nav(props) {
    return(
        <div className={styles.nav}>
        <Link to="/">
          <div>iStocks</div>
        </Link>
        <Link to="/stocks">
          <div>Stocks</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
      </div>
    )
}