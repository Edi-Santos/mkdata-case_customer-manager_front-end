import React from 'react';

import Thead from './Thead';
import Tbody from './Tbody';

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
