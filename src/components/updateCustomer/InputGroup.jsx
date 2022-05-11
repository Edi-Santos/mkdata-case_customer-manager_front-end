import React from 'react';
import PropTypes from 'prop-types';

function InputGroup({ grupo, onChange }) {
  return (
    <label htmlFor="grupo">
      Grupo:
      <select id="grupo" name="grupo" value={ grupo } onChange={ onChange }>
        <option value="Médico">Médico</option>
        <option value="Paciete">Paciente</option>
      </select>
    </label>
  );
}

InputGroup.propTypes = {
  grupo: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
