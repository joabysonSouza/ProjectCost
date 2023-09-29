import { useEffect, useState } from "react";
import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { parse, v4 as uuidv4 } from "uuid";
import Loader from "../Layout/Loader";
import ProjectForm from "../Projects/ProjectForm";
import Mensage from "../Layout/Mensage";
import ServiceForm from "../Services/ServiceForm";
import ServiceCard from "../Services/ServiceCard";



const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [showProject, setShowproject] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [Type, setType] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/Projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, [id]);



  const projectEdit = (project) => {
    setMensagem("");
    setShowproject(false);
    if (project.budget < project.cost) {
      //mensagem
      setMensagem(" O orçamento não pode ser menor do que o custo do projeto");
      setType("error");
      return false;


    }
    fetch(`http://localhost:5000/Projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setShowproject(!showProject);
        setMensagem("projeto atualizado com sucesso ");
        setType("success");
      })
      .catch((err) => console.log(err));
  };


  const CreateService = (project) => {
    fetch(`http://localhost:5000/Projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowServices(false)
      })

      .catch((err) => console.log(err));
      setMensagem("");

    const lastservice = project.services[project.services.length - 1];
    lastservice.id = uuidv4();

    const lastserviceCost = lastservice.cost;

    const newcost = parseFloat(project.cost) + parseFloat(lastserviceCost);

    if (newcost > parseFloat(project.budget)) {
      setMensagem("Orçamento ultarpassado, verifique o valor do servico");
      setType("error");
      project.services.pop();
      return false;
    }
    // add service cost to project total cost
    project.cost = newcost;

    // update projetcs
  };

  const toggleProjectForm = () => {
    setShowproject(!showProject);
  };
  const toggleProjectServices = () => {
    setShowServices(!showServices);
  };

  const removeService = (id, cost) => {
    const serviceUpdated = project.services.filter((service)=> service.id !== id)
    const projectUpdated = project
    projectUpdated.services = serviceUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)


    fetch(`http://localhost:5000/Projects/${projectUpdated.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type" : "Aplication/json"
      },
       body:JSON.stringify(projectUpdated)
    }).then((res)=> res.json())
    .then((data)=>{
      setProject(projectUpdated)
      setServices(serviceUpdated)
      console.log(data)
      setMensagem('serviço removido com sucesso!')
      
    })
    .catch((err)=> console.log(err))
  };

  return (
    <div>
      <div className={styles.container_project}>
        {project.name ? (
          <section className={styles.details_projects}>
            {mensagem && <Mensage type={Type} msg={mensagem} />}
            <h1>{project.name}</h1>
            <button className={styles.btn} onClick={toggleProjectForm}>
              {!showProject ? "EditarProjeto" : "Fechar"}
            </button>

            {!showProject ? (
              <div className={styles.info}>
                <p>
                  <span> Categoria:</span>
                  {project?.category?.name}
                </p>
                <p>
                  <span>Total de Orçamento: </span>R${project.budget}
                </p>
                <p>
                  <span>Total utilizado: </span>R${project.cost}
                </p>
              </div>
            ) : (
              <div className={styles.show_container}>
                <ProjectForm handleSubmit={projectEdit} projectData={project} />
              </div>
            )}

            <div className={styles.details_projects_teste}>
              <h2> Adicione um serviço :</h2>

              <button className={styles.btn} onClick={toggleProjectServices}>
                {!showServices ? "adiconar serviço" : "Fechar"}
              </button>
              <div className={styles.show_container}>
                {showServices && (
                  <ServiceForm
                    handleSubmit={CreateService}
                    projectData={project}
                    textbutton="enviar"
                  />
                )}
              </div>
            </div>
        
            
            <section className={styles.container}>
            <h2>seviços </h2> 

              {services.length > 0 &&
                services.map((service) => (
                 setServices && (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
)
                  
                ))}
              {services.length === 0 && 
              <p>Não á serviços cadrastados </p>}
            </section>
          </section>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Project;
