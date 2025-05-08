import React, { useState } from "react";
import { customersData, employeesData } from "../assets/assets";

const ManageCustomers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc danh sách nhân viên theo tên
  const filteredCustomers = customersData.filter(cus =>
    cus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-container">
      <div className="manage-search-box">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="manage-table-wrapper">
        <table className="manage-table">
          <thead>
            <tr className="manage-header-row">
              <th>ID</th>
              <th>Họ tên</th>
              <th>Địa chỉ</th>
              <th>SĐT</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((cus, index) => (
              <tr key={cus.id} className="manage-row">
                <td>{cus.id}</td>
                <td>{cus.name}</td>
                <td>{cus.address}</td>
                <td>{cus.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCustomers;