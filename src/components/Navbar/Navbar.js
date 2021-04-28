import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <section className="m-4 "> 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" link to="/">Express Grocery</a> */}
          <Link className="nav-link" to="/">Express Grocery</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon " /> */}
            <button class="btn btn-primary" type="button" data-toggle="collapse" 
    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation">
    <span>
        <i class="fas fa-bars"></i>
    </span>
</button>
          
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Features</a> */}
                <Link className="nav-link text-white" to="/addProducts">Admin</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Pricing</a> */}
                <Link className="nav-link text-white" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </section>

    );
};

export default Navbar;