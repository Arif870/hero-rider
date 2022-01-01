import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import { useAuth } from "../../Hooks/useAuth";

const Rider = () => {
  const { registerUser } = useAuth();
  const [registerData, setRegisterData] = useState({});

  let navigate = useNavigate();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegister = { ...registerData };
    newRegister[field] = value;
    setRegisterData(newRegister);
  };
  const registerSubmit = e => {
    e.preventDefault();
    const pass1 = document.getElementById("password1").value;
    const pass2 = document.getElementById("password2").value;
    if (pass1 !== pass2) {
      alert("password didnot matched !!");
    } else {
      const rideRegister = { ...registerData };
      setRegisterData(rideRegister);
      fetch("http://localhost:9000/rideUser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(rideRegister),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            alert("successfully inserted");
            e.target.reset();
            navigate(`/riderprofile`);
          }
        });
      registerUser(rideRegister.email, rideRegister.password);
      console.log("mail", rideRegister.email);
    }
  };

  return (
    <>
      <Home />
      <div className="container mt-4">
        <p className="text-center fs-3 fw-normal">
          Join as a <span className="text-danger fw-normal">Rider</span>{" "}
        </p>
        <hr />
        <form onSubmit={registerSubmit} className="w-75 mx-auto">
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
          <div className="mb-3">
            <label htmlFor="area" className="form-label">
              Area
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              name="area"
              className="form-control"
              id="area"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carinfo" className="form-label">
              Car Info
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              name="carInfo"
              className="form-control"
              id="carinfo"
              placeholder="name | model and number Plate"
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
            <label htmlFor="dlp" className="form-label">
              Driving licence picture
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              placeholder="Image Link"
              name="drivingLicencePic"
              className="form-control"
              id="dlp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nip" className="form-label">
              NID picture
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              placeholder="Image Link"
              name="nidPic"
              className="form-control"
              id="nip"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pp" className="form-label">
              Profile picture
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              placeholder="Image Link"
              name="profilePic"
              className="form-control"
              id="pp"
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
              id="password1"
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
              id="password2"
            />
          </div>

          <button type="submit" className="btn btn-danger mb-4">
            Join as rider
          </button>
        </form>
      </div>
    </>
  );
};

export default Rider;
