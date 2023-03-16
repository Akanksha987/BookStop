import React, { useState } from "react";
import logoImg from "../../images/B.png";
import books from "../../images/cover.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleSubmit = {};
  const handleChange = {};
  return (
    <div className="sign-content">
      <div id="images">
        <img src={logoImg} alt="logo" className="logo-image" />
        <img src={books} alt="cover" className="cover-image" />
      </div>
      <form id="black" onSubmit={handleSubmit}>
        <div id="box">
          <button
            type="button"
            className="flex flex-c"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft size={22} />
            <span className="fs-18 fw-6">Sign In</span>
          </button>
          <h3>Name:</h3>
          <label>
            <input
              placeholder="Name"
              values={inputs.name}
              type="text"
              onChange={handleChange}
            />
          </label>
          <br />
          <h3>Contact Number:</h3>
          <label>
            <input
              placeholder="Contact Number"
              values={inputs.phone}
              type="number"
              onChange={handleChange}
            />
          </label>
          <br />
          <h3>Password:</h3>
          <label>
            <input
              placeholder="Password"
              values={inputs.password}
              type="password"
              onChange={handleChange}
            />
          </label>
          <br />
          <h3>Confirm Password:</h3>
          <label>
            <input
              placeholder="Confirm Password"
              values={inputs.confirmPassword}
              type="password"
              onChange={handleChange}
            />
          </label>
          <br />
          <h3>Email:</h3>
          <label>
            <input
              placeholder="Email"
              values={inputs.email}
              type="email"
              onChange={handleChange}
            />
          </label>
          <br />
          <h3>Education Qualification:</h3>
          <select>
            <option value=""></option>
            <option value="Engineering">Engineering</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Computer Science and Engineering">
              Computer Science and Engineering
            </option>
            <option value="Computer Application and IT">
              Computer Application and IT
            </option>
            <option value="Sciences">Sciences</option>
            <option value="Food Technology">Food Technology</option>
            <option value="Forensic Science">Forensic Science</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Botany">Botany</option>
            <option value="Microbiology">Microbiology</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Zoology">Zoology</option>
            <option value="Mathematics and Statics">
              Mathematics and Statics
            </option>
            <option value="Libraray Science">Libraray Science</option>
            <option value="Nutrition and Dietetics">
              Nutrition and Dietetics
            </option>
            <option value="Management">Management</option>
            <option value="Commerce">Commerce</option>
            <option value="Economics">Economics</option>
            <option value="Hotel Management and Tourism">
              Hotel Management and Tourism
            </option>
            <option value="Architecture">Architecture</option>
            <option value="Planning">Planning</option>
            <option value="Design">Design</option>
            <option value="Fashion Design">Fashion Design</option>
            <option value="Product and Industrial Design">
              Product and Industrial Design
            </option>
            <option value="Multimedia and Animation Design">
              Multimedia and Animation Design
            </option>
            <option value="English and Foriegn Languages">
              English and Foriegn Languages
            </option>
            <option value="Interior and Furniture Design">
              Interior and Furniture Design
            </option>
            <option value="Interaction Design">Interaction Design</option>
            <option value="Journalism and Film Production">
              Journalism and Film Production
            </option>
            <option value="Performing Arts">Performing Arts</option>
            <option value="Fine Arts">Fine Arts</option>
            <option value="Law">Law</option>
            <option value="Pharmaceutical Sciences">
              Pharmaceutical Sciences
            </option>
            <option value="Applied Medical Sciences">
              Applied Medical Sciences
            </option>
            <option value="Physiotherapy">Physiotherapy</option>
            <option value="Ayurvedic Pharmaceutical Sciences">
              Ayurvedic Pharmaceutical Sciences
            </option>
            <option value="MLT/Paramedical Sciences">
              MLT/Paramedical Sciences
            </option>
            <option value="Arts (Humanities)">Arts (Humanities)</option>
            <option value="History">History</option>
            <option value="Psychology">Psychology</option>
            <option value="Sociology">Sociology</option>
            <option value="Political Science">Political Science</option>
            <option value="Public Administration">Public Administration</option>
            <option value="Geography">Geography</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Education">Education</option>
            <option value="Physical Education">Physical Education</option>
          </select>
          <button type="submit" id="submit" className="submit_button">
            SignUp
          </button>
          <p className="signup-form-login-prompt">
            Already have an account?<> </>
            <Link to="/users/login">
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Log in
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
