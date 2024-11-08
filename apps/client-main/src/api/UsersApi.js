import axios from 'axios';

const UsersApi = {
  getAll() {
    return axios.get('/api/users').then(function ({ data }) {
      return data;
    });
  },
  createReservation(userId, request) {
    return axios.post(`/api/users/${userId}/reservations`, request);
  },
  cancelReservation(userId, id) {
    return axios.delete(`/api/users/${userId}/reservations/${id}`);
  },
  findAllReservations(userId) {
    return axios.get(`/api/users/${userId}/reservations`).then(function ({ data }) {
      return data;
    });
  }
};

export default UsersApi;
