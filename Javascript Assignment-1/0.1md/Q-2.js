 var bill;
 var final;
 bill = 250;
 if (bill > 0 && bill < 100) 
     {
     final = bill * 5;
     console.log(final);
 }
  else if (bill < 200) 
    {
     final = bill * 7;
    console.log(final);
}
 else if (bill < 300)
     {
   final = bill * 10;
   console.log(final);
}
 else 
    {
   console.log("invalid input");
 }
