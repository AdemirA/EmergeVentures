const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Mapa de tipos MIME
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

  // Remove query strings
  let filePath = req.url.split('?')[0];

  // Rota raiz
  if (filePath === '/') {
    filePath = '/index.html';
  }

  // Constrói o caminho completo do arquivo
  const fullPath = path.join(__dirname, filePath);
  const extname = path.extname(fullPath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Lê e serve o arquivo
  fs.readFile(fullPath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Arquivo não encontrado - 404
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Página não encontrada</h1>', 'utf-8');
      } else {
        // Erro do servidor - 500
        res.writeHead(500);
        res.end(`Erro do servidor: ${err.code}`, 'utf-8');
      }
    } else {
      // Sucesso
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('═══════════════════════════════════════════════════');
  console.log('   🚀 Servidor EmergeVentures rodando!');
  console.log('═══════════════════════════════════════════════════');
  console.log(`   📍 Local:   http://localhost:${PORT}`);
  console.log(`   📍 Network: http://127.0.0.1:${PORT}`);
  console.log('═══════════════════════════════════════════════════');
  console.log('   Pressione Ctrl+C para parar o servidor');
  console.log('═══════════════════════════════════════════════════\n');
});
