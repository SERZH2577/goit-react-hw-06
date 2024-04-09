import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redux/contactsSlice";
import { getFilters } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

console.log(getContacts);

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  console.log(contacts);
  console.log(filter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filterContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
