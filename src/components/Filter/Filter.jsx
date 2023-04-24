import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
