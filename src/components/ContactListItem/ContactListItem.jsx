import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
