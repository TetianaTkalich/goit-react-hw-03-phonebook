import PropTypes from 'prop-types';
import css from './ElementContacts.module.css';

export function ElementContacts({contacts, onDeleteContact}) {
  return (
    <p className={css.element}>
      <span className={css.name}>{contacts.name}:</span>
      <span className={css.tel}>{contacts.number}</span>
      <button type='button' className={css.btnDelete} onClick={() => onDeleteContact(contacts.id)}>Delete</button>
    </p>
  )
}

ElementContacts.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};