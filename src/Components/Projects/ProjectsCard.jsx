import React from "react";
import { Link } from "react-router-dom";
 import {BsPencil , BsFillTrashFill} from 'react-icons/bs'
import styles from "./ProjectsCard.module.css";
import Container from "../Layout/Container"

const ProjectsCard = ({ name, id, budget, category, handleRemove }) => {

  const remove =(e)=>{
    e.preventDefault()
    handleRemove(id)

  }
  return (
    <>

    <section className={styles.Card_container}>
      
        <h4>{name}</h4>
        <p>
<span className={styles.category_text}></span>
{category}
        </p>
        <div>Orçamento total: R${budget}</div>
  
        <div className={styles.card_projects_icons}>
        <Link to={`/Project/${id}`}>
         Editar
        <BsPencil/>
          </Link>
        <button onClick={remove}>
          Remover
          <BsFillTrashFill/>

        </button>
      </div>
      </section>
  </>
  );
};

export default ProjectsCard;
