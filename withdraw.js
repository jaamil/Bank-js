function getInputWithdrawFeild(withdrawId) {
  const withdrawFeild = document.getElementById(withdrawId);
  const withdrawValue = withdrawFeild.value;
  const newWithdrawAmount = parseFloat(withdrawValue);
  withdrawFeild.value = "";
    return newWithdrawAmount;
}

function getInputWithdrawElement(elementId) {
  const withdrawElement = document.getElementById(elementId);
  const withdrawValueElement = withdrawElement.innerText;
  const prevWithdrawAmountElement = parseFloat(withdrawValueElement);

  return prevWithdrawAmountElement;
}

function SetInputText(elementId, newValue) {
  const withdrawElement = document.getElementById(elementId);
  withdrawElement.innerText = newValue;
}

document.getElementById("withdraw-btn").addEventListener("click", function () {

  const newWithdrawValueTotal = getInputWithdrawFeild("withdraw-input");

  const prevWithdrawElementValueTotal = getInputWithdrawElement("withdraw-total");

  const TotalWithdrawAmount = prevWithdrawElementValueTotal + newWithdrawValueTotal;

  SetInputText("withdraw-total", TotalWithdrawAmount);

  // balance Part

  const BalanceValueTotal = getInputWithdrawElement("balance-total");
  const BalanceValueTotalAmount = BalanceValueTotal - newWithdrawValueTotal;

  SetInputText("balance-total", BalanceValueTotalAmount);
});
