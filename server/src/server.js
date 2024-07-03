import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import 'dotenv/config'

const port = process.env.PORT || 3000;

const app = express();
app.use(cors);
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
});


// When someone contact server, Websocket is created and user is connected.
io.on('connection', (socket) => {
    console.log("A user connected~");

    
    
    // When user leaves
    socket.on('disconnect', () => {
        console.log('User disconnected~');
    })
})



server.listen(port, () => {
    console.log(`server running on port ${port}...`);
});