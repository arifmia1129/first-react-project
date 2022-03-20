import React from 'react';
import "./Menubar.css"
const Menubar = () => {
    return (
        <div className='row my-3 container'>
            <div className='col-md-4'>
                <h4>Fake Store</h4>
            </div>
            <div className="col-md-8 d-flex justify-content-end align-item-center">
                <a href="/home">Home</a>
                <a href="/cart">Cart</a>
                <a href="/about-us">About Us</a>
                <a href="/account">Log in</a>
            </div>
        </div>
    );
};

export default Menubar;