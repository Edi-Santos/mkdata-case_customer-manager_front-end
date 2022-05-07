import React from 'react';
import PropTypes from 'prop-types';

function InputName({ name, onChange }) {
  return (
    <label htmlFor="name">
      Nome
      <input
        type="text"
        id="name"
        name="name"
        value={ name }
        onChange={ onChange }
        placeholder="Digite seu nome..."
      />
    </label>
  );
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputName;
