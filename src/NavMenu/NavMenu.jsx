import PersonIcon from "../Imagens/do-utilizador.png"
import Carrinho from "../Imagens/carrinho-de-compras.png"
import "./NavMenuSyled.js"
import Logo from "../NavMenu/LogoPadaria.jpg"
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import config from "../../src/Imagens/setting.png"
import perfil from "../Imagens/profile.png"
import help from "../Imagens/help.png"
import logout from "../Imagens/logout.png"

import React, {useState} from 'react';


import { Navigation } from "./NavMenuSyled"

function NavMenu (){
    
    const [open, setOpen] = useState(false);

    return(
        <Navigation>
        <header> 
            
            
            <ul>
            <img className="Logo" src={Logo} alt="Logo de navegação" />
           
    
     
                       
                        
            
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Lanches</Link></li>
                <li><Link to="/">Confeitaria</Link></li>
                <li><Link to="/Bebidas">Bebidas</Link></li>
            </ul>



            <div className="ItensLogin">  <img className="Carrinho" src={Carrinho}/><img className="PersonIcon" onClick={()=>{setOpen(!open)}} src={PersonIcon}/> </div>
           <div className={`Envelopador-menu ${open? 'active' : 'inactive'}`} id="subMenu">
                <div className="menu"> 
                    <div className="user"> 
                    <img id="Imagem-perfil" src={PersonIcon}/>
                    <h2> Nickolas</h2>
                        </div>
                        <hr /> 
                        <Link className="menu-link" to="/">
                        <img id="" src={perfil}/>
                        <p>edit profile</p>
                        <span> > </span>
                            </Link>

                            <Link className="menu-link" to="/">
                        <img id="" src={config}/>
                        <p>Configurações</p>
                        <span> > </span>
                            </Link>

                            <Link className="menu-link" to="/">
                        <img id="" src={help}/>
                        <p>Ajuda</p>
                        <span> > </span>
                            </Link>

                            <Link className="menu-link" to="/">
                        <img id="" src={logout}/>
                        <p>Logout</p>
                        <span> > </span>
                            </Link>
                </div>
            </div>
        
     
        </header>
        </Navigation>
       
       
    )
    
}
export default NavMenu;

