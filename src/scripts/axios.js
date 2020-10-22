import axios from 'axios';

axios.get('https://api.github.com/users/blueskiy')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  })