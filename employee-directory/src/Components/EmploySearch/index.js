import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './employSearch.css';

// Function to allow searching for a specific user

function EmploySearch(props) {
    return (
        <form>
            <div className='firstForm'>
                <div className='input-field'>
                    <div className='icon'>
                        <BsSearch />
                    </div>
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name='search'
                        type='text'
                        className='form-control'
                        placeholder='Type here to search for someone'
                        id='search' />
                </div>
            </div>
        </form>
    );
}

export default EmploySearch;