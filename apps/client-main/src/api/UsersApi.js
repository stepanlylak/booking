import axios from 'axios';

const UsersApi = {
  getAll() {
    return axios.get('/api/users').then(function ({ data }) {
      return data;
    });
  }
};

export default UsersApi;
