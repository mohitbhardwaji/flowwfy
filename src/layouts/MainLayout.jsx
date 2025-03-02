import Navbar from "../components/layoutComponents/Navbar";
import Footer from "../components/layoutComponents/Footer";
import Sidebar from "../components/layoutComponents/Sidebar"; // Import Sidebar component


const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-200 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow  ml-20 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
