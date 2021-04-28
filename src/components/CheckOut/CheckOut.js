import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {

    const { _id } = useParams()
    const [details, setDetails] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        const url = `https://afternoon-oasis-56806.herokuapp.com/products`
        fetch(url)
            .then(response => response.json())
            .then((data) => setDetails(data))
    }, [])
    const allDetails = details.find((detail) => _id == detail._id);
    console.log(allDetails);
    const handleOrders = (e) => {
        let date = new Date()
        const totalProduct = { name: e.name, price: e.price, lastModifiedDate: date }
        console.log(totalProduct);
        const newOrders = { ...loggedInUser, ...totalProduct };
        fetch('https://afternoon-oasis-56806.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrders)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('order placed successfully')
                }
                // console.log(data)
            })

    }
    return (
        <div>
            <h3>this is checkout</h3>
            <div className="container mt-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col"> Product Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{allDetails?.name}</td>
                            <td>{allDetails?.weight}</td>
                            <td> {allDetails?.price}</td>
                        </tr>

                    </tbody>

                </table>
                <hr></hr>
                <button onClick={() => handleOrders(allDetails)} type="button" class="btn btn-secondary float-right">Place Order</button>


            </div>


        </div>
    );
};

export default CheckOut;