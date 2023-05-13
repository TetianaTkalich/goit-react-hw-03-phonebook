import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: ''
  }

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    return (
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name<br/>
          <input className={css.input} type="text" value={this.state.name}
            onChange={this.handleInputChange} name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required />
          </label>
          <label className={css.label}>
            <br/>Number<br/>
          <input className={css.input} type="tel" value={this.state.number}
            onChange={this.handleInputChange} name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required/>
          </label>
          <button className={css.button} type="submit">Add contact</button>
        </form>
    );
  }  
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};