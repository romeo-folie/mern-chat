import { Request } from 'express'
import { RequestContext } from 'express-openid-connect'

export interface AuthConfig {
  authRequired: boolean;
  auth0Logout: boolean;
  baseURL: string;
  clientID: string;
  issuerBaseURL: string;
  secret: string;
}

export interface AuthRequest extends Request {
  oidc?: RequestContext
}

export interface IUser {
  id: string;
  name: string;
  nickname: string;
  email: string;
  picture: string;
  email_verified: boolean;
  sub: string;
}