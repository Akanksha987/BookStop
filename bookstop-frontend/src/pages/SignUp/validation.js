const validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required.";
  }
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is Invalid";
  }
  if (!values.password) {
    errors.password = "Password is required.";
  }
  if (values.password !== values.confirmPassword) {
    errors.password = "Password doesn't match";
  } else if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password...";
  }
  if (!values.phone) {
    errors.phone = "Contact Number is required";
  }
  if (!values.qualifications) {
    errors.qualifications = "Qualification is required..";
  }

  return errors;
};

export default validation;
