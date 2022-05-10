import React from 'react';

import Details from './Details';
import BackToCustomers from './BackToCustomers';
import UpdateCustomer from './UpdateCustomer';

function Main() {
  return (
    <main>
      <Details />
      <div>
        <UpdateCustomer />
      </div>
      <BackToCustomers />
    </main>
  );
}

export default Main;
