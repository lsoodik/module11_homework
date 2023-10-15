let num1 =+ prompt("введите первое число: ")
let num2 =+ prompt("введите второе число: ")
function printInInterval(num1,num2){
  let interval = setInterval(function(){
  console.log(num1);
  
  if (num1===num2){
    clearInterval(interval);
  }
  else if (num1 <num2){
    num1++;
  }
  else{
    num1--;
  }
  },1000)
}
printInInterval(num1,num2);
