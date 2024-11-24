import fondo from '../../assets/images/fondo2.jpg';
import './protegida.css';


const Protegida = () => {
    return(
      <div className="protegida-contenedor" style={{
        backgroundImage: `url(${fondo})`
      }}>


        <h1> Información Exclusiva para Usuarios </h1>
      </div>
    )
  }
  
  export default Protegida; 