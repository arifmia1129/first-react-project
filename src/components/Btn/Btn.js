import React from 'react';

const Btn = (props) => {
    console.log(props);
    return (
        <div>
            <button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">
                Details
            </button>

            <div className='modal fade' id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id="exampleModalLabel">{props.product.title}</h5>
                            <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div >
                        <div className='modal-body'>
                            {props.product.description}
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className='btn btn-secondary' data-bs-dismiss="modal">Close</button>
                            <button type="button" className='btn btn-primary'> Save changes</button >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Btn;