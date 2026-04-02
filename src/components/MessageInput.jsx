import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSendMessage(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-3">
      <button type="button" className="text-white/50 hover:text-white">
        <Paperclip className="w-5 h-5" />
      </button>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500/50 transition-all"
      />

      <button type="button" className="text-white/50 hover:text-white">
        <Smile className="w-5 h-5" />
      </button>
      
      <button 
        type="submit" 
        className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-xl shadow-lg shadow-green-900/20 transition-all"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default MessageInput;