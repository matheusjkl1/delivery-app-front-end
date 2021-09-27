import React from 'react';
import { useHistory, Link } from 'react-router-dom';
// import { string } from 'prop-types';
import './css/navbar.css';

function Navbar() {
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const router = useHistory();

  const handleClick = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <nav className="navbar">
      <div>
        { role === 'seller'
          ? null
          : (
            <a
              data-testid="customer_products__element-navbar-link-products"
              href="/customer/products"
            >
              Produtos
            </a>
          )}
      </div>
      <div>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to={ `/${role}/orders` }
        >
          <a
            data-testid="customer_products__element-navbar-link-orders"
            href={ `/${role}/orders` }
          >
            Meus Pedidos
          </a>
        </Link>
      </div>
      <div data-testid="customer_products__element-navbar-user-full-name">
        <p>
          {name}
        </p>
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleClick }
          // className="button"
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   role: string.isRequired,
// };

export default Navbar;
