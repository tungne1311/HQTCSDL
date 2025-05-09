import React, { useState } from "react";
import { partsData } from "../assets/assets"; // Đảm bảo bạn đã import dữ liệu partsData từ assets

const ManageParts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredParts = partsData.filter(part =>
    part.partName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-container">
      <div className="manage-search-box">
        <input
          type="text"
          placeholder="Tìm kiếm ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="manage-table-wrapper">
        <table className="manage-table">
          <thead>
            <tr className="manage-header-row">
              <th>Mã</th>
              <th>Tên linh kiện</th>
              <th>Tổng tiền (VND)</th>
            </tr>
          </thead>
          <tbody>
            {filteredParts.length > 0 ? (
              filteredParts.map((part) => (
                <tr key={part.partId} className="manage-row">
                  <td>{part.partId}</td>
                  <td>{part.partName}</td>
                  <td>{part.totalAmount.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  Không tìm thấy linh kiện
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageParts