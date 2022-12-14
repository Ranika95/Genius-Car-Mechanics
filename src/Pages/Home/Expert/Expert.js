import React from 'react';
import './Expert.css';

const Expert = ({expert}) => {
    const {name,img,expertize} = expert;
    return (
        <div className='expert col-lg-3 col-md-6 col-12'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>{expertize}</h5>
        </div>
    );
};

export default Expert;