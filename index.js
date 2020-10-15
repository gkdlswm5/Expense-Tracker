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
    amount: "$20",
  },
  {
    name: "Food",
    amount: "$20",
  },
  {
    name: "Hi",
    amount: "$20",
  },
];

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

const updateHistory = () => {
  history.innerHTML = "";
  for (const entry of transactions) {
    let element = document.createElement("div");
    const output = `Name: ${entry.name}  Amount: ${entry.amount}`;
    element.innerHTML = output;
    history.append(element);
  }
};

// updateHistory();

form.addEventListener("submit", addTransaction);
