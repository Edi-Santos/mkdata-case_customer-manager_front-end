import React, { useEffect, useState } from 'react';

import Main from '../../components/customerDetails/Main';
import Loading from '../loading/Loading';

function CustomerDetails() {
  const [isLoading, setIsLoading] = useState(true);

  const milliseconds = 2000;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, milliseconds);
  }, []);

  return (
    <div>
      { isLoading && <Loading /> }
      { !isLoading && <Main /> }
    </div>
  );
}

export default CustomerDetails;
