// get bill item type radio button selected 'call' or 'sms'
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//get a reference to the call total text
var callTotalTwo = document.querySelector(".callTotalTwo");
// get a reference to the sms total text
var smsTotalTwo = document.querySelector(".smsTotalTwo");
// get a reference to the total text
var totalTwo = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
var totatlBill = 0;
// create a variable that will keep track of the sms total
var smsTotal = 0;
// create a variable that will keep track of the calls total
var callsTotal = 0;
// reset default text for call sms and total, totals
callTotalTwo.innerHTML = "0.00";
smsTotalTwo.innerHTML = "0.00";
totalTwo.innerHTML = "0.00";
function radioBillTotal() {
  // get the value of the selected radio button
  var checkedRadioBtn = document.querySelector(
    "input[name='billItemType']:checked"
  );
  // update the script totals
  if (checkedRadioBtn.value === "call") {
    callsTotal += 2.75;
  } else if (checkedRadioBtn.value === "sms") {
    smsTotal += 0.75;
  }
  // update the DOM totals
  callTotalTwo.innerHTML = callsTotal.toFixed(2);
  smsTotalTwo.innerHTML = smsTotal.toFixed(2);
  var totalCost = callsTotal + smsTotal;
  totalTwo.innerHTML = totalCost.toFixed(2);
  // change the text color based on the criteria
  if (totalCost >= 50) {
    // adding the danger class to make the text red
    totalTwo.classList.add("danger");
  } else if (totalCost >= 30) {
    totalTwo.classList.add("warning");
  }
}

// add an event listener for when the add button is pressed.
radioBillAddBtn.addEventListener("click", radioBillTotal);
