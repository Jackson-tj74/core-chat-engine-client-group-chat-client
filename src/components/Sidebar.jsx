/** @format */
import React, { useState, useEffect } from "react";
import { Search, LogOut, User, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useChat } from "../context/ChatContext";
import API from "../services/api"; // Import your axios instance

const Sidebar = () => {
  const { user, logout } = useAuth();
  const { setActiveChat, activeChat } = useChat();
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]); // State for real users
  const [loading, setLoading] = useState(true);

  // 1. Fetch Users from Backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // This endpoint should return all users except the logged-in one
        const { data } = await API.get("/auth/users"); 
        setContacts(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchUsers();
  }, [user]);

  // 2. Filter contacts based on search input
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-xl border-r border-white/10 text-white">
      {/* 1. User Profile Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center shadow-lg shadow-green-900/40">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-sm leading-none">{user?.name}</h2>
            <span className="text-[10px] text-green-400 font-medium">Available</span>
          </div>
        </div>
     
      </div>

      {/* 2. Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-white/30 w-4 h-4" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs outline-none focus:ring-1 focus:ring-green-500/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 3. Real-time Conversations List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
        <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold px-4 mb-3">Contacts</p>
        
        {loading ? (
          <div className="flex justify-center p-10">
            <Loader2 className="animate-spin text-green-500" />
          </div>
        ) : (
          <div className="space-y-1">
            {filteredContacts.map((contact) => (
              <div
                key={contact._id} // Using MongoDB _id
                onClick={() => setActiveChat({
                  id: contact._id,
                  name: contact.name,
                  receiverId: contact._id
                })}
                className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all ${
                  activeChat?.id === contact._id 
                  ? "bg-green-600/20 border border-green-500/30 shadow-lg" 
                  : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 text-sm font-bold">
                    {contact.name[0].toUpperCase()}
                  </div>
                  {/* For now, online status can be static until you link socket.io-client better */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0f172a] rounded-full"></div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-semibold truncate">{contact.name}</h4>
                  <p className="text-[11px] text-white/40 truncate italic">
                    Click to start chatting
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Logout Section */}
      <div className="p-4 border-t border-white/10">
        <button 
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-medium rounded-xl transition-all"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;