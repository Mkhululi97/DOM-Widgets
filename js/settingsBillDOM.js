let callTotalSettings = document.querySelector(".callTotalSettings");
let smsTotalSettings = document.querySelector(".smsTotalSettings");
let totalSettings = document.querySelector(".totalSettings");
let callCostInput = document.querySelector(".callCostSetting");
let smsCostInput = document.querySelector(".smsCostSetting");
let warningLevelInput = document.querySelector(".warningLevelSetting");
let criticalLevelInput = document.querySelector(".criticalLevelSetting");
let updateSettingsButton = document.querySelector(".updateSettings");
let addButton = document.querySelector(".addBtnWithSettings");

callTotalSettings.innerHTML = "0.00";
smsTotalSettings.innerHTML = "0.00";
totalSettings.innerHTML = "0.00";

let selectedRadioBtn;
let billCalculator = BillCalculator();
let btnsEnabled = false;

function useInputValues() {
  if (btnsEnabled) {
    selectedRadioBtn = document.querySelector(
      ".billItemTypeWithSettings:checked"
    );
    if (selectedRadioBtn.value === "call") {
      billCalculator.makeCall();
    }
    if (selectedRadioBtn.value === "sms") {
      billCalculator.sendSms();
    }
    callTotalSettings.innerHTML = billCalculator.totalCallCost();
    smsTotalSettings.innerHTML = billCalculator.totalSmsCost();
    totalSettings.innerHTML = billCalculator.totalCost();
    if (
      Number(billCalculator.totalCost()) >= billCalculator.getCriticalLevel()
    ) {
      totalSettings.classList.add(billCalculator.totalClassName());
    } else {
    }

    if (
      Number(billCalculator.totalCost() >= billCalculator.getWarningLevel())
    ) {
      totalSettings.classList.add(billCalculator.totalClassName());
    }
  }
}

function setInputValues() {
  if (
    callCostInput.value > 0 &&
    smsCostInput.value > 0 &&
    warningLevelInput.value > 0 &&
    criticalLevelInput.value > 0
  ) {
    btnsEnabled = true;
  } else {
    btnsEnabled = false;
  }

  if (btnsEnabled) {
    billCalculator.setCallCost(Number(callCostInput.value));
    billCalculator.setSmsCost(Number(smsCostInput.value));
    billCalculator.setCriticalLevel(Number(criticalLevelInput.value));
    billCalculator.setWarningLevel(Number(warningLevelInput.value));
  }
}

updateSettingsButton.addEventListener("click", setInputValues);
addButton.addEventListener("click", useInputValues);

// get the the button to disable if the setSmsCost and setCallCost, warning and critical level, values are less than 0.
