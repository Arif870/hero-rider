import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../CheckoutForm/Checkout";

const stripePromise = loadStripe(
  "pk_test_51KDAorCNJ2ZNcBxr3OmMoLru9lZm9YkcyEZhOqoU78OfPwGV70mVN7qFnEi2W4CpmSHrFE80SsPn17iHddqeWw3c00htNZrju0"
);

const Payment = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </>
  );
};

export default Payment;
