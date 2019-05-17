//global variables
var shoeSize = parseInt(prompt('Enter your Shoe size'));
var birth = parseInt(prompt('Enter your birth year'));

function myFunc(a, b) {
  var m = shoeSize * 2;
  m += 5;
  m *= 50;
  m -= birth;
  m += 1766;
  alert('The result is: ' + m);
}
myFunc(shoeSize, birth);
