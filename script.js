//code 1-------

let number = 12

    if (number > 0) {
      if (number % 2 === 0) {
        console.log(`${number} is a positive even number.`);
      } else {
        console.log(`${number} is a positive odd number.`);
      }
    } else if (number < 0) {
      console.log(`${number} is a negative number.`);
    } else {
      console.log(`${number} is zero.`);
    }


//code 2---------
var n=5
for (i=1;i<=10;i++){
  console.log(n+"*"+i+"="+n*i)
}


//code 3-------
var n1=4
var n2=6
if(n1%2==0 && n2%2==0){
  console.log(n1+n2)
}
else{
  console.log("not valid")
}