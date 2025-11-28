import { useDispatch, useSelector } from "react-redux";
import HProductCard from "../../Components/HProductCard";
import "./cart.css";
import EmptyData from "../../Components/EmptyData";
import { setCart, setOrders } from "../../redux/Slice/productSlice";
import toast, { Toaster } from "react-hot-toast";
import Address from "../../Components/Address";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.product.cart);
  const [showNewComponent, setShowNewComponent] = useState(false);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <EmptyData />;
  }

  // const handleProceed = () => {
  // console.log("hi");
  // setShowNewComponent(true);

  // {
  //   showNewComponent && <Address />;
  // }
  // return <Address />;

  // dispatch(setOrders(cart));
  // dispatch(setCart([]));
  // toast.success("Order successful!");
  // };

  return (
    <div className="cart_container">
      <div className="cart_item_section">
        <div className="cart_delivery_service">
          <span>Check delivery time & service</span>
          <button>Enter Pin Code</button>
        </div>
        <div className="cart_items">
          <span>{cart.length} Items Selected</span>
          <div className="cart_item_container">
            {cart.map((item, index) => {
              return <HProductCard data={item} key={index} type={"cart"} />;
            })}
          </div>
        </div>
      </div>
      <div className="cart_bill_section">
        <div className="cart_bill_coupon">
          <span>Apply Coupon</span>
          <button>APPLY</button>
        </div>
        <div className="cart_bill">
          <span>PRICE DETAILS ({cart.length})</span>
          <table>
            <tr>
              <td>Total MRP</td>
              <td>₹ {getTotalAmount(cart)}</td>
            </tr>
            <tr>
              <td>Platform free</td>
              <td>₹ 0</td>
            </tr>
            <tr>
              <td>Shipping free</td>
              <td>₹ 0</td>
            </tr>
            <tr className="total_amount">
              <td>Total Amount</td>
              <td>₹ {getTotalAmount(cart)}</td>
            </tr>
          </table>
          <button
            onClick={() => {
              navigate("/address");
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;

function getTotalAmount(list) {
  return list.reduce((a, b) => {
    return a + Number(b.price) * Number(b.qty);
  }, 0);
}
