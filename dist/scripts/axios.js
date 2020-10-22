'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.get('https://api.github.com/users/blueskiy').then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.warn(error);
});
//# sourceMappingURL=axios.js.map