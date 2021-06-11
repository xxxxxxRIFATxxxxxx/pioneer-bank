// Login Button Event Handler
const loginBtn = document.getElementById("login-button");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// Common Function
function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
};

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
};

// Deposit Button Event Handler
const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("deposit-amount");
    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);
    document.getElementById("deposit-amount").value = "";
});

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById("withdraw-button");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdraw-amount");
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);
    document.getElementById("withdraw-amount").value = "";
});
