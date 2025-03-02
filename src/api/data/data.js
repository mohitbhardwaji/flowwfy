import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const fetchData = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${BASE_URL}/data/get_data`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addData = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(`${BASE_URL}/data/add_data`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
};

export const uploadExcel = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(`${API_URL}/data/upload`, formData, {
      headers: {
        "Authorization": `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // Return response data
  } catch (error) {
    console.error("Excel upload failed:", error);
    throw error;
  }
};