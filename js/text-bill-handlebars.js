/* ===== HANDLEBARS JS ===== */
let template = document.querySelector("#template").innerHTML;
let templateFunction = Handlebars.compile(template);
let context = {
  callTotal: "0.00",
  smsTotal: "0.00",
  total: "0.00",
};
let html = templateFunction(context);
let tableEl = document.querySelector(".table-template");
tableEl.innerHTML = html;

// grab the input field
let inputField = document.querySelector(".billTypeText");
// create a call total variable and set it to 0.
let callTotalTextBill = 0;
// create a sms total variable and set it to 0.
let smsTotalTextBill = 0;
// create total variable
let totalTextBill;
// create function for adding
function addBtnFunction() {
  if (inputField.value.toLowerCase() === "call") {
    callTotalTextBill += 2.75;
  } else if (inputField.value.toLowerCase() === "sms") {
    smsTotalTextBill += 0.75;
  }
  totalTextBill = (callTotalTextBill + smsTotalTextBill).toFixed(2);

  /* UPDATE THE HANDLEBARS */
  context = {
    callTotal: callTotalTextBill.toFixed(2),
    smsTotal: smsTotalTextBill.toFixed(2),
    total: totalTextBill,
  };
  html = templateFunction(context);
  tableEl.innerHTML = html;

  // grab the total element
  let totalTextBillEl = document.querySelector(".totalBill");
  if (totalTextBill > 30) {
    totalTextBillEl.classList.add("warning");
  }
  if (totalTextBill > 50) {
    totalTextBillEl.classList.add("danger");
  }
}

// get the add button
let addBtnTextBill = document.querySelector(".addToBillBtn");
// add an event listener for the add button
addBtnTextBill.addEventListener("click", addBtnFunction);
