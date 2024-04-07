import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onRemoveContact }) {
  const elementsMarkup = contacts.map((contact) => (
    <Contact
      contact={contact}
      key={contact.id}
      onRemoveContact={onRemoveContact}
    />
  ));

  return <ul className={css.list}>{elementsMarkup}</ul>;
}
