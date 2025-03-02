import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TableHOC from "../components/tableView/TableHOC";
import Pagination from "../components/common/Pagination";
import AddRecordModal from "../components/modals/AddRecordModal";
import EditRecordModal from "../components/modals/EditRecordModal";
import { fetchData } from "../api/data/data";
import { logout } from "../store/authSlice";
import Loader from "../components/Loader";
import { ErrorToast } from "../components/common/SweetToast";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchAndSetData = async () => {
      setLoading(true);
      try {
        const res = await fetchData(currentPage);
        if (res.status === 401) {
          ErrorToast("Unauthorized")
        }

        setData(res.data.data);
        setTotalPages(res.data.totalPages);

        if (res.data.data.length === 0) {
          setModalMessage(
            "You have not uploaded any records. Please upload using single record upload or bulk upload with Excel."
          );
          setIsModalOpen(true);
        }
      } catch (error) {
        if (error.status >= 400) {
          ErrorToast(error?.response?.data?.message)
          dispatch(logout());
          localStorage.removeItem("token");
          navigate("/");
        }
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchAndSetData();
  }, [dispatch, navigate, currentPage]);

  const columns = [
    { key: "code", label: "Code" },
    { key: "code_description", label: "Description" },
    { key: "actions", label: "Action" },
  ];

  const handleEdit = (rowData) => {
    setSelectedRecord(rowData);
    setIsEditModalOpen(true);
  };

  const handleUpdate = (updatedRecord) => {
    setData((prevData) =>
      prevData.map((item) =>
        item._id === updatedRecord._id ? updatedRecord : item
      )
    );
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
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Loader />
            </div>
          ) : (
            <TableHOC columns={columns} data={data} onEdit={handleEdit} />
          )}
        </div>

        <div className="p-4 flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      <AddRecordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(newRecord) => setData((prevData) => [...prevData, newRecord])}
        modalMessage={modalMessage}
      />

      <EditRecordModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        record={selectedRecord}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default Dashboard;
