import { Schema, model, Model, Document } from "mongoose";

export interface IChat extends Document {
  senderEmail: string;
  recepientEmail: string;
  message: string;
  date: string;
}

const chatSchema: Schema = new Schema({
  senderEmail: String,
  recepientEmail: String,
  message: String,
  date: { type: String, default: Date.now },
});

const Chat: Model<IChat> = model("chat", chatSchema);
export default Chat;
