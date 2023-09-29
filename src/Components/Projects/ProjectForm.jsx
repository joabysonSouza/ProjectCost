import React, { useEffect, useState } from 'react'
import Input from '../Form/Input'
import Select from '../Form/Select'
import ButtonSubmit from '../Form/ButtonSubmit'

const ProjectForm = ({handleSubmit, projectData,}) => {
 const [category, setCategory] = useState([])
 const [projct , setProject]= useState(projectData || {})

 useEffect(()=>{
  fetch("http://localhost:5000/Category",{
  method:"GET",
  headers:{
    "Content-type":"application/json",
  },
 })

 .then((resp)=> resp.json())
 .then((data)=>{
  setCategory(data)
 })
 

 .catch((err)=>console.log(err))

  
 },[])

  const submit =(e)=>{
    e.preventDefault()
     handleSubmit(projct)
   
   }
 
 

 const handleChange =(e)=>{
   setProject({...projct, [e.target.name]: e.target.value})




 }

 const handleSelect =(e)=>{
   setProject({...projct, category:
    {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
   }
  })
  
 }
 
  return (
    <div>
        <form onSubmit={submit}>

        <Input type="text" 
        placeholder=" Insira o Nome do projeto" 
        text="Nome do projeto" 
        name="name"
        handleOnchange={handleChange}
        value={projct.name}
        
  
        />
       <Input type="number" 
        placeholder=" Insira o orçamento total do projeto" 
        text="Orçamento do projeto" 
        name="budget"
        handleOnchange={handleChange}
        value={projct.budget}
      

       
        />
        <Select 
        name="category_id"  
        text="Selecione a categoria" 
        option={category} 
        handleOnchange={handleSelect}
        value={projct.category ? projct.category.id : ''}/>


          <ButtonSubmit text="Criar projeto"/>

       </form>
       
           
      
    </div>
  )
}

export default ProjectForm
