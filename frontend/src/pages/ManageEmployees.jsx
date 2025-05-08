import React, { useState } from "react";
import { employeesData } from "../assets/assets";

const ManageEmployees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc danh sách nhân viên theo tên
  const filteredEmployees = employeesData.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
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
              <th>Bộ phận</th>
              <th>Chức vụ</th>
              <th>BHYT</th>
              <th>Lương (VND)</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, index) => (
              <tr key={emp.id} className="manage-row">
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td className="hide-on-mobile">{emp.department}</td>
                <td className="hide-on-mobile">{emp.position}</td>
                <td>{emp.insurance}</td>
                <td>{emp.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEmployees;
