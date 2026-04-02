/** @format */
import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Shield, Zap, Globe, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-green-500/30 overflow-x-hidden">
      {/* 1. Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20">
            <MessageSquare className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter">CoreChat</span>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="px-6 py-2 text-sm font-medium hover:text-green-400 transition-all">Login</Link>
          <Link to="/register" className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-green-500 hover:text-white transition-all">Get Started</Link>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-tight">
            The Next Generation of <br /> Real-Time Messaging.
          </h1>
          <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the "Core-Chat-Engine"—a lightweight, ultra-fast communication platform built for modern teams and developers.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/register" className="group px-8 py-4 bg-green-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-500 transition-all shadow-xl shadow-green-900/40">
              Build Your Profile <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#features" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold backdrop-blur-md hover:bg-white/10 transition-all">
              Explore Engine
            </a>
          </div>
        </div>
      </section>

      {/* 3. Bento Grid Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Bento Card */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group">
            <Zap className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ultra-Low Latency</h3>
            <p className="text-white/50 max-w-md">Driven by Socket.io, messages travel across the engine in milliseconds. Experience true real-time synchronization.</p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 blur-3xl group-hover:bg-green-500/40 transition-all"></div>
          </div>

          {/* Small Bento Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:border-green-500/50 transition-all">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">JWT Security</h3>
            <p className="text-white/50">End-to-end authentication protection for your private and group conversations.</p>
          </div>

          {/* Small Bento Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:border-green-500/50 transition-all">
            <Globe className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Global Scale</h3>
            <p className="text-white/50">Optimized for high-concurrency connections across distributed networks.</p>
          </div>

          {/* Large Bento Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-green-600/20 to-transparent backdrop-blur-xl border border-green-500/20 p-8 rounded-[2.5rem]">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div>
                    <h3 className="text-3xl font-bold mb-4">Ready to deploy?</h3>
                    <p className="text-white/60 mb-6 text-sm">Join other developers using the Core-Chat-Engine to power their community interactions.</p>
                    <Link to="/register" className="inline-block px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">Get a Free Account</Link>
                </div>
                <div className="w-full h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center italic text-white/20">
                    [Live Engine Preview]
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Footer */}
      <footer className="p-10 border-t border-white/10 text-center text-white/30 text-xs">
        <p>© 2026 Core-Chat-Engine-Client. Built by Jackson in Kigali.</p>
      </footer>
    </div>
  );
};

export default Home;