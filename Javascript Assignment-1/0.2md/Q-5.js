
var numbers = [43, 3, 23, 7, 98, 1]; 
var minvalue = numbers[0];

for (var i = 1; i < numbers.length; i++) 
{
  if (numbers[i] < minvalue) 
  {
    minvalue = numbers[i];
  }
}
console.log("The smallest number is: " + minvalue);