import React from 'react'
import cost_logo from "../../img/costs_logo.png"
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const NavBar = () => {
  return (
    <>
    <header className={styles.header}>
    <Link to="/"> 
       <img src={cost_logo} 
        alt="logp"
        className={styles.logo}/>
     </Link>

    <nav className={styles.menu}>
          <Link to="/">Home</Link>
          <Link to="/Projects">Projetos</Link>
          <Link to="/Contacts">Contacts</Link>
          <Link to="/Company">Company</Link>
    
        </nav>
    
    </header>
      
    </>
  )
}

export default NavBar
