import React from 'react';
import { Link, useParams } from 'react-router-dom';

function UpdateCustomer() {
  const { id } = useParams();

  return (
    <Link to={ `/customer/${id}/update` }>
      ATUALIZAR
    </Link>
  );
}

export default UpdateCustomer;
