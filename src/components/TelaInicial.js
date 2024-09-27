import "../components/TelaInicial.css"
import NavMenu from "../NavMenu/NavMenu"
import React from "react"
import foto from "../Imagens/paodequijo.png"
import Cards from "../components/cards"





function TelaInicial (){
    return(
  
        <container>  
            <NavMenu/>
            <head>
                <meta name="viewport" content="width=device-"/>
            </head>
            <div className="ComprarEReservar">

            <img className="paodequeijo" src={foto} alt="legenda"/>
            <h1>Padaria Camargo</h1>
            <h2>Gostinho caseiro</h2>  
            <div className="botoes"> 
            <a href="#"><button className="btn-1">Comprar agora</button></a>
            <a href="#"><button className="btn-2">Reservar pedido</button></a>
            </div>
           
            
            </div>   

            <div id="itensMenu">
               <div id="NossosProdutos">  <center><h1 id="N_P">Nossos produtos</h1> </center> </div>
    
                <Cards/>

                 </div>

            <div className="SobreNos">
            <h1>Nossos canais</h1> <h1>11 9999-9999</h1>
            

            </div>
            <p id="paragrafo">Cuidado para não cair em golpes</p>
            
            

             </container>
                
        
        
    )

} export default TelaInicial;