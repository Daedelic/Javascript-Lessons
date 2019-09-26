
let stop = false;
function testNaN (number) {
  console.log(stop);
  if (isNaN (number) ){
      stop = true;
      return "type a real number";
    } else {




function main () {
let firstNumber, secondNumber, text;
firstNumber = document.getElementByID("textfield1").value;
document.getElementByID("validityTest1").innerHTML = alert (testNaN (firstNumber));
document.getElementByID("validityTest1").innerHTML = testNaN(firstNumber);

secondNumber = document.getElementByID("textfield2").value;
document.getElementByID("validityTest1").innerHTML = alert (testNaN (secondNumber));
document.getElementByID("validityTest1").innerHTML = testNaN(secondNumber);
}
