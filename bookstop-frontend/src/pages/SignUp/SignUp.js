import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import logoImg from "../../images/B.png";
import books from "../../images/cover.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    qualification: "",
  };
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must be at most 30 characters")
      .required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    phone: Yup.string()
      .min(10)
      .max(10)
      .matches(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
        "Phone numbers only contain numbers not string"
      )
      .required("This field is required"),
    password: Yup.string()
      .min(8)
      .required("Please enter your password")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Must contain at least 8 character and a special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm the password"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      sessionStorage.setItem("name", values.name);

      setSubmitting(false);
      window.open("http://localhost:3000/", "_self");
    }, 1000);
  };
  return (
    <div className="sign-content">
      <div id="images">
        <img src={logoImg} alt="logo" className="logo-image" />
        <img src={books} alt="cover" className="cover-image" />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form id="black">
            <div id="box">
              <div>
                <button
                  type="button"
                  className="flex flex-c"
                  onClick={() => navigate("/")}
                >
                  <FaArrowLeft size={22} />
                  <span className="fs-18 fw-6">Sign In</span>
                </button>
                <h3>Name:</h3>
                <Field
                  type="text"
                  name="name"
                  placeholder=" Name"
                  className="input-field"
                />
                <ErrorMessage name="name" component="div" />
                <br />
                <h3>Email:</h3>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-field"
                />
                <ErrorMessage name="email" component="div" />
                <br />
                <h3>Contact Number:</h3>
                <Field
                  type="text"
                  name="phone"
                  className="input-field"
                  placeholder="Contact Number"
                />
                <ErrorMessage name="phone" component="div" />
                <br />
                <h3>Password:</h3>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password "
                  className="input-field"
                />
                <ErrorMessage name="password" component="div" />
                <br />
                <h3>Confirm Password:</h3>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input-field"
                />
                <ErrorMessage name="confirmPassword" component="div" />
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
                  <option value="Public Administration">
                    Public Administration
                  </option>
                  <option value="Geography">Geography</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="Education">Education</option>
                  <option value="Physical Education">Physical Education</option>
                </select>
                <ErrorMessage name="qualification" component="div" />
                <br />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit"
                  className="submit_button"
                >
                  Sign In
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
