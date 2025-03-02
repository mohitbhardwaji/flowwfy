import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Settings, User, Menu, Power } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice"; // Ensure this action is in your Redux slice
import { flowwlogo } from "../../assets/image";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Clear token from Redux
    sessionStorage.clear(); // Clear session storage
    localStorage.removeItem("token"); // Remove token from local storage (if stored)
    navigate("/"); // Redirect to home
  };

  return (
    <div className={`h-screen bg-[#7363D6] shadow-md z-50 fixed left-0 top-0 ${collapsed ? "w-20" : "w-64"} transition-all duration-300 flex flex-col`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <span className={`text-lg font-semibold text-white ${collapsed ? "hidden" : "block"}`}>
          FlowwFy
        </span>
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition"
        >
          <Menu className="w-6 h-6 text-gray-600" /> 
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-4 flex-grow space-y-2">
        {[
          { name: "Dashboard", icon: <Home className="w-5 h-5 text-gray-700" />, path: "/dashboard" },
          { name: "Settings", icon: <Settings className="w-5 h-5 text-gray-700" />, path: "/settings" },
          { name: "Profile", icon: <User className="w-5 h-5 text-gray-700" />, path: "/profile" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 p-3 mx-3 rounded-lg transition-all duration-300 ${
              hovered === index ? "bg-[#5b4acb]" : "bg-transparent"
            }`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="p-2 bg-white rounded-full shadow-md">{item.icon}</div>
            <span className={`text-white ${collapsed ? "hidden" : "block"}`}>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className={`flex items-center gap-3 p-3 mx-3 mb-4 rounded-lg transition-all duration-300 ${
          hovered === "logout" ? "bg-[#5b4acb]" : "bg-transparent"
        }`}
        onMouseEnter={() => setHovered("logout")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="p-2 bg-white rounded-full shadow-md">
          <Power className="w-5 h-5 text-red-500" />
        </div>
        <span className={`text-red-300 ${collapsed ? "hidden" : "block"}`}>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
