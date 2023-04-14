// get bill item type entererd 'call' or 'sms'
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");
//get a reference to the call total text
var callTotalOne = document.querySelector(".callTotalOne");
// get a reference to the sms total text
var smsTotalOne = document.querySelector(".smsTotalOne");
// get a reference to the total text
var totalCostElem = document.querySelector(".totalOne");

// create a variable that will keep track of the sms total
var textSmsTotal = 0;
// create a variable that will keep track of the calls total
var textCallsTotal = 0;
// reset default text for call sms and total, totals
callTotalOne.innerHTML = "0.00";
smsTotalOne.innerHTML = "0.00";
totalCostElem.innerHTML = "0.00";
function textBillTotal() {
  // get the value entered in the billType textfield
  var billTypeEntered = billTypeText.value.trim().toLowerCase();
  // update the correct total
  if (billTypeEntered === "call") {
    textCallsTotal += 2.75;
  } else if (billTypeEntered == "sms") {
    textSmsTotal += 0.75;
  }
  // update the DOM totals
  callTotalOne.innerHTML = textCallsTotal.toFixed(2);
  smsTotalOne.innerHTML = textSmsTotal.toFixed(2);
  var totalCost = textCallsTotal + textSmsTotal;
  totalCostElem.innerHTML = totalCost.toFixed(2);
  // change the text color based on the criteria
  if (totalCost >= 50) {
    // adding the danger class to make the text red
    totalCostElem.classList.add("danger");
  } else if (totalCost >= 30) {
    totalCostElem.classList.add("warning");
  }
}
//add an event listener for when the add button is pressed
addToBillBtn.addEventListener("click", textBillTotal);
