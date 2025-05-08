import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = ({ links }) => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <h1>Dashboard</h1>
      </header>

      {/* Layout */}
      <div className="layout">
        <nav className="sidebar">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;