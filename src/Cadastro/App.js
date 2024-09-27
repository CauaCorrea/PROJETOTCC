import React, { useState } from 'react';
import './App.css';
import NavMenu from '../NavMenu/NavMenu';
import { useNavigate } from "react-router-dom"; // Importando useNavigate

function App() {
  const navigate = useNavigate(); // Criando a instância de navigate
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    telefone: '',
    curso: '',
    turma: '',
    turno: '',
    email: '',
    senha: '',
    confirmaSenha: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmaSenha) {
      setError('As senhas não coincidem!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3006/auth/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text();
      alert(result);
      setFormData({
        nomeCompleto: '',
        telefone: '',
        curso: '',
        turma: '',
        turno: '',
        email: '',
        senha: '',
        confirmaSenha: ''
      });
      setError('');

      // Redirecionar para a página de login após o cadastro bem-sucedido
      navigate('/login'); // Redireciona para a página de login

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Houve um problema ao enviar o formulário.');
    }
  };

  return (
    <><><NavMenu /><container id="Corpo-Cadastro">

      <div id="container">
        <div id="form-box">
          <h2>Cadastre-se</h2>
          <p>Cadastre-se e esteja ainda mais perto da nossa padaria :)</p>
          <form onSubmit={handleSubmit}>
            {error && <p id="error-message" style={{ color: 'red' }}>{error}</p>}
            <div id="textbox-nomeCompleto" className="textbox">
              <input
                type="text"
                placeholder="Nome completo"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required />
            </div>
            <div id="textbox-telefone" className="textbox">
              <input
                type="text"
                placeholder="Telefone celular"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required />
            </div>
            <div id="textbox-curso" className="textbox">
              <input
                type="text"
                placeholder="Curso"
                name="curso"
                value={formData.curso}
                onChange={handleChange}
                required />
            </div>
            <div id="textbox-turma" className="textbox">
              <input
                type="text"
                placeholder="Turma"
                name="turma"
                value={formData.turma}
                onChange={handleChange}
                required />
            </div>
            <div id="textbox-turno" className="textbox">
              <input
                type="text"
                placeholder="Turno"
                name="turno"
                value={formData.turno}
                onChange={handleChange}
                required />
            </div>
            <div id="textbox-email" className="textbox">
              <input
                type="email"
                placeholder="E-mail Institucional"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required />
            </div>
            <div id="textbox-senha" className="textbox">
              <input
                type="password"
                placeholder="Senha (mínimo 6 caracteres)"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required />
            </div>
            <div id="textbox-confirmaSenha" className="textbox">
              <input
                type="password"
                placeholder="Confirme sua senha"
                name="confirmaSenha"
                value={formData.confirmaSenha}
                onChange={handleChange}
                required />
            </div>
            <button id="submit-button" className="btn" type="submit">Continuar
              </button>
          </form>
        </div>
      </div>

    </container></><div className="SobreNos">
        <h1>Nossos canais</h1> <h1>11 9999-9999</h1>


      </div><p id="paragrafo">Cuidado para não cair em golpes</p></>


  );
}

export default App;
