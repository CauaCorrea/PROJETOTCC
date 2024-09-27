import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/components/index.css"
import TelaInicial from '../src/components/TelaInicial';
import { BrowserRouter} from 'react-router-dom' 
import Routes from '../src/components/routes'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes/>
      </BrowserRouter>
);


