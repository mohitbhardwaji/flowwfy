import React, { useState } from "react";
import { updateData } from "../../api/data/data";
import { ErrorToast, SuccessToast } from "../common/SweetToast";

const EditRecordModal = ({ isOpen, onClose, onUpdate, record }) => {
  const [formData, setFormData] = useState({
    code_description: record?.code_description || "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await updateData(record._id,formData);
      SuccessToast("Updated Successfully")
      onUpdate(response);
      onClose();
    } catch (error) {
      ErrorToast(error?.response?.data?.message || "Failed to update data.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
      <div className="w-full max-w-xl h-[400px] rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#7363D6] text-white text-center py-6 px-5">
          <h2 className="text-2xl text-white font-extrabold">Edit Record</h2>
        </div>

        {/* Display Error Message If Any */}
        {errorMessage && (
          <div className="bg-red-100 text-red-800 p-4 text-center font-semibold">
            {errorMessage}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 flex-grow overflow-auto">
          <div className="space-y-6">
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700 font-medium">Code</label>
              <input
                type="text"
                name="code"
                value={record.code}
                placeholder={record.code}
                readOnly
                className="w-2/3 p-3 border text-black rounded-md bg-gray-200 outline-none"
              />
            </div>

            <div className="flex items-center">
              <label className="w-1/3 text-gray-700 font-medium">Description</label>
              <input
                type="text"
                name="code_description"
                value={formData.code_description}
                onChange={handleChange}
                placeholder={record.code_description}
                className="w-2/3 p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
          </div>
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
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-[#7363D6] text-white rounded-lg hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRecordModal;
