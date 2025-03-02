import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarAnimation from "../assets/avatarAnimation.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { signupUser } from "../api/auth/auth"; // Import API function
import Loader from "../components/Loader"; // Import Loader component

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await signupUser(formData.email, formData.password);
      setSuccess("Account created successfully! Redirecting to login...");
      
      // Redirect to login after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.message || "Signup failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black relative transition-colors">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1435224668334-0f82ec57b605?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover opacity-30"></div>

      {/* Signup Form */}
      <div className="relative z-10 p-8 bg-gray-900 bg-opacity-70 rounded-3xl shadow-lg w-96 text-white transition-all">
        <div className="flex justify-center mb-4">
          <div className="w-40 h-40 rounded-full flex items-center justify-center">
            <Lottie animationData={avatarAnimation} loop={true} className="w-full h-full" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center">Create Your Account</h2>

        <form className="mt-2" onSubmit={handleSignup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mt-3 text-white focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-600 rounded-lg hover:bg-blue-500 transition text-white flex justify-center items-center"
            disabled={loading}
          >
            {loading ? <Loader /> : "Sign up"}
          </button>
        </form>

        {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        {success && <p className="text-green-400 text-center mt-2">{success}</p>}

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400 hover:underline">
            Sign in here!
          </Link>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-6 w-full flex flex-col items-center">
        <p className="text-gray-400 text-sm">
          Join Our <span className="font-semibold text-white">Flowwfy</span> Community
        </p>
        <div className="flex mt-3 space-x-[-10px]">
          <img
            src="https://randomuser.me/api/portraits/men/6.jpg"
            alt="User 1"
            className="w-10 h-10 rounded-full border-2 border-gray-700"
          />
          <img
            src="https://randomuser.me/api/portraits/women/7.jpg"
            alt="User 2"
            className="w-10 h-10 rounded-full border-2 border-gray-700"
          />
          <img
            src="https://randomuser.me/api/portraits/men/8.jpg"
            alt="User 3"
            className="w-10 h-10 rounded-full border-2 border-gray-700"
          />
          <img
            src="https://randomuser.me/api/portraits/women/9.jpg"
            alt="User 4"
            className="w-10 h-10 rounded-full border-2 border-gray-700"
          />
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="User 5"
            className="w-10 h-10 rounded-full border-2 border-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
