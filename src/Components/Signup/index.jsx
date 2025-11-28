import "./signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <div className="signups">
        <div className="scontainer">
          <div className="login-img"></div>
          <div class="signup-box">
            <div className="sheader">
              <h3>Signup</h3>
            </div>
            <div className="sform-section">
              <input
                type="text"
                class="name sele"
                placeholder="Enter your Name"
              ></input>
              <input
                type="email"
                class="email sele"
                placeholder="Enter your email"
              />
              <input
                type="password"
                class="password sele"
                placeholder="password"
              />
              <input
                type="password"
                class="password sele"
                placeholder="Confirm password"
              ></input>
              <button
                class="sclkbtn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
