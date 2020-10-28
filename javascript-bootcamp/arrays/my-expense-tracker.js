const account = {
  name: 'Filipe André',
  expenses: [],
  addExpense: (description, amount) => {
    account.expenses = [...account.expenses, {description, amount}];
  }
};

//expense -> description, amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Filipe André has $1250 in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
console.log(account.expenses);
