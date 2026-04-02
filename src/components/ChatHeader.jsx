import React from 'react';
import { User } from 'lucide-react';

const ChatHeader = ({ receiverName, isOnline }) => {
  return (
    <div className="p-4 border-b border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center">
            <User className="text-white w-6 h-6" />
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1a1a2e] rounded-full"></span>
          )}
        </div>
        <div>
          <h3 className="text-white font-medium text-sm">{receiverName || "User"}</h3>
          <p className="text-[11px] text-green-400">{isOnline ? "Active now" : "Offline"}</p>
        </div>
      </div>
     
    </div>
  );
};

export default ChatHeader;