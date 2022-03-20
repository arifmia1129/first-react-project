import React from 'react';
import Btn from '../Btn/Btn';
import "./Product.css"

const Product = (props) => {
    const { title, description, image } = props.product;
    return (
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className='col-md-4 my-3 '>
            <div className='card'>
                <img id='img' src={image} className='card-img-top' alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 10)}</h5>
                    <p className="card-text">{description.slice(0, 50)}</p>
                    <div className='my-3'>
                        <button onClick={props.increase} className='btn btn-success mx-2'>Add</button>
                        <button className='btn btn-danger mx-2'>Delete</button>

                    </div>
                    <Btn product={props.product}></Btn>
                </div>
            </div>
        </div >
    );
};

export default Product;