import { createContext } from 'react'
import { io } from "socket.io-client";
const endpoint = "http://localhost:5000";

export const socket = io(endpoint);
export const SocketContext = createContext();
