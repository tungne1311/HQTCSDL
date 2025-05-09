import React, { useState } from "react";
import { employeesData } from "../assets/assets";

const ManageEmployees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showActions, setShowActions] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [employees, setEmployees] = useState(employeesData);
  
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    position: "",
    insurance: "",
    salary: ""
  });

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClick = () => {
    setFormData({
      name: "",
      department: "",
      position: "",
      insurance: "",
      salary: ""
    });
    setEditingEmployee(null);
    setShowForm(true);
    setShowActions(null);
  };

  const handleEditClick = (employee) => {
    setFormData({
      name: employee.name,
      department: employee.department,
      position: employee.position,
      insurance: employee.insurance,
      salary: employee.salary
    });
    setEditingEmployee(employee);
    setShowForm(true);
    setShowActions(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "salary" ? (value === "" ? "" : Number(value)) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.department || !formData.position || 
        !formData.insurance || formData.salary === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (editingEmployee) {
      const updatedEmployees = employees.map(emp =>
        emp.id === editingEmployee.id ? { ...emp, ...formData } : emp
      );
      setEmployees(updatedEmployees);
    } else {
      const newEmployee = {
        id: Date.now().toString(),
        ...formData
      };
      setEmployees([...employees, newEmployee]);
    }

    setShowForm(false);
    setEditingEmployee(null);
  };

  const handleDeleteClick = (employee) => {
    const updatedEmployees = employees.filter(emp => emp.id !== employee.id);
    setEmployees(updatedEmployees);
  };

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

      <div className="manage-add-button">
        <button onClick={handleAddClick} className="add-btn">+ Thêm nhân viên</button>
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
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp, index) => (
                <tr key={emp.id} className="manage-row">
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.position}</td>
                  <td>{emp.insurance}</td>
                  <td>{emp.salary.toLocaleString()}</td>
                  <td className="relative">
                    <button
                      className="action-button"
                      onClick={() =>
                        setShowActions(showActions === index ? null : index)
                      }
                    >
                      ...
                    </button>
                    {showActions === index && (
                      <div className="action-menu">
                        <button className="btn-edit" onClick={() => handleEditClick(emp)}>Sửa</button>
                        <button className="btn-delete" onClick={() => handleDeleteClick(emp)}>Xoá</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  Không tìm thấy nhân viên
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h2>{editingEmployee ? "Sửa nhân viên" : "Thêm nhân viên"}</h2>
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
                <label htmlFor="department">Bộ phận:</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="Bộ phận"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="position">Chức vụ:</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Chức vụ"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="insurance">BHYT:</label>
                <input
                  type="text"
                  id="insurance"
                  name="insurance"
                  placeholder="BHYT"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="salary">Lương (VND):</label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  placeholder="Lương"
                  value={formData.salary}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn-save">Lưu</button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => {
                    setShowForm(false);
                    setEditingEmployee(null);
                  }}
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

export default ManageEmployees;
