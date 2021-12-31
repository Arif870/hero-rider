import React, { useState } from "react";
import Home from "../Home/Home";

const Rider = () => {
  const [registerData, setRegisterData] = useState({});
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegister = { ...registerData };
    newRegister[field] = value;
    setRegisterData(newRegister);
  };
  const registerSubmit = e => {
    e.preventDefault();
    const rideRegister = { ...registerData };
    setRegisterData(rideRegister);
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rideRegister),
    })
      .then(res => res.json())
      .then(data => console.log(data));
    console.log("clicked", registerData);
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
              type="file"
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
              type="file"
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
              id="exampleInputPassword1"
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
              id="exampleInputPassword2"
            />
          </div>

          <button type="submit" className="btn btn-danger mb-4">
            Join
          </button>
        </form>
      </div>
    </>
  );
};

export default Rider;
