import React, { useEffect, useState } from "react";
import Mensage from "../Layout/Mensage";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import LinkButton from "../Layout/LinkButton";
import ProjectsCard from "../Projects/ProjectsCard";
import Loader from "../Layout/Loader";

const projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoader, setRemoverloader] = useState(false);
  const [projectMessage, setProjectMessage] = useState();
  const location = useLocation();
  let mensage = "";
  if (location.state) {
    mensage = location.state.mensagem;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/Projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoverloader(true);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, []);

  const RemoveProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={styles.projects_title}>
        <h1>Projects</h1>
        <LinkButton to="/NewProject " text="criar projeto" /> 
      
      </div>
      
        
          <h3>Meus Projetos...</h3>
        

       
     
      <div className={styles.projects_container}>
    
        {mensage && <Mensage type="success" msg={mensage} />}
        {projectMessage && <Mensage type="success" msg="Projeto removido com sucesso!!" />}

        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectsCard
              name={project?.name}
              key={project.id}
              id={project.id}
              budget={project.budget}
              category={project?.category?.name}
              handleRemove={RemoveProject}
            />
          ))}
        {!removeLoader && <Loader />}
      </div>
    </>
  );
};

export default projects;
