/** @format */
import { createContext, useState, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";

const ChatContext = createContext();

// 🛠️ GET THE RAW STRING URL FROM ENV
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL ;

export const ChatProvider = ({ children }) => {
  const { user } = useAuth();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
   
    if (user && user._id) {
      
      const newSocket = io(SOCKET_URL, {
        reconnectionAttempts: 5,
        transports: ["websocket"], 
      });

      setSocket(newSocket);

      newSocket.emit("setup", user._id);

      newSocket.on("connected", () => {
        console.log("✅ Socket Engine Connected for:", user.name);
      });

      // 3. Listen for incoming messages
      newSocket.on("message_received", (newMessage) => {
        // Only update state if message exists
        if (newMessage) {
          setMessages((prev) => [...prev, newMessage]);
        }
      });

      // 🧹 CLEANUP: Stop listeners and disconnect when user logs out or closes app
      return () => {
        newSocket.off("message_received");
        newSocket.off("connected");
        newSocket.disconnect();
        console.log(" Socket Engine Disconnected");
      };
    }
  }, [user]);

  const sendMessage = (content, chatId, receiverId) => {
    if (socket && user) {
      const messageData = { 
        content, 
        chatId, 
        senderId: user._id, 
        receiverId,
        createdAt: new Date() 
      };

      // 1. Emit to backend
      socket.emit("new_message", messageData);

      // 2. Update UI immediately (Optimistic UI)
      setMessages((prev) => [...prev, messageData]);
    }
  };

  return (
    <ChatContext.Provider 
      value={{ 
        socket, 
        messages, 
        setMessages, 
        sendMessage, 
        activeChat, 
        setActiveChat 
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};