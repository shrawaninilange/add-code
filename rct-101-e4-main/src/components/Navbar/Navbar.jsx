import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to ="/">Home</Link>
        <Link  to ="/products">Products</Link>
        <Link  to ="/login">Login</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">count</div>
        <button data-cy="navbar-login-logout-button">login</button>
      </div>
    </div>
  );
};

export default Navbar;
