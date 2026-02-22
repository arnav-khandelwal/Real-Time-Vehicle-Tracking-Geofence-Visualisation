const express = require('express');
const http    = require('http');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.send('ok');
});

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on('connection', (ws, req) => {
  console.log(`[WS] client connected — ${req.socket.remoteAddress}`);

  ws.on('message', (data) => {
    console.log(`[WS] message received: ${data}`);
  });

  ws.on('close', () => {
    console.log('[WS] client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});