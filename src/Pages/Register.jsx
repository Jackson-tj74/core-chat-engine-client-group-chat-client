/** @format */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { registerUser } from "../services/authService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await registerUser(formData);
      // Success! Redirect to login
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0f172a] selection:bg-green-500/30">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500/10 blur-[80px] rounded-full"></div>
        
        <div className="relative z-10">
          <header className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Join Us</h2>
            <p className="text-white/40 mt-2">Create your account to start chatting</p>
          </header>

          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/60 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 group-focus-within:text-green-500 transition-colors" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Tuyikunde Jackson"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/60 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 group-focus-within:text-green-500 transition-colors" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/60 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 group-focus-within:text-green-500 transition-colors" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-500 disabled:bg-green-800 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-green-900/40 mt-4 group"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Create Account 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <footer className="mt-8 text-center">
            <p className="text-white/40 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                Sign in here
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Register;