function BillCalculator() {
  let theCallCost = 0;
  let theSmsCost = 0;
  let theWarningLevel = 0;
  let theCriticalLevel = 0;
  function setCallCost(callCost) {
    theCallCost = callCost;
  }
  function getCallCost() {
    return theCallCost;
  }

  function setSmsCost(smsCost) {
    theSmsCost = smsCost;
  }
  function getSmsCost() {
    return theSmsCost;
  }

  function setWarningLevel(warningLevel) {
    theWarningLevel = warningLevel;
  }
  function getWarningLevel() {
    return theWarningLevel;
  }

  function setCriticalLevel(criticalLevel) {
    theCriticalLevel = criticalLevel;
  }
  function getCriticalLevel() {
    return theCriticalLevel;
  }

  // using values
  let callsMade = 0;
  let smsSent = 0;
  function makeCall() {
    if (!hasReachedCriticalLevel()) {
      callsMade += getCallCost();
      console.log(callsMade);
    }
  }

  function totalCallCost() {
    return callsMade.toFixed(2);
  }

  function sendSms() {
    if (!hasReachedCriticalLevel()) {
      smsSent += getSmsCost();
    }
  }

  function totalSmsCost() {
    return smsSent.toFixed(2);
  }

  function totalCost() {
    return (callsMade + smsSent).toFixed(2);
  }

  // using levels
  function hasReachedCriticalLevel() {
    return totalCost() >= getCriticalLevel();
  }
  function totalClassName() {
    if (hasReachedCriticalLevel()) {
      return "danger";
    }
    if (totalCost() >= getWarningLevel()) {
      return "warning";
    }
  }
  return {
    getCallCost,
    setCallCost,
    setSmsCost,
    getSmsCost,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    //using values
    makeCall,
    totalCallCost,
    sendSms,
    totalSmsCost,
    totalCost,
    // using levels
    totalClassName,
  };
}
