import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordConfirmation, setPasswordConfirmation] = useState("");

  // Validation
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const registerHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", PasswordConfirmation);

    await axios
      .post("http://127.0.0.1:8000/api/auth/register", formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h2>
              <b>Stock</b>Management
            </h2>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register a new member</p>

            <form onSubmit={registerHandler}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
                {validation.name && (
                  <span
                    style={{ display: "block" }}
                    className="error invalid-feedback"
                  >
                    {validation.name[0]}
                  </span>
                )}
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
                {validation.email && (
                  <span
                    style={{ display: "block" }}
                    className="error invalid-feedback"
                  >
                    {validation.email[0]}
                  </span>
                )}
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
                {validation.password && (
                  <span
                    style={{ display: "block" }}
                    className="error invalid-feedback"
                  >
                    {validation.password[0]}
                  </span>
                )}
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                  name="password_confirmation"
                  id="password_confirmation"
                  value={PasswordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                    Register
                  </button>
                </div>
              </div>
            </form>

            <a href="/" className="text-center">
              I already have a membership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
