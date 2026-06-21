import React from "react";
import {io} from "socket.io-client";

const socket = io("https://test-project-backend-production-1686.up.railway.app/", {
  autoConnect: true,
  transports: ["websocket"],
  withCredentials: true
});

export default socket;