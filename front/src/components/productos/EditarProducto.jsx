import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const EditarProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProducto(data);
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
        setPrecio(data.precio);
      } catch (error) {
        console.error('Error al obtener hechizo:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, descripcion, precio })
      });
      if (response.ok) {
        navigate('/gestion');
      } else {
        console.error('Error al actualizar el producto');
      }
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="formulario-producto">
      <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setNivel(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Actualizar Producto" />
      </form>
    </div>
  );
};

export default EditarProducto;