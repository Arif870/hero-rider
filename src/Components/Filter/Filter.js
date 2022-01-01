import React from "react";

export const Filter = () => {
  return (
    <>
      <div className="mt-5">
        <p>Filter</p>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="w-50">
            {" "}
            <input
              className="form-control  mb-3 "
              type="text"
              name="name"
              id=""
              placeholder="search by Fullname"
            />
            <input
              className="form-control mb-3"
              type="number"
              name="phone"
              placeholder="search by Phone"
            />
            <input
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
    </>
  );
};
