import axios from "axios";

const BASE_URL = "https://react-flow-nndy.onrender.com";

export const fetchData = async (page) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${BASE_URL}/data/get_data?page=${page}`, {
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

export const updateData = async (id,data) =>{
  try {
    const token = localStorage.getItem("token");
    console.log(data,id)
    const response = await axios.patch(`${BASE_URL}/data/update/${id}`, data,{
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
}

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