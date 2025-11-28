import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="logins">
        <div className="container">
          <div className="login-img"></div>
          <div class="login-box">
            <div className="header">
              <h3>Login</h3>
            </div>
            <div className="form-section">
              <input
                type="email"
                class="email ele"
                placeholder="Enter your email"
              />
              <input
                type="password"
                class="password ele"
                placeholder="password"
              />
              <button
                class="clkbtn"
                onClick={() => {
                  navigate("/");
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
export default Login;
