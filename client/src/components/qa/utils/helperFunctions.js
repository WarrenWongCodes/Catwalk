import axios from 'axios';
import KEYS from '../../../../../config';

const options = {
  baseURL: `${KEYS.ENDPOINT}`,
  headers: {
    Authorization: `${KEYS.API_KEY}`,
  },
};

const helpfulQuestion = (questionId) => {
  axios
    .put(`/qa/questions/${questionId}/helpful`, null, options)
    .then((res) => console.log(res, 'Updated Question Helpfulness'))
    .catch((err) => console.log(err));
};

const reportQuestion = (questionId) => {
  axios
    .put(`/qa/questions/${questionId}/report`, null, options)
    .then((res) => console.log(res, 'Successfully Reported Question'))
    .catch((err) => console.log(err));
};

const helpfulAnswer = (answerId) => {
  axios
    .put(`/qa/answers/${answerId}/helpful`, null, options)
    .then((res) => console.log(res, 'Updated Answer Helpfulness'))
    .catch((err) => console.log(err));
};

const reportAnswer = (answerId) => {
  axios
    .put(`/qa/answers/${answerId}/report`, null, options)
    .then((res) => console.log(res, 'Successfully Reported Answer'))
    .catch((err) => console.log(err));
};

export { helpfulQuestion, reportQuestion, helpfulAnswer, reportAnswer };
