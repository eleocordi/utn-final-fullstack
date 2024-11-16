import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/Logo1.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuth } from "../account/AuthContext";
import "./Header.css";


function Header() {

  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    alert('Sesión cerrada'); 
  };


  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto clases">
            <Nav.Link as={Link} to="/" className="inicio">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className="tienda">
              Tienda
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" variant="secondary">
                  Buscar
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
     
        <ul>
        <li><Link to="/gestion">Gestión</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
        <li><Link to="/protegida">Sección protegida</Link></li>
        <li><button onClick={handleLogout}>Cerrar sesión</button></li>
      </ul>
      </Container>
    </Navbar>
  );
}

export default Header;
