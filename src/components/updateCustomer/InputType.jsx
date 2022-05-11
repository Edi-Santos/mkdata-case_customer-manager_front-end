import React from 'react';
import PropTypes from 'prop-types';

function InputType({ tipo, onChange }) {
  return (
    <label htmlFor="tipo">
      Tipo:
      <select id="tipo" name="tipo" value={ tipo } onChange={ onChange }>
        <option value="pessoa física">pessoa física</option>
        <option value="pessoa jurídica">pessoa jurídica</option>
      </select>
    </label>
  );
}

InputType.propTypes = {
  tipo: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputType;
