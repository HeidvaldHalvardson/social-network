import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {CustomInput} from "../customs/CustomTextarea/CustomTextarea"
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Navigate} from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Password can only contain Latin letters and numbers')
    .required('Password is required'),
})

const LoginForm = (props) => {

  const submit = (values,  { setSubmitting, setStatus }) => {
      props.onSubmit(values, setStatus);
      setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({ isSubmitting, errors, isValid, status }) => (
        <Form>
          <div>
            <Field as={CustomInput} type="email" name="email" placeholder="Email" errors={errors}/>
          </div>
          <div>
            <Field as={CustomInput} type="password" name="password" placeholder="Password" errors={errors}/>
          </div>
          <div>
            {props.captchaUrl &&
            <div>
              <img src={props.captchaUrl}  alt=""/>
              <Field as={CustomInput} type="text" name="captcha" placeholder="" errors={errors} />
            </div>}
            {status}
          </div>
          <label>
            <Field type="checkbox" name="rememberMe" />
            <span>remember me</span>
          </label>
          <button type="submit" disabled={isSubmitting || !isValid}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  )
}

const Login = (props) => {
  const onSubmit = (formData, setStatus) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha , setStatus)
  }
  if (props.isAuth) {
    return <Navigate to="/profile" />
  }
  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </>
  )
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);