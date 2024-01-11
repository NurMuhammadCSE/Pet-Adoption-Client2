import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51Ms8LTInvNoQUqg1NQp7Nk7rILNHERCxlZoDFERbwv5JDkSm3093uLnOINvpMXLJ9wDdSQllsOIZM9BuMIYvJXQ5003yTrueSD"
);
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { donationAmount } = location.state || {};
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm donationAmount={donationAmount}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
