//expense -> description, amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Filipe André has $1250 in expenses.

//add income array to acount
//addIncome method -> description, amount
//tweak getAccountSummary

const account = {
  name: 'Filipe André',
  income: [],
  expenses: [],

  addIncome: (description, amount) => {
    account.income = [...account.income, {description, amount}];
  },

  //==============outro modo de se fazer addExpense=================*
  // addExpense: function (description, amount) {
  //   const newExpense = {
  //     description: description,
  //     expense: amount
  //   }
  
  //   return account.expenses.push(newExpense)
  // }

  addExpense: (description, amount) => {
    // account.expenses.push({description, amount});
    account.expenses = [...account.expenses, {description, amount}];
  },
  
  getAccountSummary: function () {
    let totalExpenses = 0

    return `${this.name} has ${totalExpenses} in expenses.`
  }
};

//expense -> description, amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Filipe André has $1250 in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
console.log(account.expenses);
console.log(account.getAccountSummary());

// getAccountSummary: function () {
//   const totalExpenses = function () {
//     const expenses = account.expenses;
//     const expensesSum = expenses.forEach((expense, index) => {
//       console.log(expense.expense);
//     });

//     return expensesSum;
//   };
//   return `${account.name} has ${totalExpenses()} in expenses.`;
// }
