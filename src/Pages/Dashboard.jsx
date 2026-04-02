/** @format */
import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // You'll need a Sidebar component
import ChatHeader from "../components/ChatHeader";
import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";
import { useChat } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";
import useChatScroll from "../hooks/useChatScroll";

const Dashboard = () => {
  const { messages, sendMessage, activeChat } = useChat();
  const { user } = useAuth();
  const scrollRef = useChatScroll(messages);

  return (
    <div className="h-screen bg-[#0f172a] p-4 lg:p-8 flex gap-6">
      {/* Sidebar - Bento Style */}
      <div className="hidden md:block w-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl">
        <Sidebar />
      </div>

      {/* Main Chat Area - Bento Style */}
      <div className="flex-1 flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl">
        {activeChat ? (
          <>
            <ChatHeader receiverName={activeChat.name} isOnline={true} />
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-2 custom-scrollbar">
              {messages.map((msg, i) => (
                <MessageBubble 
                  key={i} 
                  message={msg} 
                  isOwnMessage={msg.senderId === user._id} 
                />
              ))}
            </div>
            <MessageInput onSendMessage={(text) => sendMessage(text, activeChat.id, activeChat.receiverId)} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-white/20">
            <p className="text-xl font-medium italic">Select a contact to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;