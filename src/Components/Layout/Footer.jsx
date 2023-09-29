import React from 'react'
import styles from "./Footer.module.css"
import {BsGithub} from "react-icons/bs"
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
<>
<footer className={styles.footer}>

{/*
colocar os links do github e linkedin
*/}

      <div className={styles.itens}>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <BsGithub/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <BsLinkedin/> </a>
     </div>
     <p>
       <span>Costs</span> &copy; feito por joabyosn 2023
    </p>
            

    </footer>
</>
  )
}

export default Footer
