import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import * as ReactBootstrap from 'react-bootstrap';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://afternoon-oasis-56806.herokuapp.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })

  }, [])
  return (
    <section>
      <h3 className="text-center mt-5 text-info fs-1 fw-bolder">Welcome To Express Grocery</h3>

      <div className="container mt-5 row">
        {
          loading ? <ReactBootstrap.Button variant="primary" disabled>
            <ReactBootstrap.Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
                Please Wait For A While
            </ReactBootstrap.Button> : products.map(pd => <Product pd={pd}></Product>)
        }

      </div>
    </section>
  );
};

export default Home;