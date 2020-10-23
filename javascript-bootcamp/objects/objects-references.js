let myAccount = {
  name: 'Filipe André',
  expenses: 0,
  income: 0,
};

let otherAccount = myAccount;

let addExpense = function (account, amount) {
  // account = { }
  account.expenses += amount;
  // console.log(account);
};

// addIncome
let addIncome = function (account, income) {
  account.income += income;
};

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// getAccountSummary
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;

  return `Account for ${account.name} has ${balance}. ${account.income} in income. ${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
