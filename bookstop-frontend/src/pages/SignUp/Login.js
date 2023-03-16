import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import logoImg from "../../images/B.png";
import books from "../../images/cover.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8)
    .required("Please enter your password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Must contain at least 8 character and a special character"
    ),
});

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (
    values,
    { setSubmitting, setErrors, setStatus, history }
  ) => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User authenticated");
        navigate(`/`);
      } else {
        console.log(data.error);
        setErrors({ password: data.error });
      }
    } catch (err) {
      console.log(err);
      setErrors({ password: "Something went wrong. Please try again." });
    }

    setSubmitting(false);
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
        onSubmit={handleLogin}
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
                  <span className="fs-18 fw-6">Login</span>
                </button>
                <h3>Email:</h3>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-field"
                />
                <ErrorMessage name="email" component="div" />
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit"
                  className="submit_button"
                >
                  Login
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
