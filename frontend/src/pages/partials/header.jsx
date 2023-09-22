import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function header() {
  const [user, SetUser] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post("http://127.0.0.1:8000/api/auth/me").then((response) => {
      SetUser(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const logoutHandler = async () => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axios
      .post("http://127.0.0.1:8000/api/auth/logout")
      .then((response) => {
        console.log("Response status:", response.status);
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <p>
                <i className="fas fa-user"></i> {user.name}
              </p>
            </a>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
              style={{ left: "inherit", right: "0px" }}
            >
              <button
                href="/#"
                onClick={logoutHandler}
                className="dropdown-item"
              >
                Logout
              </button>
              {/* <div className="dropdown-divider"></div> */}
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </>
  );
}
