import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext'; 
import fondo from '../../assets/images/fondo2.jpg';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/login', { username, password });
      login(); // Llama a login después de un inicio de sesión exitoso
      navigate('/protegida'); // Redirige a la ruta protegida
    } catch (error) {
      alert('Error en el inicio de sesión: ' + error.response.data);
    }
  };

  return (

    <div className='login-contenedor' style={{
      backgroundImage: `url(${fondo})`
    }}>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Iniciar Sesión</h2>
      <div className="form-group">
        <input
          type="text"
          className="login-input"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="login-input"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="login-button" type="submit">Iniciar Sesión</button>
    </form>
    </div>
  );
};

export default Login;
