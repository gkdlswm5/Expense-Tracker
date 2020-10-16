const balance = document.getElementById("balance");
const income = document.getElementById("money-plus");
const expense = document.getElementById("money-minus");
const history = document.getElementById("list");
const transactionText = document.getElementById("text");
const transactionNum = document.getElementById("amount");
const submit = document.querySelector(".btn");
const form = document.getElementById("form");

//Transactions will be pushed into this array
const transactions = [
  {
    name: "groceries",
    amount: "20",
  },
  {
    name: "Food",
    amount: "20",
  },
  {
    name: "Hi",
    amount: "20",
  },
  {
    name: "Food",
    amount: "20",
  },
  {
    name: "Hi",
    amount: "20",
  },
  {
    name: "Food",
    amount: "20",
  },
  {
    name: "Hi",
    amount: "20",
  },
  {
    name: "Food",
    amount: "20",
  },
  {
    name: "Hi",
    amount: "-220",
  },
];

//Onclick event for adding new transaction
const addTransaction = (event) => {
  event.preventDefault();
  const transName = transactionText.value;
  const transAmt = transactionNum.value;
  //   var id = transactions.length;

  if (transName === "" || transAmt === "") {
    alert("Please enter a value");
  } else {
    const value = {
      name: transName.trim(),
      amount: transAmt.trim(),
    };

    transactions.push(value);
    transactionText.value = "";
    transactionNum.value = "";
  }
  console.log(transactions);
  updateHistory();
};

//Loops through all transactions and adds into history section
const updateHistory = () => {
  history.innerHTML = "";
  for (const entry of transactions) {
    let element = document.createElement("div");
    const output = `Name: ${entry.name} // Amount: $${entry.amount}`;
    element.innerHTML = output;
    history.append(element);
  }
};

//updates income / expense section
const incomeExpense = () => {
  let incomeTot = 0;
  let expenseTot = 0;
  for (x of transactions) {
    // console.log(x.amount);
    let number = parseFloat(x.amount);
    if (number >= 0) {
      incomeTot += number;
    } else if (number < 0) {
      expenseTot += number;
    }
  }

  income.innerHTML = "$" + incomeTot.toFixed(2);
  expense.innerHTML = "$" + expenseTot.toFixed(2);
};

incomeExpense();

//loops through transactions and returns total
const updateIncome = () => {
  let total = 0;
  for (x of transactions) {
    let number = parseFloat(x.amount);
    // console.log(number)
    total = total + number;
  }
  balance.innerHTML = `$${total.toFixed(2)}`;
};

updateHistory();
updateIncome();
// console.log(total);
// updateHistory();

form.addEventListener("submit", addTransaction);
