/** @format */
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMessages = (chatId, token) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const { data } = await axios.get(`/api/messages/${chatId}`, config);
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      } finally {
        setLoading(false);
      }
    };

    if (chatId) getMessages();
  }, [chatId, token]);

  return { messages, setMessages, loading };
};

export default useFetchMessages;