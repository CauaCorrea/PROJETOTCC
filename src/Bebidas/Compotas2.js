import "./Refris.css"
import ImagemCompota from "../Imagens/Comp1.png"
import Carrinho from "../Imagens/shopping-cart-svgrepo-com.svg"
import FP from "../Imagens/Final-pag-bebidas.jpeg"

function Compotas2(){
    return(

        <div id="wrap2">

            <div id="Refrigerantes"> 
            
            <h3>Compotas:</h3> 


            
        </div>
       
            <div id="Itens"> 
            <div className="Lata"> 
                
                        <img className="Latas" src={ImagemCompota}/>
                            
                             <h1>C1</h1><div className="letras"> 
                                <h2> 310ml</h2>
                                     <h2> R$10,00</h2>
                                        </div>  <div id="over">   <div className="Adds">  <img src={Carrinho}/>
                                            <p>Adicione ao carrinho</p> </div>
                                         </div>
                                             </div>
                                             <div className="Lata"> 
                
                <img className="Latas" src={ImagemCompota}/>
                    
                     <h1>c2</h1><div className="letras"> 
                        <h2> 310ml</h2>
                             <h2> R$10,00</h2>
                                </div>  <div id="over">   <div className="Adds">  <img src={Carrinho}/>
                                    <p>Adicione ao carrinho</p> </div>
                                 </div>
                                     </div>
                                     <div className="Lata"> 
                
                        <img className="Latas" src={ImagemCompota}/>
                            
                             <h1>c3</h1><div className="letras"> 
                                <h2> 310ml</h2>
                                     <h2> R$10,00</h2>
                                        </div>  <div id="over">   <div className="Adds">  <img src={Carrinho}/>
                                            <p>Adicione ao carrinho</p> </div>
                                         </div>
                                             </div>
                                             <div className="Lata"> 
                
                        <img className="Latas" src={ImagemCompota}/>
                            
                             <h1>c4</h1><div className="letras"> 
                                <h2> 310ml</h2>
                                     <h2> R$10,00</h2>
                                        </div>  <div id="over">   <div className="Adds">  <img src={Carrinho}/>
                                            <p>Adicione ao carrinho</p> </div>
                                         </div>
                                             </div>
                                             <div className="Lata"> 
                
                        <img className="Latas" src={ImagemCompota}/>
                            
                             <h1>c5</h1><div className="letras"> 
                                <h2> 310ml</h2>
                                     <h2> R$10,00</h2>
                                        </div>  <div id="over">   <div className="Adds">  <img src={Carrinho}/>
                                            <p>Adicione ao carrinho</p> </div>
                                         </div>
                                             </div>
                                             <div className="Lata"> 
                
                        <img className="Latas" src={ImagemCompota}/>
                            
                             <h1>c6</h1><div className="letras"> 
                                <h2> 310ml</h2>
                                     <h2> R$10,00</h2>
                                        </div>  <div id="over">   <div className="Adds">  <img src={Carrinho}/>
                                            <p>Adicione ao carrinho</p> </div>
                                         </div>
                                             </div>




            
         
            </div>
    
            <img className="Final-pag" src={FP}/>
            <div className="SobreNos">
            <h1>Nossos canais</h1> <h1>11 9999-9999</h1>
            

            </div>
            <p id="paragrafo">Cuidado para não cair em golpes</p>
            </div> 

    );  
}export default Compotas2;