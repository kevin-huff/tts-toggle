const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Store TTS status for each key
const ttsStatus = new Map();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/display', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'display.html'));
});

app.get('/toggle', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'toggle.html'));
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', (key) => {
    socket.join(key);
    socket.emit('ttsStatus', { status: ttsStatus.get(key) || false });
  });

  socket.on('toggleTTS', ({ key, status }) => {
    ttsStatus.set(key, status);
    io.to(key).emit('ttsStatus', { status, changed: true }); // Add 'changed' flag
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));