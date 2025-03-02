import React, { useState } from "react";
import { Eye, Edit, ToggleRight } from "lucide-react";
import Pagination from "../common/Pagination";

const TableHOC = ({ columns, data, onEdit }) => {

  return (
    <div className="">
      <table className="w-full text-left border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#e2eafc] text-gray-700">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 border-b-2 border-gray-300">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row._id}
              className={`border-b-2 border-gray-300 hover:bg-[#EAE7FD] ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">
                  {col.key === "actions" ? (
                    <div className="flex items-center space-x-3 ">
                      <button className="p-2 bg-[#7363D6] rounded-full ">
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => onEdit(row)}
                        className="p-2 bg-[#7363D6] rounded-full "
                      >
                        <Edit className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-[#7363D6] rounded-full  ">
                        <ToggleRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination - Positioned at Bottom-Right */}
     
    </div>
  );
};

export default TableHOC;
