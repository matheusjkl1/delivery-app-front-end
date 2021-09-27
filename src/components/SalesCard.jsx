import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { string, number, shape } from 'prop-types';
import 'bulma/css/bulma.css';

function SalesCard({ sale, role }) {
  const {
    deliveryNumber,
    deliveryAddress,
    status,
    saleDate,
    id,
    totalPrice,
    index,
  } = sale;

  const maxLenghPad = 4;

  return (
    <div className="box">
      <li
        key={ index }
      >
        <div className="notification is-warning is-light box">
          <Link
            to={ `/${role}/orders/${id}` }
          >
            <h4
              data-testid={ `${role}_orders__element-order-id-${id}` }
            >
              { `Pedido ${id.toString().padStart(maxLenghPad, '0')}` }
            </h4>
          </Link>
        </div>
        <div className="notification is-link is-light">
          <Link
            to={ `/${role}/orders/${id}` }
          >
            <h4
              data-testid={ `${role}_orders__element-delivery-status-${id}` }
            >
              { `Status de envio: ${status}` }
            </h4>
          </Link>
        </div>
        <div className="notification is-warning is-light">
          <h4
            data-testid={ `${role}_orders__element-order-date-${id}` }
          >
            { `Data do Pedido: ${format(new Date(saleDate), 'dd/MM/yyyy')}` }
          </h4>
          <h4
            data-testid={ `${role}_orders__element-card-address-${id}` }
          >
            { `Endereço de entrega: ${deliveryAddress}, ${deliveryNumber}`}
          </h4>
          <h4
            data-testid={ `${role}_orders__element-card-price-${id}` }
          >
            { `Valor do Pedido: R$ ${totalPrice.replace(/\./ig, ',')}` }
          </h4>
        </div>
      </li>
    </div>
  );
}

SalesCard.propTypes = {
  sale: shape({
    deliveryNumber: number.isRequired,
    status: string.isRequired,
    saleDate: string.isRequired,
    id: number.isRequired,
    index: number.isRequired,
  }).isRequired,
  role: string.isRequired,
};

export default SalesCard;
