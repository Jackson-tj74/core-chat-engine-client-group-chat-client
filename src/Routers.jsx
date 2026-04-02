
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import { useAuth } from './context/AuthContext';
import Home from './Pages/HomePage';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="h-screen bg-[#0f172a] flex items-center justify-center text-white">Loading...</div>;
  
  return user ? children : <Navigate to="/login" />;
};

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />

        <Route path="/" element={<Navigate to="/dashboard" />} />
        
     
        <Route path="*" element={<div className="text-white p-10">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}