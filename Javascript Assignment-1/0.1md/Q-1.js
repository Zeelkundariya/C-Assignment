var sub1;
var sub2; 
var sub3;
var sub4; 
var sub5;
var avg;
sub1=59;
sub2=86;
sub3=70;
sub4=70;
sub5=57;

avg=(sub1+sub2+sub3+sub4+sub5)/5;

if(avg>=90){
  console.log('"A" grade')
}
else if(avg>=80 && avg<89) {
  console.log('"B" Grade')
}
else if(avg>=70 && avg<79) {
  console.log('"C" Grade')
}
else if(avg>=60 && avg<69) {
  console.log('"D" Grade')
}
else{
  console.log('Fail')
}