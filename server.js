import express from 'express';
import http from "http";
import { Server } from "socket.io";
import cors from 'cors'



const app = express();
app.use(cors());


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*", // Allow all origins
      methods: ["GET", "POST"]
    }
  });


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('player move', (data) => {
        // broadcast the player move event to all other clients
        socket.broadcast.emit('player move', data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
