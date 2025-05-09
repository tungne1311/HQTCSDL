import React, { useState } from "react";

// Dữ liệu test
const salesData = [
  { id: 1, name: "Honda Wave", revenue: 10000000, cost: 7000000 },
  { id: 2, name: "Yamaha Sirius", revenue: 12000000, cost: 8000000 },
  { id: 3, name: "Vision 2022", revenue: 8000000, cost: 5000000 },
  { id: 4, name: "AirBlade", revenue: 15000000, cost: 11000000 },
  { id: 5, name: "Winner X", revenue: 9000000, cost: 6000000 }
];

const Statistics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "", "asc", "desc"

  const filteredData = salesData
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.revenue - b.revenue;
      if (sortOrder === "desc") return b.revenue - a.revenue;
      return 0;
    });

  const totalRevenue = filteredData.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  return (
    <div className="manage-container">
      <h2 style={{ marginBottom: "20px" }}>Tổng doanh thu: {totalRevenue.toLocaleString()} VND</h2>

      <div className="filter-bar" style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          className="search-input"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <label>
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={sortOrder === "asc"}
            onChange={() => setSortOrder("asc")}
          />
          Doanh thu tăng dần
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={sortOrder === "desc"}
            onChange={() => setSortOrder("desc")}
          />
          Doanh thu giảm dần
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            value=""
            checked={sortOrder === ""}
            onChange={() => setSortOrder("")}
          />
          Mặc định
        </label>
      </div>

      <div className="manage-table-wrapper">
        <table className="manage-table">
          <thead>
            <tr className="manage-header-row">
              <th>Mã</th>
              <th>Tên sản phẩm</th>
              <th>Doanh thu</th>
              <th>Chi phí</th>
              <th>Lợi nhuận</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="manage-row">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.revenue.toLocaleString()} VND</td>
                <td>{item.cost.toLocaleString()} VND</td>
                <td>{(item.revenue - item.cost).toLocaleString()} VND</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
