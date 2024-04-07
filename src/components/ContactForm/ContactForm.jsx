import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("This field is required"),
});

export default function ContactForm({ onAddContact }) {
  const contactNameId = nanoid();
  const contactNumberId = nanoid();

  return (
    <Formik
      initialValues={{ contactName: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAddContact({
          id: nanoid(),
          name: values.contactName,
          number: values.number,
        });

        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <div className={css.inputContainer}>
          <label htmlFor={contactNameId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="contactName"
            id={contactNameId}
            className={css.contactInput}
          />
          <ErrorMessage
            name="contactName"
            className={css.error}
            component="p"
          />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor={contactNumberId} className={css.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id={contactNumberId}
            className={css.contactInput}
          />
          <ErrorMessage name="number" className={css.error} component="p" />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
