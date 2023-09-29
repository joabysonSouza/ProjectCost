import React from 'react'
import styles from "./Input.module.css"

const Input = ({type ,text , name ,value, placeholder,handleOnchange}) => {
  

  return (

    <div className={styles.Input_container}>
        <label htmlFor={name}>{text}:</label>
        
        <input
            type={type}
            value={value}
            id={name}
            text={text}
            name={name}
            placeholder={placeholder} 
            onChange={handleOnchange}/>
      
    </div>
  )
}

export default Input
