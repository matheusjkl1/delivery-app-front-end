import React, { useContext } from 'react';
import { string, number, shape } from 'prop-types';
import AppContext from '../hooks/context';

function OrderProducts({ data }) {
  const { name, index, quantity, price, role } = data;
  const { user } = useContext(AppContext);
  console.log(user);
  console.log(quantity);

  const createSpan = (dataTestId, value) => (
    <span
      data-testid={ `${role}_order_details__element-order-table-${dataTestId}` }
    >
      {' '}
      {value}
    </span>
  );

  const itemNumber = (indexNumber) => {
    indexNumber += 1;
    return indexNumber;
  };

  return (
    <section className="box">
      <main className="box">
        { createSpan('item-number', itemNumber(index)) }
        { createSpan(`name-${index}`, name) }
        { createSpan(`quantity-${index}`, quantity) }
        { createSpan(`unit-price-${index}`, price) }
        { createSpan(`sub-total-${index}`, price) }
      </main>
    </section>
  );
}

OrderProducts.propTypes = {
  data: shape({
    name: string.isRequired,
    role: string.isRequired,
    price: number.isRequired,
    quantity: number.isRequired,
    index: number.isRequired,
  }).isRequired,
};

export default OrderProducts;
