import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';


const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error al obtener el Producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        navigate('/gestion');
      } else {
        console.error('Error al eliminar el producto');
      }
    } catch (error) {
      console.error('Error al eliminar el producto', error);
    }
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="detalle-producto">
      <h2>{producto.nombre}</h2>
      <div className="producto-info">
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <p><strong>Precio:</strong> {producto.precio}</p>
      </div>
      <div className="acciones">
        <Link to={`/editar-producto/${producto._id}`} className="editar">Editar</Link>
        <button onClick={handleDelete} className="eliminar">Eliminar</button>
      </div>
    </div>
  );
};

export default DetalleProducto;