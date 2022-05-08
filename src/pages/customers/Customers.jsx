import React, { useEffect, useState } from 'react';
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
      { !isLoading && <h1>meu pastel é mais barato</h1> }
    </div>
  );
}

export default Customers;
