 var annual;
 var tax;

 annual = 500000;
 if (annual <= 250000) 
 {
     console.log("No tax");
 }
 else if (annual > 250000 && annual <= 500000)
 {
     tax = (annual * 5) / 100;
    console.log(tax);
 } 
 else if (annual > 500000 && annual <= 1000000)
 {
     tax = (annual * 20) / 100;
     console.log(tax);
 }
 else if (annual > 1000000) 
 {
     tax = (annual * 30) / 100;
     console.log(tax);
 }

