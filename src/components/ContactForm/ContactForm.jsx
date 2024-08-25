import css from './ContactForm.module.css'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as Yup from "yup";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const ContactValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
  userNumber: Yup.string()
    .matches(
      phoneRegExp,
      "The phone number must match the format 'xxx-xx-xx'"
    )
    .required("Required"),
});

const initialValues = {
    userName: "",
    userNumber: ""
};
const ContactForm = ({onAddContact}) => {
    const handleSubmit = (values, actions) => {
    
    const contactObject = {
     name: values.userName,
     number: values.userNumber,
    };

    onAddContact(contactObject);

    console.log(values);
    actions.resetForm();
  };
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactValidationSchema}>
                <Form className={css.form}>
                    <label className={css.label}>Name
                <Field type="text" name="userName" className={css.input} placeholder="Name" />
                <ErrorMessage
            className={css.errorText}
            name="userName"
            component="span"
                    />
                    </label>
                    <label className={css.label}>Number
                            <Field type="tel" name="userNumber" className={css.input} placeholder="XXX-XX-XX" />
                            <ErrorMessage
            className={css.errorText}
            name="userNumber"
            component="span"
                    />
                    </label>
                    <button type='submit' className={css.button}>Add contact</button>
                </Form>
        </Formik>
    )
}
export default ContactForm