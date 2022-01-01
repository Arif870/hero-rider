import React from "react";
import logo from "../../images/logo.png";
import Payment from "../Payment/Payment";

const PayforCar = () => {
  return (
    <div className="mt-5">
      <img
        style={{ width: "300px" }}
        className="mx-auto d-block"
        src={logo}
        alt=""
      />
      <p className="fs-3 text-center">Pay for learn driving</p>
      <div className="w-50 mx-auto">
        <Payment />
      </div>
    </div>
  );
};

export default PayforCar;
