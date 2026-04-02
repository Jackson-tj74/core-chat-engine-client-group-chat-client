/** @format */
import { createContext, useState, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const { user } = useAuth();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    if (user) {
      // Connect to your Node.js Backend
      const newSocket = io("http://localhost:9000");
      setSocket(newSocket);

      // Join personal room for notifications
      newSocket.emit("setup", user._id);

      // Listen for incoming messages
      newSocket.on("message_received", (newMessage) => {
        setMessages((prev) => [...prev, newMessage]);
      });

      return () => newSocket.close();
    }
  }, [user]);

  const sendMessage = (content, chatId, receiverId) => {
    if (socket) {
      const messageData = { content, chatId, senderId: user._id, receiverId };
      socket.emit("new_message", messageData);
      // We usually update local state immediately for a fast UI
      setMessages((prev) => [...prev, { ...messageData, createdAt: new Date() }]);
    }
  };

  return (
    <ChatContext.Provider value={{ socket, messages, setMessages, sendMessage, activeChat, setActiveChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);