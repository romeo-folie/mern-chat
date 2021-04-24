import app from "./app";
import { Server } from "socket.io";
import http from "http";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  }
});

const port = 5000;

io.on("connection", (socket) => {
  console.log("a user connected");
  
  // when a user joins
  // check that the user isn't already connected
  // this is so the code here doesn't run twice for the same user
  // we can check this with socket.connected
  // some of their old messages should be fetched
  // they should be added to the list of all users
  // an online status should be displayed for them


  socket.on("testing", (data) => {
    console.log(data);
  })

  // add a handler for when a message is sent
  // it should save the message in mongodb


  // another handler that gets all the old messages
  // these should be passed to the frontend through the callback that can be passed
  // as second arg to socket.on's callback

  // add an event handler for when a user is blocked
  // when this happens, they should be removed from the list of whoever they blocked


  socket.on("disconnect", () => {
    console.log("a user disconnected");
    //when a user disconnects, they should be removed from the list of users

  });
});

server.listen(port, () => console.log(`socket server is up on port ${port}`));
