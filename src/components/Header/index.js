import {Link} from "react-router-dom";
import logo from './logo.png';
import styles from './Headir.module.css';
import HeaderLink from "./HeaderLink";


function Headeer() {
  return (
    <header className={styles.headir}>
      <Link to="./">
        <img className={styles.LogoImg} src={logo} alt="Logo from the company"></img>
      </Link>

      <nav>
        <HeaderLink url="./">
          Home
        </HeaderLink>

        <HeaderLink url="./Favoritos">
          Favoritos
        </HeaderLink>

      </nav>
    </header>
  )
  
}

export default Headeer;