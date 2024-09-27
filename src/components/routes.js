import {Routes, Route} from "react-router-dom";
import TelaInicial from "./TelaInicial";
import Bebidas from "../Bebidas/bebidas";
import Login from "../Login/login";
import Cadastro from "../Cadastro/App"
import Compotas from "../Bebidas/Compotas"

   


function MainRoutes(){
    return(
        <Routes> 
            <Route path="/" element={<TelaInicial/>} />
            <Route path="/Bebidas" element={<Bebidas/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Cadastro" element={<Cadastro/>} />
            <Route path="/Compotas" element={<Compotas/>} />
           
            

        </Routes>
    )
} export default MainRoutes;