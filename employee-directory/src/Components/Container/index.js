import React, { Component } from 'react';
import ApiCall from '../../utils/APIcall';
import Alert from '../Alert';

class Container extends Component {
    state = {
        search: '',
        employees: [],
        filteredEmploy: [],
        sortDirection: 'asc',
        error: '',
    };
    //Getting employee list
    componentDidMount() {
        ApiCall.getEmployeeList()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filterEmploy: res.data.results,
                }))
            .catch((error) => {
                this.setState({ error: error.message });
            });
    }
    handleInput = async (events) => {
        const values = events.target.values;
        await this.setState({ search: values });
        this.filterEmploy(values);
    };

    filterEmploy = (values) => {
        this.setState({
            filteredEmploy: this.state.employees.filter((employee) => {
                return (
                    employee.name.last
                        .toLowerCase()
                        .includes(values.toLowerCase().trim()) ||
                    employee.name.first.toLowerCase().includes(values.toLowerCase().trim())
                );
            }),
        });
        this.errorMessage(this.state.filteredEmploy);
    };

    //If no results are found an error will display

    errorMessage = (values) => {
        if (values.length === 0) {
            let error = 'There are no results found for this search. Please try different filters';
            this.setState({ error: error });
        } else {
            this.setState({ error: '' });
        }
    }

}