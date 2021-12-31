import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2 className="text-center mt-5 fs-1">Welcome to hero riders</h2>
          <Link to="/">
            <img className="mx-auto d-block" src={logo} alt="" />
          </Link>

          <div className="mx-auto d-block text-center">
            <Link to="/rider">
              <button className="btn btn-danger">Join as rider</button>
            </Link>
            <Link to="/learner">
              {" "}
              <button className="btn btn-success ms-3">
                Join as driving lesson learner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
