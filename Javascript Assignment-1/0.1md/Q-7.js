
var marksPercentage = 75;
var familyIncome = 450000;


if (marksPercentage >= 85 && familyIncome < 300000)
{
  console.log("Full Scholarship");
}
else if (marksPercentage >= 70 && familyIncome < 500000) 
{
  console.log("Half Scholarship");
}
else
{
  console.log("Not eligible for scholarship");
}

