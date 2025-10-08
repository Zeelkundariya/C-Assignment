var temperature = 18;

if (temperature < 0)
{
  console.log("Freezing Cold");
} 
else if (temperature >= 0 && temperature <= 15)
{
  console.log("Very Cold");
}
else if (temperature >= 16 && temperature <= 25)
{
  console.log("Cold");
} 
else if (temperature >= 26 && temperature <= 35) 
{
  console.log("Warm");
} 
else
{
  console.log("Hot");
}
