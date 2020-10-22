import React, { FC } from 'react';
import LoaderAnimation from '../Loader.svg';
import './css/Loader.css';

const Loader: FC = () => {
    return (
        <div className='Loader'>
            <h4 className='text-center'>This could take 15-20 seconds</h4>
            <img src={LoaderAnimation} alt='Loading...' />
        </div>
    );
};

export default Loader;
