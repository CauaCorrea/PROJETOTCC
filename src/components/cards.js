import refri from "../Imagens/refri.png"
import "../components/cards.css"
import hotdog from "../Imagens/hotdog.png"
import picles from "../Imagens/picles.png"
import {Link} from "react-router-dom";



function Cards(){
    return(
    <div className="Wrap"> 
      <div className="envelopador"> 
      <Link to="/Bebidas">
                    <div className="cards">
                    <img src={refri} alt="legenda"/>
                    <div className="info">
                        <h1>Refrigerantes</h1> 
                        <p> Perfeito para o calor</p>
                        
                         </div>
                         </div>
                         </Link>
                        <Link to="/">
                             <div className="cards">
                         
                    
                        <img src={hotdog} alt="legenda"/>
                        <div className="info">
                            <h1 className="Nomes" >Hot-Dog</h1>
                            <p> venha experimentas nossos Hot-dogs!</p>
                        
                             </div>
                    
                         </div>
                         </Link>
                         <Link to="/Compotas">
                         <div className="cards">
                    <img src={picles} alt="legenda"/>
                    <div className="info">
                        <h1 className="Nomes">compotas</h1> 
                        <p> as melhores compotas do mercado!</p>
                        
                         </div>
                         </div>
                         </Link>
                    
                     </div> 
                    </div>
    )
}
export default Cards;