import React from 'react';
import PropTypes from 'prop-types';

function InputName({ nome, onChange }) {
  return (
    <label htmlFor="nome">
      Nome:
      <input
        type="text"
        id="nome"
        name="nome"
        value={ nome }
        onChange={ onChange }
      />
    </label>
  );
}

InputName.propTypes = {
  nome: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputName;
