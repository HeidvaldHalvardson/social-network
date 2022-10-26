import React from "react";
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {CustomTextarea} from "../customs/CustomTextarea/CustomTextarea";

const validationSchema = Yup.object({
  message: Yup.string()
    .required(' ')
    .max(100, `Max length is 100 symbols`)
})

const AddMessageForm = (props) => {

  const submit = (values, { setSubmitting, resetForm }) => {
    props.sendMessage(values.message);
    resetForm({values: ''})
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{ message: '' }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      onSubmit={submit}
    >
      {({ isSubmitting, errors, isValid}) => (
        <Form>
          <div>
            <Field as={CustomTextarea} name="message" placeholder="Enter your message" errors={errors} />
          </div>
          <button type="submit" disabled={isSubmitting || !isValid}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  )
}



const Dialogs = (props) => {

  const dialogsElement = props.dialogsData.map( item => <DialogsItem href={item.id} key={item.id}>{item.name}</DialogsItem> );
  const messageElement = props.messagesData.map( item => <Message key={item.id}>{item.message}</Message>);

  return (
    <div className={style.dialogs}>
      <ul className={style.dialogsList}>
        {dialogsElement}
      </ul>
      <ul className={style.messagesList}>
        {messageElement}
        <AddMessageForm sendMessage={props.sendMessage}/>
      </ul>
      <div>


      </div>
    </div>
  )
}

export default Dialogs;