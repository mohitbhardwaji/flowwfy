import React, { useState } from "react";
import { addData, uploadExcel } from "../../api/data/data";
import { ErrorToast, SuccessToast } from "../common/SweetToast";

const AddRecordModal = ({ isOpen, onClose, onSave, modalMessage }) => {
  const [formData, setFormData] = useState({
    code: "",
    code_description: "",
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("single"); // "single" or "excel"
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // To store error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage(""); // Clear previous errors
    try {
      const response = await addData(formData);
      console.log({ response });
      SuccessToast("Record updated successfully!");
      onSave(response); // Pass saved data to parent component
      setFormData({ code: "", code_description: "" }); // Reset form
      onClose(); // Close the modal after saving
    } catch (error) {
      ErrorToast(error?.response?.data?.message || "Failed to add record!");
      // setErrorMessage(error?.response?.data?.message || "Failed to add data."); // Show error message
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage("Please select a file first.");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Clear previous errors
    try {
      const response = await uploadExcel(selectedFile);
      onSave(response); // Pass response to parent component
      setSelectedFile(null); // Reset file input
      onClose(); // Close modal after success
    } catch (error) {
      console.error("File upload failed:", error);
      setErrorMessage(error?.response?.data?.message || "File upload failed."); // Show error message
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
      <div className="w-full max-w-xl h-[600px] rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#7363D6] text-white text-center py-6 px-5">
          <h2 className="text-2xl text-white font-extrabold">Add Record</h2>
        </div>

        {/* Display Modal Message If Passed */}
        {modalMessage && (
          <div className="bg-yellow-100 text-yellow-800 p-4 text-center font-semibold">
            {modalMessage}
          </div>
        )}

        {/* Display Error Message If Any */}
        {errorMessage && (
          <div className="bg-red-100 text-red-800 p-4 text-center font-semibold">
            {errorMessage}
          </div>
        )}

        {/* Toggle Switch */}
        <div className="flex justify-center my-3">
          <div className="relative flex w-60 bg-[#7363D6] rounded-full p-1">
            <div
              className={`absolute top-1 bottom-1 left-1 w-[48%] bg-white rounded-full shadow-md transition-all duration-300 ${
                activeTab === "single" ? "left-1" : "left-[50%]"
              }`}
            ></div>
            <button
              className={`w-1/2 text-center py-2 font-semibold transition-colors relative z-10 ${
                activeTab === "single" ? "text-[#7363D6]" : "text-white"
              }`}
              onClick={() => setActiveTab("single")}
            >
              Add Single
            </button>
            <button
              className={`w-1/2 text-center py-2 font-semibold transition-colors relative z-10 ${
                activeTab === "excel" ? "text-[#7363D6]" : "text-white"
              }`}
              onClick={() => setActiveTab("excel")}
            >
              Upload Excel
            </button>
          </div>
        </div>

        {/* Modal Body - Fixed Height with Scrolling */}
        <div className="p-6 flex-grow overflow-auto">
          {activeTab === "single" ? (
            <div className="space-y-6">
              <div className="flex items-center">
                <label className="w-1/3 text-gray-700 font-medium">Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="Enter Code"
                  className="w-2/3 p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div className="flex items-center">
                <label className="w-1/3 text-gray-700 font-medium">Description</label>
                <input
                  type="text"
                  name="code_description"
                  value={formData.code_description}
                  onChange={handleChange}
                  placeholder="Enter Code Description"
                  className="w-2/3 p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-6">
              <label className="text-gray-700 font-medium">Upload Excel File</label>
              <input
                type="file"
                className="border p-3 rounded-md"
                onChange={handleFileChange}
              />
              <button
                onClick={handleUpload}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-auto flex justify-end space-x-4 p-6">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            disabled={loading}
          >
            Cancel
          </button>
          {activeTab === "single" && (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 bg-[#7363D6] text-white rounded-lg hover:bg-purple-700 transition"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddRecordModal;
