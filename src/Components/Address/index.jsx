import "./address.css";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setOrders } from "../../redux/Slice/productSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Address() {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    dispatch(setOrders(cart));
    dispatch(setCart([]));
    navigate("/order_confirmation");
  };
  const handleAddAddress = () => {
    toast.success("Address Added successfully");
  };

  return (
    <>
      <div className="address-container">
        <div className="address-box">
          <div className="aheader">
            <h3>Contact Details</h3>
          </div>
          <form>
            <div className="aform-section">
              <input
                type="name"
                class="name aele"
                placeholder="Enter your Name"
                required
              />
              <input
                type="mobile"
                class="mobile aele"
                placeholder="Enter your Mobile No."
                required
              />
            </div>
            <div className="aheader">
              <h3>Address</h3>
            </div>
            <div className="aform-section">
              <input
                type="fAddress"
                class="faddress aele"
                placeholder="Full address"
                required
              />
              <input
                type="pincode"
                class="pincode aele"
                placeholder="Pincode"
                required
              />
              <input
                type="town"
                class="town aele"
                placeholder="Locality/Town"
                required
              />
              <input
                type="district"
                class="district aele"
                placeholder="District"
                required
              />
              <input
                type="statee"
                class="state ele"
                placeholder="State"
                required
              />
            </div>
            <button class="aclkbtn" onClick={handleAddAddress}>
              Add address
            </button>
          </form>
        </div>

        <div className="acart_bill_section">
          <div className="acart_bill_coupon">
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
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
export default Address;

function getTotalAmount(list) {
  return list.reduce((a, b) => {
    return a + Number(b.price) * Number(b.qty);
  }, 0);
}
