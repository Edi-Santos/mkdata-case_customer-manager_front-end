import React from 'react';

import Thead from './Thead';
import Tbody from './Tbody';

import injured from '../../images/undraw_injured_9757.svg';
import medicine from '../../images/undraw_medicine_b-1-ol.svg';

import './table.css';

function Table() {
  return (
    <section>
      <img src={ injured } alt="" />
      <table>
        <thead>
          <Thead />
        </thead>
        <tbody>
          <Tbody />
        </tbody>
      </table>
      <img src={ medicine } alt="" />
    </section>
  );
}

export default Table;
