import NavMenu from "../NavMenu/NavMenu";
import "./Bebidas.css"
import bebidas from "../Imagens/bebidas.png"
import Refris from "../Bebidas/refris"
function Bebidas(){
    return(

    
        
        <><NavMenu />
        
        <div id="wrap10">
        <div id="Bebidas-1">

            <div className="Bebidas-2">
            <h1 > Bebidas</h1>
            <p >Refrescando ou aquecendo o seu dia</p>  
            
            </div>

            <img id="Latas" src={bebidas} alt="legenda"/>
            
            
            
        </div>

        

        
        



       
        </div>
        <Refris/>
        
        </>
        
        
        
        


    );  
}export default Bebidas;