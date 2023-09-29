import React from 'react'
import styles from "../Projects/ProjectsCard.module.css"
import { BsFillTrashFill} from "react-icons/bs"

const ServiceCard = ({id, name , description, cost , handleRemove}) => {

  const remove =(e)=>{
    e.preventDefault()
    handleRemove(id, cost)

  }
  return (
   
    <div className={styles.Card_container}>
  
        <h4>{name}</h4>
        <p>
          <span>
            Custo total: R${cost}
          </span>
          </p>
       <p>{description}</p>

       <div className={styles.Card_actions}>
        <button onClick={remove}><BsFillTrashFill/> excluir</button>
       </div>
   
      
    </div>
 
  )
}

export default ServiceCard
