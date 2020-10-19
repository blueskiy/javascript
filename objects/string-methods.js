// Challenge area

// isValidPassword
// length is more than 8 / and it doesn't contain the word password

let isValidPassword = function (password) {
  // if (password.length > 8 && !password.includes('password')) {
  //   return 'ok its nice!';
  // } else {
  //   return 'invalid password';
  // }

  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%¨&'));
console.log(isValidPassword('asdfpfjaiojfaspassword'));
