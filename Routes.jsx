import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./src/Components/Pages/Home"
import Company from "./src/Components/Pages/Company"
import Contacts from "./src/Components/Pages/Contacts"
import NewProject from "./src/Components/Pages/NewProject"
import Projects from "./src/Components/Pages/Projects"
import PageBase from "./src/Components/Pages/PageBase/PageBase"
import Project from "./src/Components/Pages/Project"



const AppRoutes=()=>{
    return(
        <>

        <BrowserRouter>
        <Routes> 
            <Route path="/"element={<PageBase/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Project/:id" element={<Project/>}></Route>
            <Route path="/Company" element={<Company/>}></Route>
            <Route path="/Contacts" element={<Contacts/>}></Route>
            <Route path="/NewProject" element={<NewProject/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>

        </>
    )
}

 export default AppRoutes