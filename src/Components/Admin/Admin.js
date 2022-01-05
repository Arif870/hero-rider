import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Admin.css";

const Admin = () => {
  const [ridersInfo, setRidersInfo] = useState([]);
  const [learnerInfo, setLearnerInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermlearn, setSearchTermlearn] = useState("");

  //// rider user effect
  useEffect(() => {
    const uri = `https://stormy-bayou-37155.herokuapp.com/rideUser`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setRidersInfo(data));
  }, []);
  /// learner user effect
  useEffect(() => {
    const uri = `https://stormy-bayou-37155.herokuapp.com/learnerUser`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setLearnerInfo(data));
  }, []);
  ///// rider delete
  const rideUserDelete = id => {
    const procced = window.confirm("Are you sure to delete this user ?");
    if (procced) {
      const url = `https://stormy-bayou-37155.herokuapp.com/rideUser/${id}`;
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
      const url = `https://stormy-bayou-37155.herokuapp.com/learnerUser/${id}`;
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

        {/* \\\\\\\\\\\\ Filter ///////////// */}

        <div className="mt-5">
          <p>Filter</p>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="w-50">
              {" "}
              <input
                onChange={e => {
                  setSearchTerm(e.target.value);
                }}
                className="form-control  mb-3 "
                type="text"
                name="name"
                id=""
                placeholder="search by Fullname"
              />
              <input
                onChange={e => {
                  setSearchTerm(e.target.value);
                }}
                className="form-control mb-3"
                type="number"
                name="phone"
                placeholder="search by Phone"
              />
              <input
                onChange={e => {
                  setSearchTerm(e.target.value);
                }}
                className="form-control  mb-5"
                type="email"
                name="email"
                id=""
                placeholder="search by Email"
              />
            </div>

            <div>
              <select className="form-select ">
                <option defaultValue={"Filter by range"}>
                  Filter by age range
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-55">46-55</option>
                <option value="56-65">56-65</option>
                <option value="66-75">66-75</option>
                <option value="76-85">76-85</option>
              </select>
            </div>
          </div>
        </div>

        {/* ************  Filter *********** */}
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
            {ridersInfo
              .filter(val => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.fullName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.email.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(singleRider => (
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

        <div className="mt-5">
          <p>Filter</p>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="w-50">
              {" "}
              <input
                onChange={e => {
                  setSearchTermlearn(e.target.value);
                }}
                className="form-control  mb-3 "
                type="text"
                name="name"
                id=""
                placeholder="search by Fullname"
              />
              <input
                onChange={e => {
                  setSearchTermlearn(e.target.value);
                }}
                className="form-control mb-3"
                type="number"
                name="phone"
                placeholder="search by Phone"
              />
              <input
                onChange={e => {
                  setSearchTermlearn(e.target.value);
                }}
                className="form-control  mb-5"
                type="email"
                name="email"
                id=""
                placeholder="search by Email"
              />
            </div>

            <div>
              <select className="form-select ">
                <option defaultValue={"Filter by range"}>
                  Filter by age range
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-55">46-55</option>
                <option value="56-65">56-65</option>
                <option value="66-75">66-75</option>
                <option value="76-85">76-85</option>
              </select>
            </div>
          </div>
        </div>

        {/* ************  Filter *********** */}
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
            {learnerInfo
              .filter(val => {
                if (searchTermlearn === "") {
                  return val;
                } else if (
                  val.fullName
                    .toLowerCase()
                    .includes(searchTermlearn.toLowerCase()) ||
                  val.phone
                    .toLowerCase()
                    .includes(searchTermlearn.toLowerCase()) ||
                  val.email
                    .toLowerCase()
                    .includes(searchTermlearn.toLowerCase())
                ) {
                  return val;
                }
              })

              .map(singleLearner => (
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
