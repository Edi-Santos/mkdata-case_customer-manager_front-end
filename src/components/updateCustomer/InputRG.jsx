import React from 'react';
import PropTypes from 'prop-types';

function InputRG({ RG, onChange }) {
  return (
    <label htmlFor="RG">
      RG:
      <input
        type="text"
        id="RG"
        name="RG"
        value={ RG }
        onChange={ onChange }
      />
    </label>
  );
}

InputRG.propTypes = {
  RG: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRG;
