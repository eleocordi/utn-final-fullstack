import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/productos');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los Productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <Link to="/crear" className="crear-producto">Crear nuevo Producto</Link>
      <ul>
        {productos.map((producto) => (
          <li key={producto._id}>
            {producto.nombre} - <Link to={`/gestion/${producto._id}`} >Ver Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;