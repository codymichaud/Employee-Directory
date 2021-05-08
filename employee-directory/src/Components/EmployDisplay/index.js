import React from 'react';
import './employDisplay.css';

function EmployTable(props) {
    return (
        <table striped className='table'>
            <thead>
                <tr>
                    <th scope='col'>
                        Picture
                    </th>
                    <th scope='col'>
                        <span className='sortable th-inner' onClick={() => props.sortByName('first')}>First&#160;</span>
                    </th>
                    <th scope='col'>
                        <span className='th-inner sortable' onClick={() => props.sortByName('last')}>Last&#160;</span>
                    </th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Phone #</th>
                    <th scope='col'>City</th>
                </tr>
            </thead>
            <tbody>
                {props.state.filteredEmploy.map((employee) => {
                    return (
                        <tr key={employee.id.value}>
                            <td>
                                <img src={employee.picture.thumbnail}
                                    alt={employee.name.last} />
                            </td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.location.city}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default EmployTable;