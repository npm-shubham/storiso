import { useState } from "react";
import "./login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    console.log('toggle btn clicked')
  };

  const loginButtonClicked = () => {
    console.log('Login button clicked');
  }

  const registerButtonClicked = () => {
    console.log('Register Button clicked')
  }

  return (
    <div className="login-container">
      <div className="side">
        <div className="header">
          <div className="title">{isLogin ? "Login Here" : "Register Here"}</div>
          <div className="subtitle">Subtitle goes here</div>
          <div className="clickable-btn">
            {isLogin ? "Login with Google" : "Register with Google"}
          </div>
          <div className="separator">--------- or -----------</div>
        </div>

        {isLogin ? (
          <>
            <label className="label">Username</label>
            <input className="input" type="text" placeholder="johndoe" required />
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="********"
              required
            />
            <div className="remember-me-container">
              <label>
                <input type="radio" className="remember-me-radio" />
                Remember me
              </label>
            </div>
            <button className="clickable-btn" onClick={loginButtonClicked}>
              Login
            </button>
            <div>
              Don't have an account? <span onClick={toggleForm} style={{ color: 'blue', cursor: 'pointer' }}>Sign-up here</span>
            </div>
          </>
        ) : (
          <>
            <label className="label">Email</label>
            <input className="input" type="email" placeholder="youremail@example.com" required />
            <label className="label">Username</label>
            <input className="input" type="text" placeholder="johndoe" required />
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="********"
              required
            />
            <label className="label">Confirm Password</label>
            <input
              className="input"
              type="password"
              placeholder="********"
              required
            />
            <button className="clickable-btn" onClick={registerButtonClicked}>
              Register
            </button>
            <div>
              Already have an account? <span onClick={toggleForm} style={{ color: 'blue', cursor: 'pointer' }}>Login here</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
