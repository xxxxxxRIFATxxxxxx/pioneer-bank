// Login Button Event Handler
const loginBtn = document.getElementById("login-button");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// Deposit Button Event Handler
const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);
    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);
    document.getElementById("deposit-amount").value = "";
});

function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
};

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById("withdraw-button");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("current-withdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    document.getElementById("current-withdraw").innerText = totalWithdraw;

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - withdrawNumber;
    document.getElementById("current-balance").innerText = totalBalance

    document.getElementById("withdraw-amount").value = "";
});