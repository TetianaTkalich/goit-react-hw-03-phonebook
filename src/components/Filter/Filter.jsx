import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({value, onChange}) {
  return (
    <div className={css.filter}>
      <label className={css.label}>
        Find contacts by name<br/>
        <input className={css.input} value={value} onChange={onChange} type="text" />
      </label>
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};