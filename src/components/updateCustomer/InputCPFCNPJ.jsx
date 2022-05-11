import React from 'react';
import PropTypes from 'prop-types';

function InputCPFCNPJ({ cpfCnpj, onChange }) {
  return (
    <label htmlFor="CPF/CNPJ">
      CPF/CNPJ:
      <input
        type="text"
        id="CPF/CNPJ"
        name="CPF/CNPJ"
        value={ cpfCnpj }
        onChange={ onChange }
      />
    </label>
  );
}

InputCPFCNPJ.propTypes = {
  cpfCnpj: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputCPFCNPJ;
