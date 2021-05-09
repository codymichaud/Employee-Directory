import React, { Component } from 'react';
import ApiCall from '../../utils/APIcall';
import Alerts from '../Alerts';
import EmploySearch from '../EmploySearch';
import EmployTable from '../EmployDisplay';

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
                    filteredEmploy: res.data.results,
                }))
            .catch((error) => {
                this.setState({ error: error.message });
            });
    }
    handleInputChange = async (events) => {
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
    };
    //Allows names to be sorted by first or last name
    sortByName = (key) => {
        let sortNameList;
        let direction;

        switch (key) {
            case 'last':
                if (this.state.sortDirection === 'asc') {
                    sortNameList = this.state.filteredEmploy.sort((x, y) =>
                        x.name.last > y.name.last ? 1 : -1
                    );
                    direction = 'dsc';
                } else {
                    sortNameList = this.state.filteredEmploy.sort((x, y) =>
                        x.name.last < y.name.ast ? 1 : -1
                    );
                    direction = 'asc';
                }
                break;
            case 'first':
                if (this.state.sortDirection === 'asc') {
                    sortNameList = this.state.filteredEmploy.sort((x, y) =>
                        x.name.first > y.name.first ? 1 : -1
                    );
                    direction = 'dsc';
                } else {
                    sortNameList = this.state.filteredEmploy.sort((x, y) =>
                        x.name.first < y.name.first ? 1 : -1
                    );
                    direction = 'asc';
                }
                break;
            default:
                break;
        }
        this.setState({
            filterEmploy: sortNameList,
            sortDirection: direction,
        });
    };

    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <div className='container'>
                        <EmploySearch values={this.state.search}
                            handleInputChange={this.handleInputChange} />
                        <div className=''>
                            <EmployTable state={this.state} filterEmploy={this.filterEmploy} sortByName={this.sortByName} />
                        </div>
                        <Alerts type='warning' style={{ opacity: this.state.error ? 1 : 0 }}>
                            {this.state.error}
                        </Alerts>
                    </div>
                </div>
            </div>
        )
    }

}

export default Container;