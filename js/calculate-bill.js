//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
// get a reference to the total span element
const totalElement = document.querySelector(".total");
function calculateBtnClicked() {
  // get the string entered in the textArea
  var billString = billStringElement.value;
  //split the string
  var billItems = billString.split(",");
  // a variable for the total phone bill.
  var billTotal = 0;
  //loop over all the bill items
  for (var i = 0; i < billItems.length; i++) {
    var billItem = billItems[i].trim();
    if (billItem === "call") {
      billTotal += 2.75;
    } else if (billItem === "sms") {
      billTotal += 0.75;
    }
  }
  //round to two decimals
  var roundedBillTotal = billTotal.toFixed(2);
  var red = "red";
  var orange = "orange";
  var black = "black";
  totalElement.style.color = `${black}`;
  if (roundedBillTotal > 20) {
    totalElement.style.color = `${orange}`;
  }
  if (roundedBillTotal > 30) {
    totalElement.style.color = `${red}`;
  }
  billTotalElement.innerHTML = roundedBillTotal;
}
//link the function to a click event on the calculate button
calculateBtnElement.addEventListener("click", calculateBtnClicked);
