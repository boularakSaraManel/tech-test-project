import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "employee", // Default role
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      error.name = "Name is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 8) {
      error.password = "Password must be more than 8 characters";
    }
    if (!values.password_confirmation) {
      error.password_confirmation = "Confirm Password is required";
    } else if (values.password_confirmation !== values.password) {
      error.password_confirmation = "Confirm password and password should be the same";
    }
    if (!values.role) {
      error.role = "Role is required";
    } else if (!["admin", "employee"].includes(values.role)) {
      error.role = "Role must be either admin or employee";
    }
    return error;
  };

  const signupHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (isSubmit) {
      axios.post("http://localhost:8000/api/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login", { replace: true });
      }).catch(err => {
        setFormErrors({ apiError: err.response.data.message });
      });
      setIsSubmit(false);
    }
  }, [isSubmit]);

  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <h1>Create your account</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={changeHandler}
            value={user.name}
          />
          <p className={basestyle.error}>{formErrors.name}</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
          <p className={basestyle.error}>{formErrors.email}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className={basestyle.error}>{formErrors.password}</p>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.password_confirmation}
          />
          <p className={basestyle.error}>{formErrors.password_confirmation}</p>
          <select name="role" onChange={changeHandler} value={user.role}>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
          <p className={basestyle.error}>{formErrors.role}</p>
          <button className={basestyle.button_common} onClick={signupHandler}>
            Register
          </button>
          {formErrors.apiError && <p className={basestyle.error}>{formErrors.apiError}</p>}
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
    </>
  );
};

export default Register;
