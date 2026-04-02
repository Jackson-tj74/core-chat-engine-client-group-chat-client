/** @format */
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const useSocket = (userId) => {
  const socket = useRef();

  useEffect(() => {
    // 1. Connect to Backend
    socket.current = io("http://localhost:9000", {
      reconnectionAttempts: 5,
    });

    // 2. Setup User Room
    if (userId) {
      socket.current.emit("setup", userId);
    }

    // 3. Cleanup on Unmount
    return () => {
      if (socket.current) socket.current.disconnect();
    };
  }, [userId]);

  const emitEvent = (event, data) => {
    socket.current?.emit(event, data);
  };

  return { socket: socket.current, emitEvent };
};

export default useSocket;