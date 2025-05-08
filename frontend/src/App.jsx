import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import './App.css'; 
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardEmployee from "./pages/DashboardEmployee";
import ManageSuppliers from "./pages/ManageSuppliers";
import Statistics from "./pages/Statistic";
import ManageParts from "./pages/ManageParts";
import ManageProducts from "./pages/ManageProducts";
import ManageCustomers from "./pages/ManageCustomers";
import ManageEmployees from "./pages/ManageEmployees";
import ManageDepartments from "./pages/ManageDepartments";
import ManagePartInvoices from "./pages/ManagePartInvoices";
import ManageProduction from "./pages/ManageProduction";
import ManageProductInvoice from "./pages/ManageProductInvoice";

const App = () =>{
  const { showLogin } = useContext(AppContext);

  return (
    <div>
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin-dashboard' element={<DashboardAdmin/>}>
          <Route path="manage-suppliers" element={<ManageSuppliers />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="manage-parts" element={<ManageParts />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="manage-customers" element={<ManageCustomers />} />
          <Route path="manage-employees" element={<ManageEmployees />} />
          <Route path="manage-departments" element={<ManageDepartments />} />
          <Route path="manage-invoices" element={<ManagePartInvoices />} />
          <Route path="manage-production" element={<ManageProduction />} />
          <Route path="product-invoices" element={<ManageProductInvoice />} />
        </Route>

        <Route path="/dashboard-employee" element={<DashboardEmployee />}>
          <Route path="manage-suppliers" element={<ManageSuppliers />} />
          <Route path="manage-parts" element={<ManageParts />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="manage-customers" element={<ManageCustomers />} />
          <Route path="manage-invoices" element={<ManagePartInvoices />} />
          <Route path="product-invoices" element={<ManageProductInvoice />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>

      </Routes>
    </div>
  )
}


export default App
