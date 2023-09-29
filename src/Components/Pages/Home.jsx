import React from "react";
import savings from "../../img/savings.svg"
import styles from "./Home.module.css"
import LinkButton from "../Layout/LinkButton";

const Home = () => {
  return (
    <>
     <section className={styles.home_container} >
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos</p>

      
      
      <LinkButton to="/NewProject" text="criar projeto"/>

      <img src={savings} alt="Costs"/>

      
      </section>
    </>
  );
};

export default Home;
