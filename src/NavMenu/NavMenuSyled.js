import styled from 'styled-components'

export const Navigation = styled.header`
  .Logo{
    height: 50px;
    width: 80px;
    margin: 15px;
    @media(max-width: 390px ){ 
        height: 40px;
    width: 60px;
    margin: 15px;
        
    }
}
header{
    background-color: #FFF2D9;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 390px ){ 
        height: 60px;
        
    }
    
    
}
ul{
    display: flex;
    
    
}
li{
    display: flex;
    padding: 30px;
    @media(max-width: 945px ){
        padding: 30px 15px 0px;
        
    }
    @media(max-width: 390px ){ 
        opacity: 0;
        
    }

    
    
}
li a{
    text-decoration: none;
    color: rgb(3, 3, 3);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    font-size: 20px;
    @media(max-width: 945px ){
       
        font-size: 18px;
    }
}
.ItensLogin img{
    display: inline;
    height: 50px;
    width: 50px;
    margin: 10px;
    margin-right: 30px;
    
    
    
}
.Envelopador-menu{
    position: absolute;
    top: 7%;
    right: 0%;
    width: 320px;
    
}



#Imagem-perfil{
    width: 100px;
    height: 10vh;
}
.menu{
    background: #FFF2D9;
    padding: 20px;
    margin: 10px;
}
.user{
    display: flex;
    align-items: center;

}
.user h3{
    font-weight: 500;
}
.user img{
    width: 60px;
    border-radius: 50%;
    margin-right: 15px;
}
.menu hr{ 
    border: 0;
    height: 1px;
    width: 100%;
    background: #ccc;
    margin: 15px 0 10px;
}
.menu-link{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #525252;
    margin: 12px 0;
}
.menu-link p{
    width: 100%;
}
.menu-link img{
    width: 40px;
    background: #FFF2D9;
    border-radius: 50%;
    padding: 8px;
    margin-right: 15px;
}
.menu-link span{
    font-size: 22px;
    transition: transform 0.5s;
}
.menu-link:hover span{
    transform: translateX(5px);
}
.menu-link:hover p{
font-weight: 600;
}
.Envelopador-menu.active{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: var(--speed) ease;
}
.Envelopador-menu.inactive{
    opacity: 0;
    visibility: hidden;
    transform: translateY(0);
    transition: var(--speed) ease;
}
`

