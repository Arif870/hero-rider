import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";

const Learner = () => {
  const [registerData, setRegisterData] = useState({});

  let navigate = useNavigate();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegister = { ...registerData };
    newRegister[field] = value;
    setRegisterData(newRegister);
  };
  //
  const handleLearner = e => {
    const pass1 = document.getElementById("Password1").value;
    const pass2 = document.getElementById("Password2").value;
    if (pass1 !== pass2) {
      alert("password didnot matched !!");
    } else {
      const learnerRegister = { ...registerData };
      setRegisterData(learnerRegister);
      fetch("https://stormy-bayou-37155.herokuapp.com/learnerUser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(learnerRegister),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            alert("successfully inserted");
            e.target.reset();
            navigate("/learnerprofile");
          }
        });
    }
    e.preventDefault();
  };
  return (
    <>
      <Home />
      <div className="container mt-4" style={{}}>
        <p className="text-center fs-3 fw-normal">
          Join as a{" "}
          <span className="text-success fw-normal">Driving lesson learner</span>
        </p>
        <hr />
        <form onSubmit={handleLearner} className="w-75 mx-auto">
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              name="fullName"
              className="form-control"
              id="fullname"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onBlur={handleOnBlur}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              onBlur={handleOnBlur}
              type="number"
              name="age"
              className="form-control"
              id="age"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              name="address"
              className="form-control"
              id="address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              name="phone"
              className="form-control"
              id="phone"
            />
          </div>

          <label className="form-label">Vehicle type</label>
          <select
            onBlur={handleOnBlur}
            className="form-select mb-3"
            name="vehicleType"
            aria-label="Default select example"
          >
            <option defaultValue={""}>Select vehicle type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>

          <div className="mb-3">
            <label htmlFor="nip" className="form-label">
              NID picture
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              name="nidPic"
              className="form-control"
              id="nip"
              placeholder="Image Link"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pp" className="form-label">
              Profile picture
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              name="profilePic"
              className="form-control"
              id="pp"
              placeholder="Image Link"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onBlur={handleOnBlur}
              type="password"
              name="password"
              className="form-control"
              id="Password1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              onBlur={handleOnBlur}
              type="password"
              name="confirmPassword"
              className="form-control"
              id="Password2"
            />
          </div>

          <button type="submit" className="btn btn-success mb-4">
            Join as learner
          </button>
        </form>
      </div>
    </>
  );
};

export default Learner;
