import React, { useState } from "react";
import { customersData } from "../assets/assets";

const ManageCustomers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showActionsIndex, setShowActionsIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: ""
  });
  const [customers, setCustomers] = useState(customersData);

  const filteredCustomers = customers.filter((cus) =>
    cus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClick = () => {
    setFormData({
      name: "",
      address: "",
      phone: ""
    });
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu hợp lệ
    if (!formData.name || !formData.address || !formData.phone) {
      return; // Không làm gì cả nếu thiếu thông tin
    }

    // Thêm khách hàng mới
    const newCustomer = {
      id: Date.now().toString(),
      ...formData
    };
    setCustomers([...customers, newCustomer]);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    // Xóa khách hàng trực tiếp mà không có xác nhận
    const updatedCustomers = customers.filter((cus) => cus.id !== id);
    setCustomers(updatedCustomers);
  };

  return (
    <div className="manage-container">
      <div className="manage-search-box">
        <input
          type="text"
          placeholder="Tìm kiếm khách hàng..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Nút Thêm */}
      <div className="manage-add-button">
        <button onClick={handleAddClick} className="add-btn">+ Thêm khách hàng</button>
      </div>

      {/* Bảng khách hàng */}
      <div className="manage-table-wrapper">
        <table className="manage-table">
          <thead>
            <tr className="manage-header-row">
              <th>ID</th>
              <th>Họ tên</th>
              <th>Địa chỉ</th>
              <th>SĐT</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((cus, index) => (
                <tr key={cus.id} className="manage-row">
                  <td>{cus.id}</td>
                  <td>{cus.name}</td>
                  <td>{cus.address}</td>
                  <td>{cus.phone}</td>
                  <td className="relative">
                    <button
                      className="action-button"
                      onClick={() =>
                        setShowActionsIndex(showActionsIndex === index ? null : index)
                      }
                    >
                      ...
                    </button>
                    {showActionsIndex === index && (
                      <div className="action-menu">
                        <button className="btn-edit">Sửa</button>
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(cus.id)} // Xử lý xóa khách hàng
                        >
                          Xoá
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  Không tìm thấy khách hàng
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form thêm khách hàng */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h2>Thêm khách hàng</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Họ tên:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ tên"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Địa chỉ:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Địa chỉ"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Số điện thoại:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={formData.phone}
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
    </div>
  );
};

export default ManageCustomers;


