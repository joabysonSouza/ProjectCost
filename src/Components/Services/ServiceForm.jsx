import React from 'react'
import styles from "../Projects/ProjectForm.module.css"
import ButtonSubmit from '../Form/ButtonSubmit'
import Input from '../Form/Input'
import {useState} from "react"






const ServiceForm = ({handleSubmit,textbutton, projectData}) => {

    const [service, setServices] = useState({})

    const Submit = (e)=>{
       e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
        

    }
    const handleChange =(e)=>{
        setServices({...service, [e.target.name]: e.target.value})


    }
  return (
    <div>
        <form className={styles.form} onSubmit={Submit}>
            <Input
            type="text"
            text="Nome do serviço"
            name="name"
            placeholder="insira o nome do servirço"
            handleOnchange={handleChange}
            />
            <Input
            type="number"
            text="Custo do serviço"
            name="cost"
            placeholder="insira o Valor total"
            handleOnchange={handleChange}
            />
            <Input
            type="text"
            text="Descrição do serviço"
            name="description"
            placeholder="descreva o servirço"
            handleOnchange={handleChange}
            />
        </form>
        
        <ButtonSubmit text="Adiçionar" onClick={Submit}/>
    
       
      
    </div>
  )
}

export default ServiceForm
