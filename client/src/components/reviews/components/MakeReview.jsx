import React, { useContext, useState } from 'react';
import '../styles/reviews.css';

const MakeReview () => {

  const [ form, setForm ] = useState({
    product_id: productId,
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: photos,
    characteristics: characteristics

  })

  onChange(e) {

  }



}


var axios = require('axios');
var data = JSON.stringify({
  "product_id": 11001,
  "rating": 3,
  "summary": "I bought two!",
  "body": "Do yourself a favor and buy this",
  "recommend": true,
  "name": "Choppy",
  "email": "choppy@chop.com",
  "photos": [],
  "characteristics": {}
});

var config = {
  method: 'post',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews',
  headers: {
    'Authorization': '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',
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});s