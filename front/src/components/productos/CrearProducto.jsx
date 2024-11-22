import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoProducto = { nombre, descripcion, precio: parseFloat(precio) };
      await axios.post('http://localhost:5000/api/productos', nuevoProducto);
      navigate('/crear');
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <div >
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div >
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div >
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CrearProducto;