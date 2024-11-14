*INICIAR REPO EN GIT
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/eleocordi/utn-final-fullstack.git
git push -u origin main

****************

Estructura del Proyecto
*Backend
**Tecnología : Node.js Express 
***Iniciar proyecto
cd back
npm init -y 
*** Configurar Script para arranque
 "start": "nodemon server.js"
***Instalar dependencias
npm i express mongoose express-session multer dotenv cors bcrypt


*** Crear Archivos y Carpetas - Estructura
server.js
(Contenido del archivo

)
.env
(contenido del archivo

MONGODB_URI= mongodb://localhost:27017/nombre de mi base de datos
PORT= número de puerto en que corre el back
SESSION_SECRET= clave generada con comando node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

)
.gitignore 
(contenido del archivo

# Node modules
node_modules/

# Logs
logs
*.log
npm-debug.log*

# Environment variables
.env

# Dependency directories
jspm_packages/

# Operating system files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Build directories
dist/
build/

# Compiled files
*.tsbuildinfo

# Miscellaneous
*.tgz
*.swp
*.swo
)

Carpeta Models
(Crear los Schema para utilizar en DB
por ejemplo
Archivo user.js 

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema); 

)
Carpeta Controllers

Carpeta Routes
Configurar Rutas 



*Frontend
**Tecnología : React Vite 
***Iniciar proyecto
npm create vite@latest front

  cd front
  npm install
  npm run dev

  Armar Estructura del proyecto
  Carpeta Components
  Dentro Carpetas con diferentes componentes del proyecto original

  
  **** Manejo de Sesiones 
  Carpeta Api
  Archivos
  AuthContexs.jsx
  Login.jsx
  ProtectedRoute.jsx
  Register.jsx
  Api.jsx

  