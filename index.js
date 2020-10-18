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
    name: "Test",
    amount: "-20",
  },
  {
    name: "Test",
    amount: "-14",
  },
  {
    name: "Test",
    amount: "20",
  },
  {
    name: "Test",
    amount: "-24",
  },
  {
    name: "Test",
    amount: "5000",
  },
  {
    name: "Test",
    amount: "3400",
  },
  {
    name: "Test",
    amount: "-600",
  },
  {
    name: "Test",
    amount: "-4220",
  },
  {
    name: "Test",
    amount: "5000",
  },
];

//Onclick event for adding new transaction
const addTransaction = () => {
  // event.preventDefault();
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
  updateHistory();
};

//Loops through all transactions and adds into history section
const updateHistory = () => {
  history.innerHTML = "";
  for (const entry of transactions) {
    //positive entires
    if (entry.amount >= 0) {
      let element = document.createElement("li");
      let childElement = document.createElement("span");
      let button = document.createElement("button");

      element.innerHTML = `${entry.name}`;
      element.classList.add("plus");
      button.innerHTML = "x";
      button.classList.add("delete-btn");

      childElement.innerHTML = "$ " + entry.amount;
      childElement.append(button);

      element.appendChild(childElement);

      history.append(element);
    }
    //negative entires
    else if (entry.amount < 0) {
      let element = document.createElement("li");
      let childElement = document.createElement("span");
      let button = document.createElement("button");

      element.innerHTML = `${entry.name}`;
      element.classList.add("minus");
      button.innerHTML = "x";
      button.classList.add("delete-btn");

      childElement.innerHTML = "$ " + entry.amount;
      childElement.append(button);

      element.appendChild(childElement);

      history.append(element);
    }
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

  income.innerHTML = "$ " + incomeTot.toFixed(2);
  expense.innerHTML = "$ " + expenseTot.toFixed(2);
};

//loops through transactions and returns total
const updateIncome = () => {
  let total = 0;
  for (x of transactions) {
    let number = parseFloat(x.amount);
    // console.log(number)
    total = total + number;
  }
  balance.innerHTML = `$ ${total.toFixed(2)}`;
};

const refresh = (e) => {
  e.preventDefault();
  addTransaction();
  console.log(transactions);
  updateIncome();
  incomeExpense();
};

updateHistory();
updateIncome();
incomeExpense();

form.addEventListener("submit", refresh);
