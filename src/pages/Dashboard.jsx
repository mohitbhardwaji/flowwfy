import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TableHOC from "../components/tableView/TableHOC";
import Pagination from "../components/common/Pagination";
import AddRecordModal from "../components/modals/AddRecordModal";
import { fetchData } from "../api/data/data";
import { logout } from "../store/authSlice";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages,setTotalPages] = useState(1)
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const res = await fetchData();
        if (res.status === 401) {
          throw new Error("Unauthorized");
        }
  
        setData(res.data.data);
        setTotalPages(res.data.totalPages);
        setCurrentPage(res.data.page);
  
        // Open modal with a message if there is no data
        if (res.data.data.length === 0) {
          setModalMessage(
            "You have not uploaded any records. Please upload using single record upload or bulk upload with Excel."
          );
          setIsModalOpen(true);
        }
      } catch (error) {
        if (error.status >= 400) {
          dispatch(logout());
          localStorage.removeItem("token");
          navigate("/");
        }
      }
    };
  
    fetchAndSetData();
  }, [dispatch, navigate]);
  
  const columns = [
    { key: "code", label: "Code" },
    { key: "code_description", label: "Description" },
    { key: "actions", label: "Action" },
  ];

  const handleEdit = (rowData) => {
    console.log("Editing:", rowData);
  };

  return (
    <div className="p-6 h-screen bg-gray-200">
      <div className="p-6 h-[90vh] bg-white rounded-2xl shadow-lg flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Records Management</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Records
          </button>
        </div>

        <div className="flex-grow overflow-auto">
          <TableHOC columns={columns} data={data} onEdit={handleEdit} />
        </div>

        <div className="p-4 flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      {/* Add Record Modal */}
      <AddRecordModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onSave={(newRecord) => setData((prevData) => [...prevData, newRecord])} // ✅ Add this line
  modalMessage={modalMessage}
/>

    </div>
  );
};

export default Dashboard;
