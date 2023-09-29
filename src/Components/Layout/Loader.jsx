import React from 'react'
import loading from '../../img/loading.svg'
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.container_loader}>
        <img src={loading}
        alt="loaging" 
        className={styles.loader_icon}/>
      
    </div>
  )
}

export default Loader
