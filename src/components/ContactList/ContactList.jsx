import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ElementContacts } from 'components/ElementContacts/ElementContacts';

export function ContactList({contacts, onDeleteContact}) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (<li key={contact.id}>
        <ElementContacts contacts={contact} onDeleteContact={onDeleteContact} />
      </li>))}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};