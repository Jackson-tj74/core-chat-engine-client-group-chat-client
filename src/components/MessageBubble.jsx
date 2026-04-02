import React from 'react';

const MessageBubble = ({ message, isOwnMessage }) => {
  return (
    <div className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-sm ${
        isOwnMessage 
          ? "bg-green-600 text-white rounded-tr-none" 
          : "bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-tl-none"
      }`}>
        <p className="text-sm leading-relaxed">{message.content}</p>
        <span className="text-[10px] block mt-1 opacity-50 text-right">
          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;