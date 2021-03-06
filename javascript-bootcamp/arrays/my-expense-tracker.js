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

  addExpense: (description, amount) => {
    account.expenses = [...account.expenses, {description, amount}];
  },
  
  getAccountSummary: () => {
    let totalIncome = 0;
    let totalExpenses = 0;
    const accountIncome = account.income;
    const accountExpenses = account.expenses;

    function accountSummary (accountProp) {
      return accountProp.reduce((stack, currentItem) => (stack + currentItem.amount), 0);
    };

    totalIncome = accountSummary(accountIncome);
    totalExpenses = accountSummary(accountExpenses);

    const balance = totalIncome - totalExpenses;

    return `${account.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
  }
};

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 2485);
console.log(account.income);
console.log(account.expenses);
console.log(account.getAccountSummary());
