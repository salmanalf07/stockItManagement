import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post("http://127.0.0.1:8000/api/auth/login", formData)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        navigate("/dashboard");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>LOGIN</h1>
            <h4>Stock Management Apps</h4>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            {validation.error && (
              <div className="alert alert-danger" role="alert">
                {validation.error}
              </div>
            )}
            <form onSubmit={loginHandler}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8"></div>

                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
