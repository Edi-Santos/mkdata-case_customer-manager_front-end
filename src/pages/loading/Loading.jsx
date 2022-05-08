import React from 'react';

import nurses from '../../images/undraw_medical_care_movn.svg';

import './loading.css';

function Loading() {
  return (
    <main>
      <img src={ nurses } alt="Ilustração de enfermeiras" />
      <h1>Carregando...</h1>
    </main>
  );
}

export default Loading;
