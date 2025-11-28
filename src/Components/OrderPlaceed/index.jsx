import EmptyData from "../EmptyData";
import { FaRegCircleCheck } from "react-icons/fa6";
import "./orderplaced.css";
import { useNavigate } from "react-router-dom";

function OrderPlaced() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <>
      <div className="order-placed-container">
        <div className="opicon">
          <FaRegCircleCheck />
        </div>
        <h2 className="opheader">Order Placed</h2>
        <p className="oppara">
          Your order is confirmed.You will receive an order confirmation
          email/SMS shortly with the expected delivery date for your items.
        </p>
        <button className="opbtn" onClick={handleContinue}>
          Continue Shopping
        </button>
      </div>
    </>
  );
}
export default OrderPlaced;
