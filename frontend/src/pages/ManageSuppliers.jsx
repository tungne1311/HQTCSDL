import React, { useState } from "react";
import { suppliersData } from "../assets/assets";

const ManageSuppliers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuppliers = suppliersData.filter(sup =>
    sup.supplierName.toLowerCase().includes(searchTerm.toLowerCase())
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
              <th>ID</th>
              <th>Tên nhà cung cấp</th>
              <th>Tổng mua (VND)</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.length > 0 ? (
              filteredSuppliers.map((sup) => (
                <tr key={sup.supplierId} className="manage-row">
                  <td>{sup.supplierId}</td>
                  <td>{sup.supplierName}</td>
                  <td>{sup.totalAmount.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  Không tìm thấy nhà cung cấp
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSuppliers;
