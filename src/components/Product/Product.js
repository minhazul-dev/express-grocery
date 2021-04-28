import React from 'react';
import { useHistory } from 'react-router';

const Product = ({ pd }) => {


  // console.log(pd);

  const { _id } = pd;
  console.log(_id);
  const history = useHistory();

  const showCheckout = (_id) => {
    const url = `/checkout/${_id}`
    history.push(url);
  };

  return (
    <section className="row" style={{backgroundColor:'#e1eedd'}}>
    <div className="container mt-5 col-md-3 m-4 ">

      {/* <img style={{ height: '300px' }} src={event.imageURL} alt="" />
            <h3>{event.name}</h3>
            <h3>Price: {event.price}</h3> */}

      <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
        <img src={pd.imageURL} className="card-img-top" alt="failed to load image" />
        <div className="card-body ">
          <h5 className="card-title">{pd.name}</h5>
          <p className="card-text"> weight: {pd.weight}</p>
          <p className="card-text"> Price: {pd.price}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          <button onClick={() => showCheckout(_id)} type="button" class="btn btn-warning">Buy Now</button>
        </div>
      </div>
     


    </div>
    </section>
  );
};

export default Product;