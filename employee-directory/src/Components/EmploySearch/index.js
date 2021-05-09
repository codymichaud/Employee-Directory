import React from 'react';
import './employSearch.css';

// Function to allow searching for a specific user

function EmploySearch(props) {
    return (
        <form>
            <div className='firstForm'>
                <div className='inputField'>

                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name='search'
                        type='text'
                        className='form-control'
                        placeholder='Employee Search....'
                        id='search' />
                </div>
            </div>
        </form>
    );
}

export default EmploySearch;