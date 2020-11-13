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
    let totalIncome = 0,
        totalExpenses = 0;
    const accountIncome = account.income,
          accountExpenses = account.expenses;

    const accountSummary = arr => arr.reduce((stack, next) => stack + next.amount, 0);

    // KKKKKKKK MUDA AQUI
    // const accountSummary = arr => arr.reduce((stack, next) => stack + next.amount, 0);

    function accountSummary (accountProp) {
      return accountProp.reduce((stack, b) => (stack + b.amount), 0);
    };

    totalIncome = accountSummary(accountIncome);
    totalExpenses = accountSummary(accountExpenses);

    const balance = totalIncome - totalExpenses;

    return `${account.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`

    //============outra forma de fazer=================*
    // function accountSummary (accountProp) {
    //   let total = 0;
    //   accountProp.forEach((item) => {
    //     total += item.amount;
    //   });
    //   return total;
    // };
  }
};

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 2485);
console.log(account.income);
console.log(account.expenses);
console.log(account.getAccountSummary());
