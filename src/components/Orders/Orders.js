import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import * as ReactBootstrap from 'react-bootstrap';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://afternoon-oasis-56806.herokuapp.com/orders?email=' + loggedInUser.email)
            .then((response) => response.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
    }, [])

    return (


        <div className="container mt-5">
            <h3 className="text-center text-info">YOUR ORDERED PRODUCTS : {orders.length} (with Email, Price and Date)</h3>

            {
                loading ? <ReactBootstrap.Button variant="primary" disabled>
                    <ReactBootstrap.Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                Please Wait for a While
              </ReactBootstrap.Button> :

                    orders.map((order) => <div className="container mt-5">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>{order.email}</td>
                                    <td>{order.price} </td>
                                    <td>{(new Date(order?.lastModifiedDate).toDateString('dd/mm/yyyy'))}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
            }

        </div>
    );
};

export default Orders;