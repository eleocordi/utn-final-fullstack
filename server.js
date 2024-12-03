const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Servir los archivos estáticos del build de Vite
app.use(express.static(path.join(__dirname, 'front/dist')));

// Enviar index.html para cualquier otra ruta (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
