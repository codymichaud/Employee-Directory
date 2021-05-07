import axios from 'axios';

const APIURL = 'https://randomuser.me/api/?results=50&nat=fr&seed=foobar&exc=login,registered';

const exportedObject = {
    getEmployeeList: () => {
        return axios.get(APIURL);
    },
};

export default exportedObject;