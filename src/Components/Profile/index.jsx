import { useNavigate } from "react-router-dom";
import "./profile.css";

function Profile({ isOpen, close }) {
  const navigate = useNavigate();
  console.log("hello");
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="p-container" onClick={close}>
        <h3>Welcome</h3>
        <p> To access account and manage orders you have to</p>
        <button
          className="lbtn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <p> New user? Don't worry, first</p>
        <button
          className="sbtn"
          onClick={() => {
            navigate("/signup");
          }}
        >
          {" "}
          Signup
        </button>
        <div className="underline"></div>
        <ul>
          <li
            onClick={() => {
              navigate("/orders");
            }}
          >
            Orders
          </li>
          <li
            onClick={() => {
              navigate("/wishList");
            }}
          >
            Wislist
          </li>
          <li>Gift Cards</li>
          <li>Contact Us</li>
          <li>Myntra Credit</li>
          <li>Coupons</li>
        </ul>
      </div>
    </>
  );
}
export default Profile;
