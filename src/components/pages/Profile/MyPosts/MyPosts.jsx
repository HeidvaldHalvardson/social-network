import React from "react";
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {CustomTextarea} from "../../customs/CustomTextarea/CustomTextarea";

const validationSchema = Yup.object({
  newPost: Yup.string()
    .required('Field is required')
    .max(100, `Max length is 100 symbols`)
})

const AddPostForm = (props) => {

  const submit = (values, {setSubmitting, resetForm}) => {
    props.addPost(values.newPost);
    resetForm({values: ''})
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{newPost: ''}}
      onSubmit={submit}
      validateOnBlur={false}
      validationSchema={validationSchema}
    >
      {({isSubmitting, errors, isValid}) => (

        <Form>
          <div>
            <Field as={CustomTextarea} name="newPost" placeholder="Enter your post" errors={errors}/>
          </div>
          <button type="submit" disabled={(isSubmitting || !isValid)}>
            Add post
          </button>
        </Form>
      )}
    </Formik>
  )
}

const MyPosts = React.memo((props) => {
  const postElement =
    [...props.postData]
      .reverse()
      .map(item => <Post>{item.message}</Post>)

  return (
    <>
      <h3>My posts</h3>
      <div>
        <AddPostForm addPost={props.addPost}/>
        <ul>
          {postElement}
        </ul>
      </div>
    </>
  )
})

export default MyPosts;