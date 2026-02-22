const express = require('express');
const http    = require('http');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;

// hardcoded verhicles, will make it dynamic if time left
const vehicles = [
  { id: 1, lat: 28.6139, lng: 77.2090, speed: 32 },
  { id: 2, lat: 28.6200, lng: 77.2150, speed: 45 },
  { id: 3, lat: 28.6080, lng: 77.1980, speed: 28 },
  { id: 4, lat: 28.6250, lng: 77.2200, speed: 60 },
  { id: 5, lat: 28.6050, lng: 77.2300, speed: 15 },
];

// change position slightly (hardcoded for simulation)
function updateVehiclePositions() {
  vehicles.forEach((vehicle) => {
    vehicle.lat += (Math.random() - 0.5) * 0.0006;
    vehicle.lng += (Math.random() - 0.5) * 0.0006;
  });
}



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

// Every 2 seconds, update positions and broadcast to all connected clients
setInterval(() => {
  updateVehiclePositions();

  const payload = JSON.stringify(vehicles);

  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(payload);
    }
  });
}, 2000);