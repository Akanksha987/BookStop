import React from 'react'
import "./SignUp.css";
import { Formik, Form, ErrorMessage,Field } from 'formik';
import * as Yup from 'yup';
const SignUp = () => {
  const initialValues={
    username:'',
    password:'',
    email:'',
    qualification:'',
  }
  const validationSchema=Yup.object().shape({
    username:Yup.string()
    .min(3,'Name should be more than three letters')
    .required('This field is required'),
    email:Yup.string()
    .email('Invalid email')
    .required('This field is required'),
    password:Yup.string()
    .min(7,'Password should not be less than 7 character')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Must contain at least 7 character and a special character")
    .required('This field is required'),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm the password'),
    qualification:Yup.string()
    .min(2,)
    .required("This field is required")
  })
  const onSubmit=(value,{setSubmitting})=>{
    setTimeout(() => {
      console.log(value);
      sessionStorage.setItem('name',value.username)

      setSubmitting(false);
      window.open('http://localhost:3000/', '_self')
    }, 1000);
  };
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      {({isSubmitting})=>{
        <Form>
          <div>
            <div>
              <h1>Username:</h1>
              <Field type="text" name="username" placeholder="Username" className="block"/>
              <ErrorMessage name="username" component="div"/>
              <br/>
              <h1>Email-ID</h1>
              <Field type="email" name="email" placeholder="Email-Id" className="block"/>
              <ErrorMessage name="email" component="div"/>
              <br/>
              <h1>Create Password:</h1>
              <Field type="password" name="password" placeholder="Password" className="block"/>
              <ErrorMessage name='password' component="div"/>
              <br/>
              <h1>Confirm password:</h1>
              <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="block"/>
              <ErrorMessage name='confirmPassword' component="div"/>
              <br/>
              <h1>Education Qualification:</h1>
              <Field as="string" name="qualification" className="block">
                <option value="Engineering" >Engineering</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                <option value="Computer Application and IT">Computer Application and IT</option>
                <option value="Sciences">Sciences</option>
                <option value="Food Technology">Food Technology</option>
                <option value="Forensic Science">Forensic Science</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Botany">Botany</option>
                <option value="Microbiology">Microbiology</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Zoology">Zoology</option>
                <option value="Mathematics and Statics">Mathematics and Statics</option>
                <option value="Libraray Science">Libraray Science</option>
                <option value="Nutrition and Dietetics">Nutrition and Dietetics</option>
                <option value="Management">Management</option>
                <option value="Commerce">Commerce</option>
                <option value="Economics">Economics</option>
                <option value="Hotel Management and Tourism">Hotel Management and Tourism</option>
                <option value="Architecture">Architecture</option>
                <option value="Planning">Planning</option>
                <option value="Design">Design</option>
                <option value="Fashion Design">Fashion Design</option>
                <option value="Product and Industrial Design">Product and Industrial Design</option>
                <option value="Multimedia and Animation Design">Multimedia and Animation Design</option>
                <option value="English and Foriegn Languages">English and Foriegn Languages</option>
                <option value="Interior and Furniture Design">Interior and Furniture Design</option>
                <option value="Interaction Design">Interaction Design</option>
                <option value="Journalism and Film Production">Journalism and Film Production</option>
                <option value="Performing Arts">Performing Arts</option>
                <option value="Fine Arts">Fine Arts</option>
                <option value="Law">Law</option>
                <option value="Pharmaceutical Sciences">Pharmaceutical Sciences</option>
                <option value="Applied Medical Sciences">Applied Medical Sciences</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Ayurvedic Pharmaceutical Sciences">Ayurvedic Pharmaceutical Sciences</option>
                <option value="MLT/Paramedical Sciences">MLT/Paramedical Sciences</option>
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
              </Field>
              <ErrorMessage name='qualification' component="div"/>
              <br/>
              <button type='submit' disabled={isSubmitting} id='button'>Continue</button>
            </div>
          </div>
        </Form>
      }}
    </Formik>
  )
}

export default SignUp
