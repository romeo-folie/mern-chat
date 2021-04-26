import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import path from "path"

process.env['NODE_CONFIG_DIR'] = path.join(__dirname, "/config/")
import config from "config";

const app = express();

app.use(cors())
app.use(express.json());

const uri: string = config.get("mongoUri")

const connectToDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log("db connection error ", error);
    process.exit(1);
  }
};

connectToDB()

export default app;
