import React from 'react'
import styles from "./ButtonSubmit.module.css"


const ButtonSubmit = ({text , onClick}) => {
  return (
    
    <div className={styles.btnSubmit}>
     <button type="submit" onClick={onClick}>{text}</button>
    </div>
  )
}

export default ButtonSubmit
