import React, { useState } from "react";
import { productInvoicesData } from "../assets/assets";
import * as XLSX from "xlsx";

const ManageProductInvoice = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    invoiceId: "",
    transactionDate: "",
    customerName: "",
    vehicle: "",
    quantity: 0,
    totalAmount: 0
  });

  const filteredInvoices = productInvoicesData.filter(invoice =>
    invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      filteredInvoices.map(invoice => ({
        "Mã hóa đơn": invoice.invoiceId,
        "Ngày giao dịch": new Date(invoice.transactionDate).toLocaleDateString(),
        "Tên khách hàng": invoice.customerName,
        "Xe máy": invoice.vehicle,
        "Số lượng": invoice.quantity,
        "Tổng tiền (VND)": invoice.totalAmount.toLocaleString()
      }))
    );

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Product Invoices");
    XLSX.writeFile(wb, "Product_Invoices.xlsx");
  };

  const handleAddInvoiceClick = () => {
    setShowForm(true); // Hiển thị form tạo hóa đơn
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice({
      ...newInvoice,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic tạo hóa đơn mới
    productInvoicesData.push(newInvoice);
    setShowForm(false); // Ẩn form sau khi tạo xong
    setNewInvoice({
      invoiceId: "",
      transactionDate: "",
      customerName: "",
      vehicle: "",
      quantity: 0,
      totalAmount: 0
    });
  };

  return (
    <div className="manage-container">
      <div className="manage-search-box">
        <input
          type="text"
          placeholder="Tìm kiếm khách hàng ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="button-container" style={{ marginBottom: "1rem" }}>
        {/* Nút Tạo hóa đơn */}
        <button className="export-button" onClick={handleAddInvoiceClick}>
          Tạo hóa đơn
        </button>

        {/* Nút Xuất Excel */}
        <button className="export-button" onClick={exportToExcel}>
          Xuất Excel
        </button>
      </div>

      {/* Form tạo hóa đơn */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h2>Thêm Hóa Đơn</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="invoiceId">Mã hóa đơn:</label>
                <input
                  type="text"
                  id="invoiceId"
                  name="invoiceId"
                  value={newInvoice.invoiceId}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="transactionDate">Ngày giao dịch:</label>
                <input
                  type="date"
                  id="transactionDate"
                  name="transactionDate"
                  value={newInvoice.transactionDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerName">Tên khách hàng:</label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={newInvoice.customerName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="vehicle">Tên xe:</label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={newInvoice.vehicle}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Số lượng:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={newInvoice.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="totalAmount">Tổng tiền (VND):</label>
                <input
                  type="number"
                  id="totalAmount"
                  name="totalAmount"
                  value={newInvoice.totalAmount}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn-save">Lưu</button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowForm(false)}
                >
                  Huỷ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bảng thông tin hóa đơn */}
      <div className="manage-table-wrapper">
        <table className="manage-table">
          <thead>
            <tr className="manage-header-row">
              <th>Mã hóa đơn</th>
              <th>Ngày giao dịch</th>
              <th>Tên khách hàng</th>
              <th>Tên Xe</th>
              <th>Số lượng</th>
              <th>Tổng tiền (VND)</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <tr key={invoice.invoiceId} className="manage-row">
                  <td>{invoice.invoiceId}</td>
                  <td>{new Date(invoice.transactionDate).toLocaleDateString()}</td>
                  <td>{invoice.customerName}</td>
                  <td>{invoice.vehicle}</td>
                  <td>{invoice.quantity}</td>
                  <td>{invoice.totalAmount.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Không tìm thấy hóa đơn
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProductInvoice;
