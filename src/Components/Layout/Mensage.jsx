import React, { useEffect, useState } from 'react'
import styles from "./Mensage.module.css"

const Mensage = ({type , msg}) => {
 const[visible , setVisible] = useState(false)

 useEffect(()=>{
  if(!msg){
    setVisible(false)
    return
  }

  setVisible(true)

  const time = setTimeout(()=>{
    setVisible(false)

  },3000)

  return ()=> clearTimeout(time)
 },[msg])


  return (
    <>
    {visible && (<div className={`${styles.msg} ${styles[type]}`}>
      {msg}
    </div>)}
    </>
  )
}

export default Mensage
