import React, { useState } from "react";
import { productsData } from "../assets/assets";

const ManageProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showActionsIndex, setShowActionsIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // ✅ mới
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    capacity: "",
    category: ""
  });
  const [products, setProducts] = useState(productsData);

  const filteredProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClick = () => {
    setFormData({
      name: "",
      price: "",
      capacity: "",
      category: ""
    });
    setEditIndex(null); // ✅ không phải sửa
    setShowForm(true);
  };

  const handleEditClick = (index) => {
    const product = products[index];
    setFormData({
      name: product.name,
      price: product.price,
      capacity: product.capacity,
      category: product.category
    });
    setEditIndex(index); // ✅ set vị trí đang sửa
    setShowForm(true);
    setShowActionsIndex(null); // ẩn menu
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

    if (!formData.name || !formData.price || !formData.capacity || !formData.category) {
      return;
    }

    if (editIndex !== null) {
      // ✅ đang sửa
      const updatedProducts = [...products];
      updatedProducts[editIndex] = {
        ...updatedProducts[editIndex],
        ...formData
      };
      setProducts(updatedProducts);
    } else {
      // ✅ đang thêm mới
      const newProduct = {
        id: Date.now().toString(),
        ...formData
      };
      setProducts([...products, newProduct]);
    }

    setShowForm(false);
    setEditIndex(null);
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  return (
    <div className="manage-container">
      <div className="manage-search-box">
        <input
          type="text"
          placeholder="Tìm kiếm xe máy..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="manage-add-button">
        <button onClick={handleAddClick} className="add-btn">+ Thêm xe máy</button>
      </div>

      <div className="manage-table-wrapper">
        <table className="manage-table">
          <thead>
            <tr className="manage-header-row">
              <th>Mã</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Dung tích</th>
              <th>Loại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((prod, index) => (
                <tr key={prod.id} className="manage-row">
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>{prod.capacity}</td>
                  <td>{prod.category}</td>
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
                        <button className="btn-edit" onClick={() => handleEditClick(index)}>Sửa</button>
                        <button className="btn-delete" onClick={() => handleDelete(prod.id)}>Xoá</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Không tìm thấy xe máy
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h2>{editIndex !== null ? "Sửa xe máy" : "Thêm xe máy"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Tên xe:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tên xe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Giá:</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Giá"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="capacity">Dung tích:</label>
                <input
                  type="text"
                  id="capacity"
                  name="capacity"
                  placeholder="Dung tích"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Loại:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Loại xe"
                  value={formData.category}
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
                    setEditIndex(null);
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

export default ManageProducts;

