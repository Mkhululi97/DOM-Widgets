/* ===== HANDLEBARS JS ===== */
let templateRadio = document.querySelector("#template").innerHTML;
let templateFunctionRadio = Handlebars.compile(templateRadio);
let contextRadio = {
  callTotal: "0.00",
  smsTotal: "0.00",
  total: "0.00",
};
let htmlRadio = templateFunctionRadio(contextRadio);
let tableElRadio = document.querySelector(".table-template-radio");
tableElRadio.innerHTML = htmlRadio;

// create a call total variable and set it to 0.
let callTotalRadioBill = 0;
// create a sms total variable and set it to 0.
let smsTotalRadioBill = 0;
// create total variable
let totalRadioBill;

// create function for adding
function addBtnFunction() {
  let radioBtn = document.querySelector(".billItemTypeRadio:checked");
  if (radioBtn) {
    if (radioBtn.value === "call") {
      callTotalRadioBill += 2.75;
    } else if (radioBtn.value === "sms") {
      smsTotalRadioBill += 0.75;
    }
  }
  totalRadioBill = (callTotalRadioBill + smsTotalRadioBill).toFixed(2);

  /* UPDATE THE HANDLEBARS CONTEXT */
  contextRadio = {
    callTotal: callTotalRadioBill.toFixed(2),
    smsTotal: smsTotalRadioBill.toFixed(2),
    total: totalRadioBill,
  };
  htmlRadio = templateFunctionRadio(contextRadio);
  tableElRadio.innerHTML = htmlRadio;

  // grab the total element
  let totalRadioBillEl = document.querySelector(
    ".table-template-radio .totalBill"
  );
  console.log(totalRadioBillEl);
  if (totalRadioBill > 30) {
    totalRadioBillEl.classList.add("warning");
  }
  if (totalRadioBill > 50) {
    totalRadioBillEl.classList.add("danger");
  }
}
// get the add button
let addBtnRadioBill = document.querySelector(".radioBillAddBtn");
// add an event listener for the add button
addBtnRadioBill.addEventListener("click", addBtnFunction);
