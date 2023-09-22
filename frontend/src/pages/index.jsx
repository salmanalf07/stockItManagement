import React from "react";
//component
import SideBar from "../pages/partials/sidebar";
import Header from "../pages/partials/header";
import Footer from "../pages/partials/footer";
//

export default function index({ children }) {
  return (
    <>
      <div className="hold-transition sidebar-mini layout-fixed">
        <div className="wrapper">
          {/* <div className="preloader flex-column justify-content-center align-items-center">
            <img
              className="animation__shake"
              src="/assets/img/AdminLTELogo.png"
              alt="AdminLTELogo"
              height="60"
              width="60"
            />
          </div> */}
          <Header />
          <SideBar />

          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Dashboard</h1>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </div>
            {/* /.content-header */}

            {/* Main content */}
            <section className="content">{children}</section>
            {/* /.content */}
          </div>
          <Footer />
          {/* /.content-wrapper */}
          {/* <!-- Control Sidebar --> */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* <!-- Control sidebar content goes here --> */}
          </aside>
          {/* <!-- /.control-sidebar --> */}
        </div>
      </div>
    </>
  );
}
