import axios from 'axios';

const ReservationsApi = {
  getAll() {
    return axios.get('/api/reservations').then(function ({ data }) {
      return data;
    });
  },
  create(request) {
    return axios.post('/api/reservations', request);
  },
  getById(id) {
    return axios.get(`/api/hotels/${id}`).then(function ({ data }) {
      return data;
    });
  }
};

export default ReservationsApi;
