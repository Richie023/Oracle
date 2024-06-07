const http = require('http://localhost:3000/products');

// Definir el manejador de solicitudes (request handler)
const requestHandler = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('¡Hola mundo!');
};

// Crear el servidor
const server = http.createServer(requestHandler);

// Escuchar en un puerto específico (por ejemplo, el puerto 3001)
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

