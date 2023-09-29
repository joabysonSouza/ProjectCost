import React from "react";
import {  useNavigate } from 'react-router-dom'
import styles from "./NewProject.module.css";
import ProjectForm from "../Projects/ProjectForm";

const NewProjects = () => {


  const history = useNavigate()

  const createProjct =(projects)=>{

    projects. any = 0
    projects. services = []


    fetch("http://localhost:5000/Projects",{
      method :"POST",
      headers: {
        "content-type":"application/json",
      }, body:JSON.stringify(projects)

    
    }).then((resp)=> resp.json())
    .then((data)=> console.log(data),
    history('/Projects', { state: { message: 'Projeto criado com sucesso!' } }))

    
    
      .catch((err)=>{
      console.log(err)
    })
    

  }

  
  
  
  
  
  return (
    <div className={styles.projects}>
      <h1>Criar projeto</h1>
      <p>
        crie seu projeto para depois adicionar <br />
        os servicos
      </p>
      <ProjectForm handleSubmit={createProjct} />

    </div>
  );
};

export default NewProjects;
