import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({
  contact: { id, name, number },
  onRemoveContact,
}) {
  return (
    <li id={id} className={css.contactContainer}>
      <div>
        <div className={css.contactDetailsContainer}>
          <FaUser />
          <p className={css.contactDetails}>{name}</p>
        </div>
        <div className={css.contactDetailsContainer}>
          <FaPhone />
          <p className={css.contactDetails}>{number}</p>
        </div>
      </div>
      <button onClick={() => onRemoveContact(id)}>Delete</button>
    </li>
  );
}
