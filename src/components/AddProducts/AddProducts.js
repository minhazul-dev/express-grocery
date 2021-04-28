import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {
        // console.log(productData)
        const productData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageUrl
        }
        const url = `https://afternoon-oasis-56806.herokuapp.com/addProduct`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(response => console.log('server side response', response))

    };
     const alertMessage = ()=>{
        alert('Product Added successfully')
 }

    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '633d8da92681163c0905cbf3189aeaa0');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',

            imageData)
            .then(function (response) {

                setImageUrl(response.data.data.display_url);
                if(response){
                   console.log(response);

                }

            })

            .catch(function (error) {
                console.log(error);
            });
           
        
    }

    return (

        <div className="row">
            <div className="col-md-6 mt-5">
                <div className="form-section p-5 " style={{ backgroundColor: '#96b0bc' }} >
                    <h4 className="text-center mt-4 text-white">Here you can add and manage products</h4>
                    <div className="container mt-5">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" defaultValue="name" ref={register} className="form-control mb-3" />

                            <input name="weight" defaultValue="Weight" ref={register} className="form-control mb-3" />
                            <input name="price" defaultValue="price" ref={register} className="form-control mb-3" />
                            <input type="file" onChange={handleImageUpload} className="form-control mb-3 mb-4" />
                            <button onClick={alertMessage} type="button" class="btn btn-success">Add Product</button>
                        </form>
                    </div>

                    <Link to="/manage">
                        <button type="button" class="btn btn-outline-primary mt-5 bg-primary text-white">Manage Products</button>
                    </Link>

                </div>

            </div>
            <div className="col-md-6">

            </div>

        </div>

    );
};

export default AddProducts;