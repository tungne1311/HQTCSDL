import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const employeeLinks = [
  { path: '/dashboard-employee/manage-suppliers', label: 'Quản Lý Nhà Cung Cấp' },
  { path: '/dashboard-employee/manage-parts', label: 'Quản Lý Linh Kiện' },
  { path: '/dashboard-employee/manage-products', label: 'Quản Lý Xe Máy' },
  { path: '/dashboard-employee/manage-customers', label: 'Quản Lý Khách Hàng' },
  { path: '/dashboard-employee/manage-invoices', label: 'Quản Lý Hóa Đơn Linh Kiện' },
  { path: '/dashboard-employee/product-invoices', label: 'Quản Lý Hóa Đơn Sản Phẩm' },
  { path: '/dashboard-employee/statistics', label: 'Thống Kê' },
];

const EmployeeDashboard = () => <DashboardLayout links={employeeLinks} />;
export default EmployeeDashboard;
