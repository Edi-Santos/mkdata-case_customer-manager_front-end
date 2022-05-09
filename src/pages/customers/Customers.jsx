import React, { useEffect, useState } from 'react';

import Table from '../../components/customers/Table';
import Loading from '../loading/Loading';

function Customers() {
  const [isLoading, setIsloading] = useState(true);

  const milliseconds = 2000;

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, milliseconds);
  });

  return (
    <div>
      { isLoading && <Loading /> }
      { !isLoading && <Table /> }
    </div>
  );
}

export default Customers;
