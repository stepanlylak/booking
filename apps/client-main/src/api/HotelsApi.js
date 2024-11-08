import axios from 'axios';

const HotelsApi = {
  getAll() {
    return axios.get('/api/hotels').then(function ({ data }) {
      return data;
    });
  },
  getById(id) {
    return axios.get(`/api/hotels/${id}`).then(function ({ data }) {
      return data;
    });
  }
};

export default HotelsApi;
