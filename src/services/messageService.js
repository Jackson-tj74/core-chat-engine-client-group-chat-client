import API from "./api";

export const fetchChatHistory = async (chatId) => {
  const { data } = await API.get(`/messages/${chatId}`);
  return data;
};

export const postNewMessage = async (messageData) => {
  const { data } = await API.post("/messages", messageData);
  return data;
};