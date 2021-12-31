import React from "react";
import Home from "../Home/Home";

const Learner = () => {
  return (
    <>
      <Home />
      <div className="container mt-4" style={{}}>
        <p className="text-center fs-3 fw-normal">
          Join as a{" "}
          <span className="text-success fw-normal">Driving lesson learner</span>
        </p>
        <hr />
        <form className="w-75 mx-auto">
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
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
            <input type="number" name="age" className="form-control" id="age" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
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
              type="text"
              name="phone"
              className="form-control"
              id="phone"
            />
          </div>

          <label className="form-label">Vehicle type</label>
          <select
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
              type="password"
              name="confirmPassword"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>

          <button type="submit" className="btn btn-success mb-4">
            Join
          </button>
        </form>
      </div>
    </>
  );
};

export default Learner;
