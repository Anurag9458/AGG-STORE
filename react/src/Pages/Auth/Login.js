import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Layout from "../../Components/Layouts/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        // <Toaster />;
        // toast.success("Successfully created!");
        toast.success(res.data.message);
        console.log(res.data.message);
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        //localstorage for locally store user data after login
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went wrong");
    }
  };

  return (
    <Layout title={"Login"}>
      <div>
        <section className="vh-80">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-7 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone"
                />
              </div>
              <div className="col-md-4 col-lg-4 col-xl-5 offset-xl-1">
                <div className="container mt-8">
                  <div className="row justify-content-center">
                    <div className="col-md-13">
                      <div className="card">
                        <div className="card-header">
                          <h3>Login</h3>
                        </div>
                        <div className="card-body">
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="email">Email address</label>
                              <input
                                type="email"
                                className="my-3 form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input
                                type="password"
                                className="my-3 form-control"
                                id="password"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                            <div>
                              <button
                                type="button"
                                className="btn btn-primary m-2"
                                onClick={() => {
                                  navigate("/forgot-password");
                                }}
                              >
                                Forgot Password
                              </button>
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Login
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Login;
