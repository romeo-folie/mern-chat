import app from "./app";
import { Server } from "socket.io";
import http from "http";

const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

server.listen(port, () => console.log(`socket server is up on port ${port}`));
