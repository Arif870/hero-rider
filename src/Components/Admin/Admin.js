import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Filter } from "../Filter/Filter";
import RiderProfile from "../RiderProfile/RiderProfile";
import "./Admin.css";

const Admin = () => {
  const [ridersInfo, setRidersInfo] = useState([]);
  const [learnerInfo, setLearnerInfo] = useState([]);
  //// rider user effect
  useEffect(() => {
    const uri = `http://localhost:9000/rideUser`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setRidersInfo(data));
  }, []);
  /// learner user effect
  useEffect(() => {
    const uri = `http://localhost:9000/learnerUser`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setLearnerInfo(data));
  }, []);
  ///// rider delete
  const rideUserDelete = id => {
    const procced = window.confirm("Are you sure to delete this user ?");
    if (procced) {
      const url = `http://localhost:9000/rideUser/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert("Successfully Detele .");
            const remainUsers = ridersInfo.filter(
              singleRider => singleRider._id !== id
            );
            setRidersInfo(remainUsers);
          }
        });
    }
  };
  ////////   Larner delete
  const learnerUserDelete = id => {
    const procced = window.confirm("Are you sure to delete this user ?");
    if (procced) {
      const url = `http://localhost:9000/learnerUser/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert("Successfully Detele .");
            const remainUsers = learnerInfo.filter(
              singleLearner => singleLearner._id !== id
            );
            setLearnerInfo(remainUsers);
          }
        });
    }
  };
  ///////////////////////
  return (
    <>
      <div className="container mt-5">
        <Link to="/">
          <img
            src={logo}
            className="mx-auto d-block"
            style={{ width: "250px" }}
            alt=""
          />
        </Link>
        <p className="text-center fs-3 fw-400">Admin</p>
        <Filter />
        <h3 className="text-center mb-3">All Riders info</h3>
        <h4 className="text-center mb-3">
          Total riders found : {ridersInfo.length}
        </h4>
        <table className="table table-striped text-center ">
          <thead className="bg-success">
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Area</th>
              <th scope="col">Car info</th>
              <th scope="col"> Vehicle type</th>
              <th scope="col"> Driving licence</th>
              <th scope="col"> NID </th>
              <th scope="col"> Action </th>
            </tr>
          </thead>
          <tbody>
            {ridersInfo.map(singleRider => (
              <tr key={singleRider._id}>
                <td>
                  <img
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      border: "1px solid green",
                    }}
                    src={singleRider.profilePic}
                    alt="arif"
                  />
                </td>
                <td>{singleRider.fullName}</td>
                <td>{singleRider.email}</td>
                <td>{singleRider.age}</td>
                <td>{singleRider.address}</td>
                <td>{singleRider.phone}</td>
                <td>{singleRider.area}</td>
                <td>{singleRider.carInfo}</td>
                <td>{singleRider.vehicleType}</td>
                <td>
                  <img
                    style={{ width: "80px" }}
                    src={singleRider.drivingLicencePic}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    style={{ width: "80px" }}
                    src={singleRider.nidPic}
                    alt=""
                  />
                </td>
                <td>
                  <button
                    onClick={() => rideUserDelete(singleRider._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* All Driving lesson learner info */}

        <Filter />
        <h3 className="text-center mb-3">All Driving lesson learner info</h3>
        <h3 className="text-center mb-3">Total learner {learnerInfo.length}</h3>

        <table className="table table-striped text-center ">
          <thead className="bg-success">
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col"> Vehicle type</th>
              <th scope="col"> NID </th>
              <th scope="col"> Action </th>
            </tr>
          </thead>
          <tbody>
            {learnerInfo.map(singleLearner => (
              <tr key={singleLearner._id}>
                <td>
                  <img
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      border: "1px solid green",
                    }}
                    src={singleLearner.profilePic}
                    alt="arif"
                  />
                </td>
                <td>{singleLearner.fullName}</td>
                <td>{singleLearner.email}</td>
                <td>{singleLearner.age}</td>
                <td>{singleLearner.address}</td>
                <td>{singleLearner.phone}</td>
                <td>{singleLearner.vehicleType}</td>

                <td>
                  <img
                    style={{ width: "100px" }}
                    src={singleLearner.nidPic}
                    alt="nid"
                  />
                </td>

                <td>
                  <button
                    onClick={() => learnerUserDelete(singleLearner._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
