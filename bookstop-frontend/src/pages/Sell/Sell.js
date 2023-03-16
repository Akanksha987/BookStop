import * as Yup from "yup";
import "./Sell.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Navbar from "../../components/Navbar/Navbar";
const Sell = () => {
  const initialValues = {
    bookname: "",
    author: "",
    edition: "",
    course: "",
    year: "",
    description: "",
    image: null,
  };

  const validationSchema = Yup.object().shape({
    bookname: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must be at most 30 characters")
      .required("Please enter your name"),
    edition: Yup.number()
      .positive()
      .min(4, "Digit should not be less than 4")
      // .max(4, "Digit should not exceed more than 4")
      .required("This field is required"),
    author: Yup.string().required("This field is required"),
    course: Yup.string().required("This field is required"),
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

  // const onSubmit = (values, { setSubmitting }) => {
  //   setTimeout(() => {
  //     console.log(values);
  //     sessionStorage.setItem("name", values.name);

  //     setSubmitting(false);
  //     window.open("http://localhost:3000/", "_self");
  //   }, 1000);
  // };

  return (
    <div className="content">
      <div>
        <Navbar />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          // onSubmit={onSubmit}
          onSubmit={(values, { setSubmitting }) => {
            // add authentication logic here
            console.log(values);
            setSubmitting(false);
          }}
          className="box"
        >
          {({ isSubmitting }) => (
            <Form className="black">
              <div className="box">
                <div className="fun">
                  <h3>Book Name:</h3>
                  <Field type="text" name="bookname" className="block" />
                  <ErrorMessage name="bookname" component="div" />
                  <br />
                  <h3>Edition:</h3>
                  <Field type="number" name="edition" className="block" />
                  <ErrorMessage name="edition" component="div" />
                  <br />
                  <h3>Author:</h3>
                  <Field type="text" name="author" className="block" />
                  <ErrorMessage name="author" component="div" />
                  <br />
                  <h3>Course Associated:</h3>
                  <Field
                    type="text"
                    name="course"
                    className="block"
                    placeholder=""
                  />
                  <ErrorMessage name="course" component="div" />
                  <br />
                  <h3>Year:</h3>
                  <Field type="number" name="year" className="block" />
                  <ErrorMessage name="year" component="div" />
                  <br />
                  <h3>Description(optional)</h3>
                  <Field
                    type="text"
                    name="desription"
                    placeholder="Please type the description of the book"
                    className="description block"
                  />
                  <ErrorMessage name="description" component="div" />
                  <br />
                </div>
                <div id="image">
                  <h3>Photograph</h3>
                  <Field type="file" name="image" className="photograph" />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit"
                className="submit_button"
              >
                Upload
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Sell;
