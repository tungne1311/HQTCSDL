import React, { useState } from "react";
import { invoicesData } from "../assets/assets"; // Đảm bảo bạn đã import dữ liệu hóa đơn từ assets
import * as XLSX from "xlsx"; // Import thư viện xlsx

const ManagePartInvoices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInvoices = invoicesData.filter(invoice =>
    invoice.supplierName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hàm xuất Excel
  const exportToExcel = () => {
    // Tạo dữ liệu để xuất (các cột và dòng)
    const ws = XLSX.utils.json_to_sheet(
      filteredInvoices.map(invoice => ({
        "Mã hóa đơn": invoice.invoiceId,
        "Ngày giao dịch": new Date(invoice.transactionDate).toLocaleDateString(),
        "Tên nhà cung cấp": invoice.supplierName,
        "Tổng tiền (VND)": invoice.totalAmount.toLocaleString()
      }))
    );

    // Tạo một workbook (tệp Excel)
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Invoices");

    // Tạo file và tải xuống
    XLSX.writeFile(wb, "Invoices.xlsx");
  };

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
      <button className="export-button" onClick={exportToExcel}>
        Xuất Excel
      </button>

      <div className="manage-table-wrapper">
        <table className="manage-table">
          <thead>
            <tr className="manage-header-row">
              <th>Mã hóa đơn</th>
              <th>Ngày giao dịch</th>
              <th>Tên nhà cung cấp</th>
              <th>Tổng tiền (VND)</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <tr key={invoice.invoiceId} className="manage-row">
                  <td>{invoice.invoiceId}</td>
                  <td>{new Date(invoice.transactionDate).toLocaleDateString()}</td>
                  <td>{invoice.supplierName}</td>
                  <td>{invoice.totalAmount.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  Không tìm thấy hóa đơn
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Nút xuất Excel */}
     
    </div>
  );
};

export default ManagePartInvoices;