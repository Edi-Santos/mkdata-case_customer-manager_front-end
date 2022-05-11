import React, { useEffect, useState } from 'react';

import Loading from '../loading/Loading';
import Form from '../../components/updateCustomer/Form';

function UpdateCustomer() {
  const [isLoading, setIsLoading] = useState(true);

  const milliseconds = 2000;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, milliseconds);
  });

  return (
    <div>
      { isLoading && <Loading /> }
      { !isLoading && <Form /> }
    </div>
  );
}

export default UpdateCustomer;
