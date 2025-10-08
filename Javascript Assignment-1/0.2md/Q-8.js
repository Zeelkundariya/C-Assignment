
var numbers = [5, -2, 0, 10, -7, 0, 3, -1];
var positivecount = 0;
var negativecount = 0;
var zerocount = 0;

for (var i = 0; i < numbers.length; i++) 
{
  if (numbers[i] > 0) 
  {
    positivecount++;
  }
  else if (numbers[i] < 0) 
  {
    negativecount++;
  } 
  else
  {
    zerocount++;
  }
}

console.log("Positive numbers:", positivecount);
console.log("Negative numbers:", negativecount);
console.log("Zero numbers:", zerocount);
