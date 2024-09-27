// frontend/src/Login.js
import React, { useState } from 'react';
import './login.css';
import NavMenu from '../NavMenu/NavMenu';
import {Link} from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3006/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.text();
    if (result === 'Login bem-sucedido!') {
      alert(result);
      window.location.href = "/home";
    } else {
      alert(result);
    }
  };

  return (
    <><NavMenu /><container id="Corpo">

      <div id="login-container">
        <div id="login-form-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div id="textbox-email" className="textbox">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required />
            </div>
            <div id="textbox-senha" className="textbox">
              <input
                type="password"
                placeholder="Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required />
            </div>
             <button id="login-button" className="btn" type="submit"> 
              
              <Link to="/">Entrar </Link>
              </button>
          </form>
        </div>
      </div>
    </container></>
    
  );
}

export default Login;
