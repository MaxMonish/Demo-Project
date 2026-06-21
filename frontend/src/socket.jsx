import React from "react";
import {io} from "socket.io-client";

const socket = io("https://demo-project-backend-v7on.onrender.com", {
  autoConnect: true,
  transports: ["websocket"],
  withCredentials: true
});

export default socket;
