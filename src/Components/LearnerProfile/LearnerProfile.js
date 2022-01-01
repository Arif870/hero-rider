import React from "react";
import { Link } from "react-router-dom";

const LearnerProfile = () => {
  return (
    <>
      <div className="container  mt-5">
        <div className="text-center">
          <img
            style={{ width: "200px" }}
            className="rounded shadow mb-3"
            src="https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg"
            alt="profile"
          />
          <h1>Welcome Arifuzzaman</h1>
          <p>You have joined as a Driving lesson learner.</p>
        </div>
        <div>
          <p className="fs-3 text-center mt-5">Choose your package</p>
          <div className="d-flex justify-content-between g-4 mt-5">
            {" "}
            <Link to="#">
              <h4 className="border p-4 rounded shadow bg-primary text-light">
                Car Driving 200$
              </h4>{" "}
            </Link>
            <Link to="#">
              <h4 className="border p-4 rounded shadow bg-success text-light">
                Bike Driving 100$
              </h4>{" "}
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <p className="fs-3 text-center">
            Here is your details and if there is anything to change about you
            please contact with{" "}
            <span className="text-success">hero.rider@gmail.com</span>
          </p>

          <hr />

          <div>
            <p>
              Your Addrss: <span>uttara, dhaka</span>
            </p>
            <p>
              Phone: <span>01933929922</span>
            </p>
            <p>
              Area: <span>uttara, dhaka</span>
            </p>
            <p>
              Your car info: <span>bmw, 10,266</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnerProfile;
