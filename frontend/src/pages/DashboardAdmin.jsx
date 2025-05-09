import React from 'react';
import DashboardLayout from '../components/DashboardLayout';


const adminLinks = [
  { path: '/admin-dashboard/manage-suppliers', label: 'Quản Lý Nhà Cung Cấp' },
  { path: '/admin-dashboard/manage-parts', label: 'Quản Lý Linh Kiện' },
  { path: '/admin-dashboard/manage-products', label: 'Quản Lý Xe Máy' },
  { path: '/admin-dashboard/manage-customers', label: 'Quản Lý Khách Hàng' },
  { path: '/admin-dashboard/manage-employees', label: 'Quản Lý Nhân Viên' },
  { path: '/admin-dashboard/manage-invoices', label: 'Quản Lý Hóa Đơn Linh Kiện' },
  { path: '/admin-dashboard/product-invoices', label: 'Quản Lý Hóa Đơn Sản Phẩm' },
  { path: '/admin-dashboard/statistics', label: 'Thống Kê' },
];

const DashboardAdmin = () => <DashboardLayout links={adminLinks} />;
export default DashboardAdmin;