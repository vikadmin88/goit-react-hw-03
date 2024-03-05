import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import css from './ContactForm.module.css'


const ContactForm = () => {
  return (
    <div className={css.formWrapper}>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.form}>
          <label className={css.label}>Name
            <Field className={css.field} type="text" name="name"/>
          </label>
          <label className={css.label}>Number
            <Field className={css.field} type="phone" name="number"/>
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm;