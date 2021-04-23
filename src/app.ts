import express, { Response } from "express";
import path from "path"
import home from "./routes";
import { auth, requiresAuth } from "express-openid-connect";
import { AuthConfig, AuthRequest } from "./types";

process.env["NODE_CONFIG_DIR"] = path.join(__dirname, "/config/");
import config from "config";

const app = express();
app.use(express.json());

const authConfig: AuthConfig = config.get("authConfig");

app.use(auth(authConfig))


app.get('/', (req: AuthRequest, res: Response) => {
  res.send(req.oidc?.isAuthenticated() ? 'Logged in' : 'Logged out')
})

app.get('/profile', requiresAuth(), (req: AuthRequest, res: Response) => {
  res.send(JSON.stringify(req.oidc?.user));
})

// app.use("/", home);

export default app;
