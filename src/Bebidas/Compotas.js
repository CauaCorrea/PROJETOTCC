import NavMenu from "../NavMenu/NavMenu";
import Comps from "../Imagens/compotas.png"
import Compotas2 from "../Bebidas/Compotas2"
import "../Bebidas/Compotas.css"
function Compotas(){
    return(

    
        
        <><NavMenu />
        
        <div id="wrap10">
        <div id="Bebidas-1">

            <div className="Bebidas-2">
            <h1 > Compotas</h1>
            <p >As compotas mais gostosas!</p>  
            
            </div>

            <img id="Comp" src={Comps} alt="legenda"/>
            
            
            
        </div>

        

        
        



       
        </div>
        <Compotas2/>
        
        </>
        
        
        
        


    );  
}export default Compotas;