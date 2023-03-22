import React, { useState } from "react";
import validation from "./validation";
import logoImg from "../../images/B.png";
import books from "../../images/cover.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
const SignUp = () => {
  const history = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values);
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:8000/api/signup", {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        phone: values.phone,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    // send http request
    sendRequest().then(() => {
      history("/users/login");
    });
  };
  return (
    <div className="sign-content">
      <div id="images">
        <img src={logoImg} alt="logo" className="logo-image" />
        <img src={books} alt="cover" className="cover-image" />
      </div>
      <div id="box">
        <form id="black">
          <button
            type="button"
            className="flex flex-c"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft size={22} />
            <span className="fs-18 fw-6">Sign In</span>
          </button>
          <label>
            Name
            <input
              className="input-field"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </label>
          <label>
            Email
            <input
              className="input-field"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </label>
          <label>
            Password
            <input
              className="input-field"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </label>
          <label>
            Confirm Password
            <input
              className="input-field"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </label>
          <label>
            Contact Number
            <input
              className="input-field"
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </label>
          <button onClick={handleFormSubmit} className="button">
            SignUp
          </button>
          <p>
            Already have an account? Then{" "}
            <Link to="/users/login" className="link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
