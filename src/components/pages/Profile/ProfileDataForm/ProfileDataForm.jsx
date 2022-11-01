import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {CustomInput, CustomTextarea} from "../../customs/CustomTextarea/CustomTextarea";
import style from "./ProfileDataForm.module.css";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('Name is required'),
  lookingForAJobDescription: Yup.string()
    .required('Field is required')
    .max(100, 'Exceeded maximum number of characters'),
  aboutMe: Yup.string()
    .required('Field is required')
    .max(100, 'Exceeded maximum number of characters')
})

const ProfileDataForm = (props) => {

  const submit = (values, {setSubmitting, setStatus}) => {
    props.onSubmit(values, setStatus);
    setSubmitting(false);
  }

  return (
    <Formik initialValues={props.profile}
            onSubmit={submit}
            validationSchema={validationSchema}>
      {({errors, isSubmitting, isValid, status}) => (
        <Form className={style.form}>
          <label>
            <b>Name:</b>
            <Field as={CustomInput} type="text" name="fullName" placeholder="Name" errors={errors}/>
          </label>
          <label>
            <b>Looking for a job:</b>
            <Field type="checkbox" name="lookingForAJob"/>
          </label>
          <label>
            <b>My professional skills:</b>
            <Field as={CustomTextarea} name="lookingForAJobDescription" placeholder="My professional skills" errors={errors}/>
          </label>
          <label>
            <b>About me:</b>
            <Field as={CustomTextarea} name="aboutMe" placeholder="About me" errors={errors}/>
          </label>
          <div>
            <b>Contacts:</b>
            <ul>
              {Object.keys(props.profile.contacts).map(key => {
                return <li key={key}>
                  <label>
                    <b>{key}:</b>
                    <Field as={CustomInput} type="text" name={"contacts." + key} placeholder={key} errors={errors} />
                  </label>
                </li>
              })}
            </ul>
          </div>
          {status}
          <button type="submit" disabled={isSubmitting || !isValid}>Save changes</button>
        </Form>
      )}
    </Formik>
  )
}

export default ProfileDataForm;