import React from 'react';
import './directory.css';

function NavBar() {
    return (
        <div className='row bg-dark text-white'>
            <div className='col'>
                <div className='text-light pt-2'>
                    <h1 className='display-4'>Employee Directory</h1>
                </div>
            </div>
        </div>
    );
}

export default NavBar;