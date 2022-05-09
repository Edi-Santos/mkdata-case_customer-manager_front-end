import React from 'react';

import Thead from './Thead';
import Tbody from './Tbody';

import './table.css';

function Table() {
  return (
    <table>
      <thead>
        <Thead />
      </thead>
      <tbody>
        <Tbody />
      </tbody>
    </table>
  );
}

export default Table;
