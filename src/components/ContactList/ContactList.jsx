import css from './ContactList.module.css'
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact}) => {
    return (
        <ul className={css.list}>{contacts.map((contact) => (
          
            <li key={contact.id} className={css.item}>
                <Contact id={contact.id} name={contact.name} number={contact.number} onDeleteContact={onDeleteContact} />
            </li>))}
        </ul>  
    )
 }
export default ContactList