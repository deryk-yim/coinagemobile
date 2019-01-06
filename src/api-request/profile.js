import Axios from 'axios';
import * as environment from '../constants/environment';

const RESOURCE = 'profile';
const API = `${environment.API_SERVER}/${RESOURCE}`;

export const login = (profile) => {
  Axios.post(`${API}/login`, profile);
};

export const register = (profile) => {
  Axios.post(`${API}/register`, profile);
};

// export const logout = () => {
//   Axios.post(`${API}/logout`);
// };

// export const getReset = (token) => {
//   Axios.get(`${API}/reset/${token}`);
// };

// export const postReset = (token) => {
//   Axios.post(`${API}/reset${token}`);
// };

// export const forgot = () => {
//   Axios.post(`${API}/forgot`);
// };

// export const update = () => {
//   Axios.post(`${API}/update`);
// };
