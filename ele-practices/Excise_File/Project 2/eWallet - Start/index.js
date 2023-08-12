// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

function getFormattedTime() {
  const currentTime = new Date().toLocaleTimeString("en-us", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = currentTime.split(",")[0].split(" ");
  const time = currentTime.split(",")[1];
  return `${date[1]} ${date[0]}, ${time}`;
}

document.querySelector("#ewallet-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const type = document.querySelector(".add__type").value;
  const desc = document.querySelector(".add__description").value;
  const value = document.querySelector(".add__value").value;

  if (desc && value.length > 0) {
    addItems(type, desc, value);
    resetForm();
  }
});

showItems();

function showItems() {
  let items = getItemfromLS();

  const collection = document.querySelector(".collection");

  for (let item of items) {
    const newHtml = `
  <div class="item">
  <div class="item-description-time">
      <div class="item-description">
          <p>${item.desc}</p>
      </div>
      <div class="item-time">
          <p>${item.time}</p>
      </div>
  </div>
  <div class="item-amount ${
    item.type === "+" ? "income-amount" : "expense-amount"
  }">
      <p>${item.type}$${seprator(item.value)}</p>
  </div>
  </div>`;

    collection.insertAdjacentHTML("afterbegin", newHtml);
  }
}

function addItems(type, desc, value) {
  const time = getFormattedTime();

  const newHtml = `
  <div class="item">
  <div class="item-description-time">
      <div class="item-description">
          <p>${desc}</p>
      </div>
      <div class="item-time">
          <p>${time}</p>
      </div>
  </div>
  <div class="item-amount ${type === "+" ? "income-amount" : "expense-amount"}">
      <p>${type}$${seprator(value)}</p>
  </div>
</div>`;

  const collection = document.querySelector(".collection");
  collection.insertAdjacentHTML("afterbegin", newHtml);

  addItemstoLS(type, desc, value, time);
  showTotalIncome();
  showTotalExpense();
  showTotalBalance();
}

function resetForm() {
  document.querySelector(".add__type").value = "+";
  document.querySelector(".add__description").value = "";
  document.querySelector(".add__value").value = "";
}

function getItemfromLS() {
  let items = localStorage.getItem("items");
  if (items) {
    items = JSON.parse(items);
  } else {
    items = [];
  }
  return items;
}

function addItemstoLS(type, desc, value, time) {
  let items = getItemfromLS();
  items.push({ type, desc, value, time });
  localStorage.setItem("items", JSON.stringify(items));
}

showTotalIncome();

function showTotalIncome() {
  let items = getItemfromLS();
  let totalIncome = 0;
  for (let item of items) {
    if (item.type === "+") {
      totalIncome += parseInt(item.value);
    }
  }
  console.log(totalIncome);
  document.querySelector(".income__amount p").innerText = `$${seprator(
    totalIncome
  )}`;
}

showTotalExpense();

function showTotalExpense() {
  let items = getItemfromLS();
  let totalExpense = 0;
  for (let item of items) {
    if (item.type === "-") {
      totalExpense += parseInt(item.value);
    }
  }
  console.log(totalExpense);
  document.querySelector(".expense__amount p").innerText = `$${seprator(
    totalExpense
  )}`;
}

showTotalBalance();

function showTotalBalance() {
  let items = getItemfromLS();
  let balance = 0;

  for (let item of items) {
    if (item.type === "+") {
      balance += parseInt(item.value);
    } else {
      balance -= parseInt(item.value);
    }
  }
  document.querySelector(".balance__amount p").innerText = seprator(balance);

  document.querySelector("header").className = balance >= 0 ? "green" : "red";
}

function seprator(amount) {
  amount = parseInt(amount);
  return amount.toLocaleString();
}
