import React, { useState } from "react";
import "../authentication/login.css";
import axios from "axios";
import { useHistory,Link } from 'react-router-dom';
import LogingNavbar from '../../components/loginNavBar'
const Login = ({ showSignupForm, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user/login', { email, password })
      .then((response) => {
        console.log("###############")
        const { email, name,role,token } = response.data;
        if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
        }
        if (localStorage.getItem('name')) {
          localStorage.removeItem('name');
        }
        if (localStorage.getItem('role')) {
            localStorage.removeItem('role');
          }
          if (localStorage.getItem('email')) {
            localStorage.removeItem('email');
          }
        localStorage.setItem('email', email);
        localStorage.setItem('token', token);
        localStorage.setItem('name', name);
        localStorage.setItem('role', role);
        history.push('/home');
               
      })
      .catch((error) => {

        alert("Incorrect email or password");
      });
    };

  return (
    <><LogingNavbar /><>
          <div className="login-container">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={handleEmailChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={handlePasswordChange} />
                  </div>
                  <button type="submit" className="btn btn-success">
                      Login
                  </button>
                  <p className="mt-5">
                      Don't have an account?{" "}
                      <button className="btn btn-primary" onClick={showSignupForm}>
                          Signup
                      </button>
                  </p>
              </form>
          </div>
      </></>
  );
};

const Signup = ({ showLoginForm }) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [PhoneNumber, setPhone] = useState("");
  
  const [signupStatus, setSignupStatus] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlenameChange = (e) => {
    setName(e.target.value);
  };
  const handleroleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user/register', { Email, password,name,role,PhoneNumber })
    .then((response) => {
      const {result} = response.data;
      // Redirect to home page
      //window.location.href = "/home";
      setSignupStatus("created");
      
    })
    .catch((error) => {
      alert("Incorrect email or password");
    });
  };
  const handleBackToLogin = () => {
    history.push('/');
  }
  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handlenameChange}
          />

        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            value={Email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input
            type="tel"
            id="PhoneNumber"
            value={PhoneNumber}
            onChange={handlePhoneChange}
          />

        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={handleroleChange}
            >
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
        <p className="mt-5">
          Already have an account?{" "}
          <button className="btn btn-primary" onClick={showLoginForm}>
            Login
          </button>
        </p>
      </form>
      {signupStatus === "created" && (
        
        <div className="signup-success-popup">
          User created. Waiting for role assign and approval from admin.
        </div>        
      )}
    </div>
  );
};

const LoginSignup = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleShowSignupForm = () => {
    setShowLoginForm(false);
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  return (
    <div className="login-signup-container">
      {showLoginForm ? (
        <Login showSignupForm={handleShowSignupForm} />
      ) : (
        <Signup showLoginForm={handleShowLoginForm} />
      )}
    </div>
  );
};

export default LoginSignup;
