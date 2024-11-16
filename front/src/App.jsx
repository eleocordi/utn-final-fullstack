import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Shop from "./components/shop/Shop";
import ListaProductos from "./components/gestionProductos/ListaProductos";
import CrearProducto from "./components/gestionProductos/CrearProducto";
import EditarProducto from "./components/gestionProductos/EditarProducto";
import DetalleProducto from "./components/gestionProductos/DetalleProducto";
import { AuthProvider } from './components/account/AuthContext';
import Protegida from "./components/protegida/protegida";
import Register from "./components/account/Register";
import Login from "./components/account/Login";
import ProtectedRoute from "./components/account/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gestion" element={<ListaProductos />} />
            <Route path="/gestion" element={<CrearProducto />} />
            <Route path="/gestion/:id" element={<DetalleProducto />} />
            <Route path="/editar-producto/:id" element={<EditarProducto />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/protegida" element={<ProtectedRoute element={<Protegida />} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
