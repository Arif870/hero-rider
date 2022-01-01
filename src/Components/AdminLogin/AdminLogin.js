import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

const AdminLogin = () => {
  const [admins, setAdmin] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9000/admin")
      .then(res => res.json())
      .then(data => setAdmin(data));
  }, []);

  const handlAdmin = e => {
    const emailValue = document.getElementById("email").value;
    const passValue = document.getElementById("Password").value;
    console.log(emailValue, passValue);
    e.preventDefault();
    admins.map(admin => {
      if (admin.email === emailValue && admin.password === passValue) {
        navigate("/admin");
      } else if (admin.password !== passValue) {
        alert("Password did not matched");
      } else {
        alert("you are not an admin");
      }
    });
  };

  return (
    <>
      <div className="container">
        <Link to="/">
          <img className="mx-auto d-block" src={logo} alt="" />
        </Link>
        <p className="text-center fs-2">Admin login</p>
        <form className="w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="Password" />
          </div>
          <button
            onClick={handlAdmin}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
