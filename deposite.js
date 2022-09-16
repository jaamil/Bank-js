function getInputFeildValueById(inputFeildId) {
  const inputFeild = document.getElementById(inputFeildId);
  const inputfeildString = inputFeild.value;
  const newInputStringAmount = parseFloat(inputfeildString);
  inputFeild.value = "";
  return newInputStringAmount;
}

function getInputElement(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const value = parseFloat(elementValueString);
  return value;
}

function setText (elementId, newInput){
    const element = document.getElementById(elementId)
    element.innerText = newInput
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositeAmount = getInputFeildValueById("deposit-input");

  const prevTotalDeposit = getInputElement("deposit-total");

    const currentDepositTotal = prevTotalDeposit + newDepositeAmount
    setText ('deposit-total', currentDepositTotal)

    // balance part

    const prevBalance = getInputElement('balance-total');
    const prevTotalBalance = prevBalance + newDepositeAmount

    setText('balance-total', prevTotalBalance)

});
