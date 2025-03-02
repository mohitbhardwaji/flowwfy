import axios from "axios";

const API_BASE_URL = "http://localhost:3000/auth";

// Login API
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/login`,
            { email, password },
            { headers: { "Content-Type": "application/json" } }
        );
        return response.data; // Returns the token or user data
    } catch (error) {
        throw error.response?.data?.message || "Login failed!";
    }
};

export const signupUser = async (email, password) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/signup`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data; // Returns success message
    } catch (error) {
      throw error.response?.data || "Signup failed!";
    }
  };