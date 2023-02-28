import * as Yup from "yup";
import "./Sell.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaAlignCenter } from "react-icons/fa";
const Sell = () => {
  const initialValues = {
    name: "",
    email: "",
    contact: "",
    qualification: "",
    year: "",
    description: "",
    image: null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must be at most 30 characters")
      .required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    contact: Yup.string()
      .min(10, "Number should not be less than 10 digits")
      .max(10, "Number should not exceed then 10 digits")
      .required("Please enter your contact number")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Must contain at least 10 character and a special character"
      ),
    qualification: Yup.string().required("This field is required"),
    year: Yup.number()
      .positive()
      .max(6, "Year should not exceed more than 6 years")
      .required("This field is required"),
    description: Yup.string().min(
      100,
      "The description should be more than 100 words"
    ),
    image: Yup.mixed()
      .nullable()
      .required("This field is required")
      .test("size", "File size is too big", (value) => {}),
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="box"
    >
      {({ isSubmitting }) => (
        <Form className="black">
          <div className="box">
            <div className="fun">
              <h3>Name:</h3>
              <Field
                type="text"
                name="name"
                placeholder=" Name.."
                className="block"
              />
              <ErrorMessage name="name" component="div" />
              <br />
              <h3>Email ID:</h3>
              <Field
                type="email"
                name="email"
                placeholder="Email.."
                className="block"
              />
              <ErrorMessage name="email" component="div" />
              <br />
              <h3>Contact Number:</h3>
              <Field
                type="text"
                name="contact"
                placeholder="Contact NUmber.. "
                className="block"
              />
              <ErrorMessage name="contact" component="div" />
              <br />
              <h3>Qualification:</h3>
              <Field
                type="text"
                name="qualification"
                placeholder="Degree Name.."
                className="block"
              />
              <ErrorMessage name="qualification" component="div" />
              <br />
              <h3>Year:</h3>
              <Field
                type="number"
                name="year"
                placeholder="Year.."
                className="block"
              />
              <ErrorMessage name="year" component="div" />
              <br />
              <h3>Description(optional)</h3>
              <Field
                type="text"
                name="desription"
                placeholder=""
                className="block"
              />
              <ErrorMessage name="description" component="div" />
              <br />
              <button type="submit" disabled={isSubmitting} id="submit">
                Continue
              </button>
            </div>
            <div>
              <h3>Photograph</h3>
              <Field type="file" name="image" className="photograph" />
              {/* <ErrorMessage name="image" component="img" /> */}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Sell;
