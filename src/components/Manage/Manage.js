import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';


const Manage = () => {

    const [products,setProducts] = useState([]);
    const [loading, setLoading]= useState(true);


    useEffect(() =>{
        fetch('https://afternoon-oasis-56806.herokuapp.com/products')
        .then(response => response.json())
        .then(data => {setProducts(data)
            // console.log(data);
        setLoading(false)})

    },[])
    return (
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
                  </ReactBootstrap.Button> : products.map(pd =><ManageProduct pd={pd}></ManageProduct>)
                  }
          
      </div>
    );
};

export default Manage;