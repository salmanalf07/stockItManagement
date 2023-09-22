import React from "react";

export default function sideBar() {
  const currentPath = window.location.pathname;
  return (
    <>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/assets/img/b1.png"
                className="img-circle elevation-2"
                alt="Logo Binus"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Stock Management Apps
              </a>
            </div>
          </div>

          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a
                  href="/dashboard"
                  className={`nav-link ${
                    "/dashboard" === currentPath ? "active" : ""
                  }`}
                >
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li
                className={`nav-item ${
                  ["/tabels"].includes(currentPath) ? "menu-open" : ""
                }`}
              >
                <a
                  href="/#"
                  className={`nav-link ${
                    ["/tabels"].includes(currentPath) ? "active" : ""
                  }`}
                >
                  <i className="nav-icon fas fa-cogs"></i>
                  <p>
                    Manajemen Sistem
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      href="/tabels"
                      className={`nav-link ${
                        "/tabels" === currentPath ? "active" : ""
                      }`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>User Account</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
}
