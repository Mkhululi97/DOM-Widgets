// get bill item type radio button selected 'call or sms'
var billItemTypeWithSettings = document.querySelector(
  ".billItemTypeWithSettings"
);
// get a reference to the add button
var addBtnWithSettings = document.querySelector(".addBtnWithSettings");
// get a reference to the call total text
var callTotalSettings = document.querySelector(".callTotalSettings");
// get a reference to the sms total text
var smsTotalSettings = document.querySelector(".smsTotalSettings");
// get a reference to the total text
var totalSettings = document.querySelector(".totalSettings");
// get a reference to the update settings button
var updateSettingsBtn = document.querySelector(".updateSettings");

/* ===== DECLARE VARIABLES FOR THE SETTINGS ELEMENTS ===== */
// get a reference to the call cost, sms cost, warning level, critical level elements.
var callCostSettingValue,
  smsCostSettingValue,
  warningLevelValue,
  criticalLevelValue;

var totalCostSettings, addBtnEnable;

// create a variable that will keep track of the total bill
var totalBill = 0;
// create a variable that will keep track of the sms total
var smsTotal = 0;
// create a variable that will keep track of the total
var callsTotal = 0;

// reset default text for call sms and total, totals
callTotalSettings.innerHTML = "0.00";
smsTotalSettings.innerHTML = "0.00";
totalSettings.innerHTML = "0.00";

function checkPositiveInput() {
  if (
    callCostSettingValue > 0 &&
    smsCostSettingValue > 0 &&
    warningLevelValue > 0 &&
    criticalLevelValue > 0
  ) {
    addBtnEnable = true;
  } else {
    addBtnEnable = false;
  }
}

/* ===== FUNCTIONS ===== */
function updateSettings() {
  // get the value from each of the settings input
  callCostSettingValue = Number(
    document.querySelector(".callCostSetting").value
  );
  smsCostSettingValue = Number(document.querySelector(".smsCostSetting").value);
  warningLevelValue = Number(
    document.querySelector(".warningLevelSetting").value
  );
  criticalLevelValue = Number(
    document.querySelector(".criticalLevelSetting").value
  );
  checkPositiveInput();
  if (totalCostSettings < criticalLevelValue) {
    totalSettings.classList.remove("danger");
  }
  if (totalCostSettings < warningLevelValue) {
    totalSettings.classList.remove("warning");
  }
}
function settingsBillTotal() {
  // Make the add button work when pressed, based on the addBtnEnable boolean value
  if (addBtnEnable) {
    // get the value of the selected radio button
    var checkedRadioBtnSettings = document.querySelector(
      "input[name='billItemTypeWithSettings']:checked"
    );
    // update the script totals
    if (checkedRadioBtnSettings.value === "call") {
      callsTotal += callCostSettingValue;
    } else if (checkedRadioBtnSettings.value === "sms") {
      smsTotal += smsCostSettingValue;
    }
    // update the dom totals
    callTotalSettings.innerHTML = callsTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);
    totalCostSettings = callsTotal + smsTotal;
    totalSettings.innerHTML = totalCostSettings.toFixed(2);
    // change the text color based on the criteria
    if (totalCostSettings >= criticalLevelValue) {
      totalSettings.classList.add("danger");
      addBtnEnable = false;
    } else if (totalCostSettings >= warningLevelValue) {
      totalSettings.classList.add("warning");
    }
  }
}

/* ===== EVENT LISTENERS ===== */
addBtnWithSettings.addEventListener("click", settingsBillTotal);
updateSettingsBtn.addEventListener("click", updateSettings);
