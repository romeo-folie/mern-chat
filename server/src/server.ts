import app from "./app";
import { Server } from "socket.io";
import http from "http";
import { connectUser, disconnectUser } from "./utils/users";
import Chat, { IChat } from "./models/chat";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

const port = 5000;

io.on("connection", (socket) => {
  socket.on("new user", (userObj, cb) => {
    const users = connectUser({ id: socket.id, ...userObj });
    io.emit("users", users);
  });

  // add a handler for when a message is sent
  // it should save the message in mongodb
  socket.on("out message", async (data, cb) => {
    const { message, sender, recepient } = data;

    const chat: IChat = new Chat({
      senderEmail: sender.email,
      recepientEmail: recepient.email,
      message,
      date: new Date(),
    });

    const savedMessage = await chat.save();

    socket.to(recepient.id).emit("in message", { sender, message: { text: savedMessage.message, id: savedMessage._id } });
    cb({ sender, message: { text: savedMessage.message, id: savedMessage._id } });
  });

  // another handler that gets all the old messages
  socket.on("load conversation", async ({ sender, recepient }) => {
    // get all conversations between these two
    const messages: Array<IChat> = await Chat.find({
      senderEmail: { $in: [sender.email, recepient.email] },
    })
      .limit(100)
      .sort({ date: 1 });

    const transformedMessages = messages.map((m) => {
      if (m.senderEmail === sender.email) {
        return { message: {text: m.message, id: m._id}, sender, recepient };
      } else {
        return { message: {text: m.message, id: m._id}, sender: recepient, recepient: sender };
      }
    });

    socket.emit("loaded conversation", transformedMessages);
  });

  // add an event handler for when a user is blocked
  // when this happens, they should be removed from the list of whoever they blocked
  socket.on("block user", (user, callback) => {
    const users = disconnectUser(socket.id);
    socket.to(user.id).emit("users", users);
    callback();
  });

  socket.on("disconnect", () => {
    const users = disconnectUser(socket.id);
    io.emit("users", users);
  });
});

server.listen(port, () => console.log(`socket server is up on port ${port}`));
