import axios from 'axios';
import KEYS from '../../../../../config.js';

export default axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc',
  headers: {
    Authorization: KEYS.API_KEY,
    'Content-Type': 'application/json',
  },
});
