import React from 'react';
import notfound from '../../images/404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%'}} src={notfound} alt="" />
            <Link to='/'><button className='btn btn-warning'>Go Back</button></Link>
        </div>
    );
};

export default NotFound;